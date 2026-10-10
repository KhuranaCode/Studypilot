/**
 * StudyPilot Minimalist Ambient Sound Synthesizer
 * Built using the Web Audio API: 100% offline, zero external sound asset dependencies.
 */

export type AmbientSoundType = 'none' | 'rain' | 'waves' | 'lofi-noise' | 'alpha-wave';

class AmbientAudioEngine {
  private audioCtx: AudioContext | null = null;
  private currentSound: AmbientSoundType = 'none';
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false;
  private activeNodes: (AudioNode | number)[] = [];

  private initContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public getSound(): AmbientSoundType {
    return this.currentSound;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(volume: number) {
    if (this.gainNode && this.audioCtx) {
      const clamped = Math.max(0, Math.min(1, volume));
      this.gainNode.gain.setValueAtTime(clamped, this.audioCtx.currentTime);
    }
  }

  public stop() {
    if (!this.audioCtx) return;

    this.activeNodes.forEach((node) => {
      if (typeof node === 'number') {
        window.clearInterval(node);
      } else {
        try {
          if ('stop' in node && typeof (node as any).stop === 'function') {
            (node as any).stop();
          }
          node.disconnect();
        } catch {
          // ignore disconnect issues
        }
      }
    });

    this.activeNodes = [];
    this.isPlaying = false;
    this.currentSound = 'none';
  }

  public play(type: AmbientSoundType, volume = 0.4) {
    this.initContext();
    if (!this.audioCtx) return;

    if (this.isPlaying) {
      this.stop();
    }

    if (type === 'none') {
      return;
    }

    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime);
    this.gainNode.connect(this.audioCtx.destination);

    switch (type) {
      case 'rain':
        this.startRainSynthesis();
        break;
      case 'waves':
        this.startOceanWaves();
        break;
      case 'lofi-noise':
        this.startWarmPinkNoise();
        break;
      case 'alpha-wave':
        this.startAlphaBinaural();
        break;
    }

    this.isPlaying = true;
    this.currentSound = type;
  }

  // 1. Rain Synthesizer: Band-passed pink noise with lowpass damping
  private startRainSynthesis() {
    if (!this.audioCtx || !this.gainNode) return;

    const bufferSize = 2 * this.audioCtx.sampleRate;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.11;
    }

    const whiteNoise = this.audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, this.audioCtx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(this.gainNode);
    whiteNoise.start();

    this.activeNodes.push(whiteNoise, filter);
  }

  // 2. Ocean Waves: Modulated low-frequency noise
  private startOceanWaves() {
    if (!this.audioCtx || !this.gainNode) return;

    const bufferSize = 2 * this.audioCtx.sampleRate;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = this.audioCtx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.audioCtx.currentTime);

    const waveGain = this.audioCtx.createGain();

    // LFO modulator for tides (1 wave every ~6 seconds)
    const lfo = this.audioCtx.createOscillator();
    lfo.frequency.setValueAtTime(0.12, this.audioCtx.currentTime);

    const lfoGain = this.audioCtx.createGain();
    lfoGain.gain.setValueAtTime(0.4, this.audioCtx.currentTime);

    lfo.connect(lfoGain);
    lfoGain.connect(waveGain.gain);

    noise.connect(filter);
    filter.connect(waveGain);
    waveGain.connect(this.gainNode);

    noise.start();
    lfo.start();

    this.activeNodes.push(noise, filter, waveGain, lfo, lfoGain);
  }

  // 3. Warm Lo-Fi Pink Noise
  private startWarmPinkNoise() {
    if (!this.audioCtx || !this.gainNode) return;

    const bufferSize = 2 * this.audioCtx.sampleRate;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.08;
    }

    const source = this.audioCtx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, this.audioCtx.currentTime);

    source.connect(filter);
    filter.connect(this.gainNode);
    source.start();

    this.activeNodes.push(source, filter);
  }

  // 4. Alpha Wave (432Hz deep meditative study tone)
  private startAlphaBinaural() {
    if (!this.audioCtx || !this.gainNode) return;

    const osc1 = this.audioCtx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(216, this.audioCtx.currentTime);

    const osc2 = this.audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(224, this.audioCtx.currentTime); // 8Hz alpha differential

    const subGain = this.audioCtx.createGain();
    subGain.gain.setValueAtTime(0.25, this.audioCtx.currentTime);

    osc1.connect(subGain);
    osc2.connect(subGain);
    subGain.connect(this.gainNode);

    osc1.start();
    osc2.start();

    this.activeNodes.push(osc1, osc2, subGain);
  }
}

export const ambientAudio = new AmbientAudioEngine();
