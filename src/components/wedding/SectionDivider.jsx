import React from 'react';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary/40" fill="currentColor">
        <path d="M12 2L9 9H2l6 4.5L5.5 22 12 17l6.5 5-2.5-8.5L22 9h-7z" />
      </svg>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
    </div>
  );
}