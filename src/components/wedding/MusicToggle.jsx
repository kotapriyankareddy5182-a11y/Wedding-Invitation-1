import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const MUSIC_URL = "/audio/bgm.mp3";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audio.addEventListener('canplaythrough', () => setReady(true), { once: true });
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => { });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.5 }}
      onClick={toggle}
      title={isPlaying ? 'Pause music' : 'Play background music'}
      className="fixed top-6 right-6 z-50 w-11 h-11 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4 text-primary" />
      ) : (
        <VolumeX className="w-4 h-4 text-primary/50" />
      )}

      {/* Pulsing ring when playing */}
      {isPlaying && (
        <span className="absolute -inset-1 rounded-full border border-primary/30 animate-ping opacity-40 pointer-events-none" />
      )}

      {/* Equaliser bars when playing */}
      {isPlaying && (
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-[2px]">
          {[1, 2, 3].map(i => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-primary/60"
              style={{
                height: `${6 + i * 3}px`,
                animation: `equalize ${0.4 + i * 0.15}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </span>
      )}

      <style>{`
        @keyframes equalize {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1.2); }
        }
      `}</style>
    </motion.button>
  );
}