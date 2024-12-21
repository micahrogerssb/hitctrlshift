export class AudioManager {
  private static instance: AudioManager;
  private audio: HTMLAudioElement | null = null;
  private listeners: Set<(state: AudioState) => void> = new Set();

  private constructor() {
    this.initAudio();
  }

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  private initAudio() {
    this.audio = new Audio('https://ice1.somafm.com/groovesalad-128-mp3');
    this.audio.preload = 'none';
    
    // Set initial volume
    this.audio.volume = 1.0;
    this.audio.muted = false;
  }

  public getAudio(): HTMLAudioElement | null {
    return this.audio;
  }

  public play() {
    if (this.audio) {
      this.audio.play().catch(console.error);
      this.notifyListeners();
    }
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
      this.notifyListeners();
    }
  }

  public setVolume(value: number) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, value));
      this.notifyListeners();
    }
  }

  public toggleMute() {
    if (this.audio) {
      this.audio.muted = !this.audio.muted;
      this.notifyListeners();
    }
  }

  public getState(): AudioState {
    if (!this.audio) return { isPlaying: false, volume: 1, isMuted: false };
    
    return {
      isPlaying: !this.audio.paused,
      volume: this.audio.volume,
      isMuted: this.audio.muted
    };
  }

  public subscribe(callback: (state: AudioState) => void) {
    this.listeners.add(callback);
    callback(this.getState()); // Initial state
    return () => this.listeners.delete(callback);
  }

  private notifyListeners() {
    const state = this.getState();
    this.listeners.forEach(callback => callback(state));
  }
}

export interface AudioState {
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
}