import type { IncomingMessage, ServerResponse } from 'http';

// In-memory rate limiting map: userId/ip -> timestamps[]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 15;

function applySecurityHeaders(res: ServerResponse, origin: string | undefined): void {
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:4173',
    process.env.APP_URL || '',
  ].filter(Boolean);

  const matchedOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0] || 'http://localhost:5173';

  res.setHeader('Access-Control-Allow-Origin', matchedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '0');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Content-Type', 'application/json');
}

function sanitizeString(val: unknown, maxLen = 300): string {
  if (typeof val !== 'string') return '';
  return val
    .replace(/[<>{}\\]/g, '') // Strip script/tag characters
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, maxLen);
}

export async function handleAiPlanGenerationRequest(
  req: IncomingMessage,
  res: ServerResponse
): Promise<void> {
  const origin = req.headers.origin as string | undefined;
  applySecurityHeaders(res, origin);

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  // Enforce POST
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  // Verify Authorization header
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.statusCode = 401;
    res.end(
      JSON.stringify({
        error: 'Unauthorized. Valid authentication token required.',
      })
    );
    return;
  }

  const token = authHeader.split('Bearer ')[1]?.trim();
  if (!token || token.length < 5) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: 'Unauthorized. Invalid bearer token format.' }));
    return;
  }

  const clientId = token.substring(0, 32);

  // Enforce rate limiting
  const now = Date.now();
  const userTimestamps = rateLimitMap.get(clientId) || [];
  const validTimestamps = userTimestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  res.setHeader('X-RateLimit-Limit', String(MAX_REQUESTS_PER_WINDOW));
  res.setHeader('X-RateLimit-Remaining', String(Math.max(0, MAX_REQUESTS_PER_WINDOW - validTimestamps.length)));

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    res.statusCode = 429;
    res.end(
      JSON.stringify({
        error: 'Too Many Requests. Hourly study plan generation limit reached.',
      })
    );
    return;
  }

  validTimestamps.push(now);
  rateLimitMap.set(clientId, validTimestamps);

  // Read request payload with 512KB size limit
  let bodyStr = '';
  const MAX_SIZE = 512 * 1024;

  req.on('data', (chunk) => {
    bodyStr += chunk;
    if (bodyStr.length > MAX_SIZE) {
      res.statusCode = 413;
      res.end(JSON.stringify({ error: 'Payload too large.' }));
      req.destroy();
    }
  });

  req.on('end', async () => {
    try {
      const payload = JSON.parse(bodyStr || '{}');
      const { config, subjects, tasks } = payload;

      if (!config || !subjects || !tasks) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Missing required planning parameters.' }));
        return;
      }

      // Read server-side secret API key (NEVER sent to client)
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === 'your_gemini_api_key_here') {
        res.statusCode = 503;
        res.end(
          JSON.stringify({
            error: 'AI_PROVIDER_UNCONFIGURED',
            message: 'GEMINI_API_KEY is not configured on the server. Falling back to deterministic scheduling.',
          })
        );
        return;
      }

      // Sanitize inputs before embedding into prompt
      const sanitizedGoal = sanitizeString(config.goal);
      const sanitizedStrategy = sanitizeString(config.planningStrategy);
      const sanitizedSubjects = (Array.isArray(subjects) ? subjects : []).slice(0, 20).map((s: any) => ({
        id: sanitizeString(s.id, 50),
        code: sanitizeString(s.code, 20),
        name: sanitizeString(s.name, 100),
        difficulty: ['easy', 'medium', 'hard'].includes(s.difficulty) ? s.difficulty : 'medium',
      }));
      const sanitizedTasks = (Array.isArray(tasks) ? tasks : []).slice(0, 50).map((t: any) => ({
        id: sanitizeString(t.id, 50),
        title: sanitizeString(t.title, 120),
        subjectId: sanitizeString(t.subjectId, 50),
        dueDate: sanitizeString(t.dueDate, 30),
        priority: ['low', 'medium', 'high'].includes(t.priority) ? t.priority : 'medium',
        estimatedMinutes: Math.min(Math.max(Number(t.estimatedMinutes) || 45, 15), 360),
      }));

      // Build concise, structured prompt for Gemini
      const prompt = `
You are an expert academic study planner for university and high school students.
Create an optimal 7-day weekly study schedule based on the following student data.

Student Config:
- Goal: ${sanitizedGoal}
- Strategy: ${sanitizedStrategy}
- Daily study limit: ${Math.min(Number(config.dailyLimitMinutes) || 240, 720)} minutes
- Preferred session duration: ${Math.min(Number(config.preferredSessionMinutes) || 45, 120)} minutes
- Break duration: ${Math.min(Number(config.breakDurationMinutes) || 5, 30)} minutes
- Available Days: ${JSON.stringify(config.availableDays || [1, 2, 3, 4, 5, 6, 0])}

Enrolled Courses:
${JSON.stringify(sanitizedSubjects)}

Upcoming Assignments & Exams:
${JSON.stringify(sanitizedTasks)}

Output RULES:
Return ONLY valid JSON matching this schema exactly (no markdown formatting, no code block backticks):
{
  "title": "StudyPlan: Week of [Start Date]",
  "summary": "Brief 2-sentence summary of strategy and pacing",
  "assumptions": ["assumption 1", "assumption 2"],
  "warnings": [],
  "suggestions": ["tip 1", "tip 2"],
  "sessions": [
    {
      "title": "Session description",
      "subjectId": "matching subject id",
      "taskId": "optional task id if working on specific task",
      "date": "YYYY-MM-DD",
      "startTime": "HH:MM",
      "endTime": "HH:MM",
      "durationMinutes": 45,
      "notes": "Objective for session"
    }
  ]
}
`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.2,
              responseMimeType: 'application/json',
            },
          }),
        }
      );

      if (!response.ok) {
        res.statusCode = 502;
        res.end(JSON.stringify({ error: 'AI provider error. Please try again.' }));
        return;
      }

      const geminiData = (await response.json()) as any;
      const textResponse =
        geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '{}';

      let planObj;
      try {
        planObj = JSON.parse(textResponse);
      } catch {
        res.statusCode = 502;
        res.end(JSON.stringify({ error: 'Invalid JSON returned from AI model.' }));
        return;
      }

      res.statusCode = 200;
      res.end(JSON.stringify({ plan: planObj }));
    } catch {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Internal server error processing schedule request.' }));
    }
  });
}
