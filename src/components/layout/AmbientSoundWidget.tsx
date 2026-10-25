import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, CloudRain, Waves, Coffee, Brain, Play, Pause } from 'lucide-react';
import { ambientAudio, type AmbientSoundType } from '../../services/ambientAudioService';

export const AmbientSoundWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState<AmbientSoundType>('rain');
  const [volume, setVolume] = useState(0.4);

  const sounds: { id: AmbientSoundType; label: string; icon: any }[] = [
    { id: 'rain', label: 'Gentle Rain', icon: CloudRain },
    { id: 'waves', label: 'Ocean Waves', icon: Waves },
    { id: 'lofi-noise', label: 'Warm Lo-Fi', icon: Coffee },
    { id: 'alpha-wave', label: 'Alpha 432Hz', icon: Brain },
  ];

  const handleTogglePlay = () => {
    if (isPlaying) {
      ambientAudio.stop();
      setIsPlaying(false);
    } else {
      ambientAudio.play(currentSound, volume);
      setIsPlaying(true);
    }
  };

  const handleSelectSound = (soundId: AmbientSoundType) => {
    setCurrentSound(soundId);
    if (isPlaying) {
      ambientAudio.play(soundId, volume);
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    ambientAudio.setVolume(newVol);
  };

  useEffect(() => {
    return () => {
      // Keep playing across routes unless intentionally stopped
    };
  }, []);

  return (
    <div className="relative">
      {/* Pill Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 border ${
          isPlaying
            ? 'bg-pilot-deep text-white border-pilot-deep shadow-3d-btn active:translate-y-px'
            : 'bg-white hover:bg-pilot-pale/80 text-pilot-deep border-pilot-soft/70 shadow-3d-secondary active:translate-y-px'
        }`}
        title="Ambient Focus Sounds"
      >
        {isPlaying ? (
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-3 bg-white rounded-xs animate-pulse" />
            <span className="w-1.5 h-4 bg-white rounded-xs animate-pulse delay-75" />
            <span className="w-1.5 h-2 bg-white rounded-xs animate-pulse delay-150" />
          </div>
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-pilot-muted" />
        )}
        <span className="hidden sm:inline">
          {isPlaying ? sounds.find((s) => s.id === currentSound)?.label : 'Ambient Audio'}
        </span>
      </button>

      {/* Popover Menu with Normal 3D Tactile Styling */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl border border-pilot-soft/80 shadow-[0_4px_0_0_#ADBBDA,0_16px_32px_-6px_rgba(61,82,160,0.18)] p-4 z-50 animate-in fade-in zoom-in-95 duration-150 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-pilot-soft/40">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-pilot-deep" />
                <span className="text-xs font-bold text-pilot-dark uppercase tracking-wider">
                  Lo-Fi Ambient Sounds
                </span>
              </div>
              <button
                type="button"
                onClick={handleTogglePlay}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                  isPlaying
                    ? 'bg-pilot-deep text-white shadow-3d-btn'
                    : 'bg-pilot-pale text-pilot-deep hover:bg-pilot-soft/50 shadow-3d-secondary'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
              </button>
            </div>

            {/* Sound options */}
            <div className="grid grid-cols-2 gap-2 my-3">
              {sounds.map((sound) => {
                const Icon = sound.icon;
                const isSelected = currentSound === sound.id;
                return (
                  <button
                    key={sound.id}
                    type="button"
                    onClick={() => handleSelectSound(sound.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                      isSelected
                        ? 'bg-pilot-pale border-pilot-periwinkle text-pilot-deep font-semibold shadow-3d-secondary'
                        : 'bg-white border-pilot-soft/40 hover:border-pilot-soft text-slate-600 hover:bg-pilot-pale/40'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-pilot-periwinkle' : 'text-pilot-muted'}`} />
                    <span className="truncate">{sound.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Volume slider */}
            <div className="pt-2 border-t border-pilot-soft/40">
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5 font-medium">
                <span>Volume</span>
                <span>{Math.round(volume * 100)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <VolumeX className="w-3.5 h-3.5 text-pilot-muted" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-full accent-pilot-deep h-1.5 bg-pilot-pale rounded-lg cursor-pointer"
                />
                <Volume2 className="w-3.5 h-3.5 text-pilot-deep" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
