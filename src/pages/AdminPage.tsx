import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  RefreshCw,
  ArrowLeft,
  Sparkles,
  Server,
  CircleCheck,
  Lock,
  Users,
  Clock,
  Activity,
  Search,
  FileText,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { configStatus } from '../lib/firebase';
import { useApp } from '../context/AppContext';
import { ThreeDSceneCanvas } from '../components/3d/ThreeDSceneCanvas';
import { Tilt3DCard } from '../components/3d/Tilt3DCard';
import { ThreeDButton } from '../components/3d/ThreeDButton';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { StatCard } from '../components/ui/StatCard';

interface AdminMetrics {
  aiStatus: string;
  aiModel: string;
  firestoreStatus: string;
  uptimeHours: number;
  totalRegisteredUsers: number;
  activeStudentsWeek: number;
  totalStudyHoursLogged: number;
  totalFocusSessions: number;
  totalPlansGenerated: number;
  rateLimitHits: number;
}

interface AdminUser {
  id: string;
  displayName: string;
  email: string;
  maskedEmail: string;
  role: 'admin' | 'student';
  status: string;
  createdAt: string;
  totalStudyHours: number;
}

interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: string;
  actor: string;
  details: string;
  status: string;
}

export const AdminPage: React.FC = () => {
  const { user, userProfile } = useAuth();
  const { showToast } = useApp();

  const [metrics, setMetrics] = useState<AdminMetrics>({
    aiStatus: 'unconfigured',
    aiModel: 'Google Gemini 1.5 Flash',
    firestoreStatus: 'healthy',
    uptimeHours: 24.5,
    totalRegisteredUsers: 4,
    activeStudentsWeek: 4,
    totalStudyHoursLogged: 148.5,
    totalFocusSessions: 220,
    totalPlansGenerated: 32,
    rateLimitHits: 0,
  });

  const [users, setUsers] = useState<AdminUser[]>([
    {
      id: 'usr-adm-01',
      displayName: userProfile?.displayName || 'Primary Administrator',
      email: user?.email || 'admin@studypilot.edu',
      maskedEmail: 'a***n@studypilot.edu',
      role: 'admin',
      status: 'active',
      createdAt: '2026-09-01',
      totalStudyHours: 42.5,
    },
    {
      id: 'usr-std-02',
      displayName: 'Alex Chen',
      email: 'alex.chen@university.edu',
      maskedEmail: 'a***n@university.edu',
      role: 'student',
      status: 'active',
      createdAt: '2026-09-15',
      totalStudyHours: 46.5,
    },
    {
      id: 'usr-std-03',
      displayName: 'Maya Lin',
      email: 'm.lin@college.edu',
      maskedEmail: 'm***n@college.edu',
      role: 'student',
      status: 'active',
      createdAt: '2026-09-20',
      totalStudyHours: 38,
    },
    {
      id: 'usr-std-04',
      displayName: 'David Kim',
      email: 'dkim@state.edu',
      maskedEmail: 'd***m@state.edu',
      role: 'student',
      status: 'active',
      createdAt: '2026-10-01',
      totalStudyHours: 21.5,
    },
  ]);

  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>([
    {
      id: 'aud-1',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      action: 'DEMO_SESSION_STARTED',
      actor: user?.email || 'admin@studypilot.edu',
      details: 'Sandbox admin session started locally. No server verification occurs in this demo.',
      status: 'success',
    },
    {
      id: 'aud-2',
      timestamp: '2 hours ago',
      action: 'RATE_LIMIT_POLICY_SAMPLE',
      actor: 'demo',
      details: 'Sample entry. Rate limiting is not active in this demo deployment.',
      status: 'success',
    },
    {
      id: 'aud-3',
      timestamp: 'Yesterday',
      action: 'FIRESTORE_STATUS_SAMPLE',
      actor: 'demo',
      details: 'Sample entry. No live Firestore connection in this demo; security rules are not active.',
      status: 'success',
    },
  ]);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const refreshData = async () => {
    // Demo/static hosting: no backend exists; keep seeded sample data and make no network calls.
    if (!configStatus.isConfigured) return;
    setIsRefreshing(true);
    try {
      const overviewRes = await fetch('/api/admin/overview', {
        headers: { Authorization: 'Bearer admin-token-authenticated' },
      });
      if (overviewRes.ok) {
        const data = await overviewRes.json();
        if (data.metrics) setMetrics(data.metrics);
        if (data.auditLogs) setAuditLogs(data.auditLogs);
      }
      const usersRes = await fetch('/api/admin/users', {
        headers: { Authorization: 'Bearer admin-token-authenticated' },
      });
      if (usersRes.ok) {
        const data = await usersRes.json();
        if (data.users && data.users.length > 0) setUsers(data.users);
      }
    } catch {
      // Admin API unavailable (static hosting / sandbox mode): keep seeded demo data.
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const toggleRole = async (targetUserId: string) => {
    if (!configStatus.isConfigured) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === targetUserId
            ? { ...u, role: u.role === 'admin' ? 'student' : 'admin' }
            : u
        )
      );
      showToast('Role Updated (Demo)', 'Sample directory only - no real account changed.', 'info');
      return;
    }
    try {
      const res = await fetch('/api/admin/toggle-role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer admin-token-authenticated',
        },
        body: JSON.stringify({ targetUserId }),
      });
      if (res.ok) {
        showToast('Role Updated', 'User permissions successfully altered.', 'success');
        refreshData();
      } else {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === targetUserId
              ? { ...u, role: u.role === 'admin' ? 'student' : 'admin' }
              : u
          )
        );
        showToast('Role Updated (Sandbox)', 'Toggled user authorization role.', 'info');
      }
    } catch {
      showToast('Error', 'Failed to communicate with admin endpoint.', 'error');
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.maskedEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-pilot-pale p-4 sm:p-8 space-y-6 relative overflow-hidden font-sans">
      <ThreeDSceneCanvas
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        intensity="subtle"
        particleCount={90}
      />

      <div className="relative z-10 space-y-6 max-w-7xl mx-auto">
        <Tilt3DCard
          maxTilt={3}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-pilot-soft/80 shadow-[0_3px_0_0_#ADBBDA,0_8px_20px_rgba(61,82,160,0.06)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#4A62B6] to-[#27356B] flex items-center justify-center text-white shadow-3d-btn border-t border-white/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-slate-900">
                  Administrator 3D Command Console
                </h1>
                <Badge
                  variant="primary"
                  size="sm"
                  className="bg-pilot-deep text-white border-transparent"
                >
                  Demo Console
                </Badge>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Prototype command console - sample data only, no live backend connected
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <ThreeDButton
              variant="metallic-chrome"
              size="sm"
              onClick={refreshData}
              isLoading={isRefreshing}
              leftIcon={<RefreshCw className="w-3.5 h-3.5 text-pilot-deep" />}
            >
              Refresh Metrics
            </ThreeDButton>
            <Link to="/dashboard">
              <ThreeDButton
                variant="metallic-deep"
                size="sm"
                leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
              >
                Student Cockpit
              </ThreeDButton>
            </Link>
          </div>
        </Tilt3DCard>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Tilt3DCard
            maxTilt={4}
            className="p-4 bg-white rounded-2xl border border-pilot-soft/80 shadow-card flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pilot-pale flex items-center justify-center text-pilot-deep shadow-3d-secondary">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  AI Generation Engine
                </p>
                <h3 className="text-sm font-bold text-slate-900">{metrics.aiModel}</h3>
              </div>
            </div>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold ${metrics.aiStatus === 'online' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
              <span className={`w-2 h-2 rounded-full ${metrics.aiStatus === 'online' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
              {metrics.aiStatus === 'online' ? 'Active & Ready' : 'Unconfigured Key'}
            </span>
          </Tilt3DCard>

          <Tilt3DCard
            maxTilt={4}
            className="p-4 bg-white rounded-2xl border border-pilot-soft/80 shadow-card flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pilot-pale flex items-center justify-center text-pilot-periwinkle shadow-3d-secondary">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Firestore Data Isolation
                </p>
                <h3 className="text-sm font-bold text-slate-900">User Scope Strict</h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CircleCheck className="w-3.5 h-3.5 text-emerald-600" />
              Simulated
            </span>
          </Tilt3DCard>

          <Tilt3DCard
            maxTilt={4}
            className="p-4 bg-white rounded-2xl border border-pilot-soft/80 shadow-card flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pilot-pale flex items-center justify-center text-pilot-muted shadow-3d-secondary">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Rate Limit Policy
                </p>
                <h3 className="text-sm font-bold text-slate-900">15 req / user / hour</h3>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              0 Hits
            </span>
          </Tilt3DCard>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Tilt3DCard maxTilt={5}>
            <StatCard
              title="Total Registered Students"
              value={metrics.totalRegisteredUsers}
              change="+1 this week"
              trend="up"
              icon={<Users className="w-5 h-5" />}
              iconBg="bg-pilot-pale text-pilot-deep"
            />
          </Tilt3DCard>
          <Tilt3DCard maxTilt={5}>
            <StatCard
              title="Total Study Hours Logged"
              value={`${metrics.totalStudyHoursLogged}h`}
              change="Aggregated"
              trend="up"
              icon={<Clock className="w-5 h-5" />}
              iconBg="bg-pilot-pale text-pilot-periwinkle"
            />
          </Tilt3DCard>
          <Tilt3DCard maxTilt={5}>
            <StatCard
              title="Completed Focus Sessions"
              value={metrics.totalFocusSessions}
              change="Accurate timestamps"
              trend="neutral"
              icon={<Activity className="w-5 h-5" />}
              iconBg="bg-pilot-pale text-pilot-muted"
            />
          </Tilt3DCard>
          <Tilt3DCard maxTilt={5}>
            <StatCard
              title="Study Plans Synthesized"
              value={metrics.totalPlansGenerated}
              change="AI + Algorithmic"
              trend="up"
              icon={<Sparkles className="w-5 h-5" />}
              iconBg="bg-pilot-pale text-pilot-deep"
            />
          </Tilt3DCard>
        </div>

        <div className="p-4 rounded-2xl bg-pilot-deep/5 border border-pilot-soft text-pilot-dark flex items-start gap-3 shadow-3d-secondary">
          <Lock className="w-4 h-4 text-pilot-deep shrink-0 mt-0.5" />
          <div className="text-xs space-y-0.5">
            <p className="font-bold text-pilot-deep">Privacy-First Design</p>
            <p className="text-slate-600">
              StudyPilot is designed so that individual students' private task notes, assignment
              text, and personal study records are not exposed to administrators or third parties.
            </p>
          </div>
        </div>

        <Tilt3DCard
          maxTilt={2}
          className="p-6 bg-white rounded-2xl border border-pilot-soft/80 shadow-card space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">User Management Directory</h2>
              <p className="text-xs text-slate-500">
                Sample directory for the prototype. Role and status controls here do not change
                any real accounts.
              </p>
            </div>
            <div className="w-full sm:w-64">
              <Input
                placeholder="Search by name, email, or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="w-4 h-4" />}
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Student / User</th>
                  <th className="py-3 px-4">Masked Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Account Status</th>
                  <th className="py-3 px-4">Study Volume</th>
                  <th className="py-3 px-4">Joined</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {filteredUsers.map((u) => {
                  const isCurrent = u.email === user?.email || u.id === 'user-admin-1';
                  return (
                    <tr key={u.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-md bg-pilot-pale text-pilot-deep flex items-center justify-center font-bold text-xs shadow-2xs">
                            {u.displayName[0]}
                          </div>
                          <span className="font-semibold text-slate-900">{u.displayName}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-600">{u.maskedEmail}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={u.role === 'admin' ? 'primary' : 'neutral'}
                          size="sm"
                          className={
                            u.role === 'admin'
                              ? 'bg-pilot-deep text-white border-transparent'
                              : 'bg-slate-100 text-slate-700'
                          }
                        >
                          {u.role.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {u.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-semibold text-slate-800">
                        {u.totalStudyHours} hrs
                      </td>
                      <td className="py-3 px-4 text-slate-500">{u.createdAt}</td>
                      <td className="py-3 px-4 text-right">
                        {isCurrent ? (
                          <span className="text-[11px] text-slate-400 italic font-mono">
                            Current Session
                          </span>
                        ) : (
                          <ThreeDButton
                            variant="metallic-chrome"
                            size="sm"
                            onClick={() => toggleRole(u.id)}
                            className="px-2.5 py-1 text-xs"
                          >
                            {u.role === 'admin' ? 'Revoke Admin' : 'Make Admin'}
                          </ThreeDButton>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Tilt3DCard>

        <Tilt3DCard
          maxTilt={2}
          className="p-6 bg-white rounded-2xl border border-pilot-soft/80 shadow-card space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-pilot-deep" />
              <h3 className="text-sm font-bold text-slate-900">
                Security &amp; Operational Audit Log
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Sample audit data</span>
          </div>
          <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
            {auditLogs.map((log) => (
              <div key={log.id} className="p-3 flex items-center justify-between gap-4 bg-white">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-900">{log.action}</span>
                    <span className="text-[11px] text-slate-400">by {log.actor}</span>
                  </div>
                  <p className="text-slate-600">{log.details}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono shrink-0">
                  {log.timestamp}
                </span>
              </div>
            ))}
          </div>
        </Tilt3DCard>
      </div>
    </div>
  );
};
