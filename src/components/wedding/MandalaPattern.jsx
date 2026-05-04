import React from 'react';
import { motion } from 'framer-motion';

export default function MandalaPattern() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] opacity-[0.06]"
      >
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <defs>
            <radialGradient id="mandalaGrad">
              <stop offset="0%" stopColor="hsl(43, 72%, 53%)" />
              <stop offset="100%" stopColor="hsl(43, 72%, 53%)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 250 250)`}>
              <ellipse cx="250" cy="120" rx="30" ry="80" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.8" />
              <ellipse cx="250" cy="150" rx="15" ry="50" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
              <circle cx="250" cy="80" r="8" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
            </g>
          ))}
          {[...Array(8)].map((_, i) => (
            <g key={`outer-${i}`} transform={`rotate(${i * 45} 250 250)`}>
              <path d="M 250 50 Q 280 150 250 200 Q 220 150 250 50" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.6" />
            </g>
          ))}
          <circle cx="250" cy="250" r="200" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="180" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.3" />
          <circle cx="250" cy="250" r="100" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.4" />
          <circle cx="250" cy="250" r="30" fill="none" stroke="url(#mandalaGrad)" strokeWidth="0.6" />
        </svg>
      </motion.div>
    </div>
  );
}