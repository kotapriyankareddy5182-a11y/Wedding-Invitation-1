import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MandalaPattern from './MandalaPattern';
import GaneshaIcon from './GaneshaIcon';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      {/* Golden aura glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />

      <MandalaPattern />

      <div className="relative z-20 text-center">
        <GaneshaIcon />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="font-cormorant text-primary/70 text-sm md:text-base tracking-[0.5em] uppercase mb-4">
            Wedding Celebration
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          className="font-vibes text-6xl md:text-8xl lg:text-9xl text-primary text-glow-strong mb-6"
        >
          <span className="font-playfair">P</span>ooja & <span className="font-playfair">A</span>shok
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex items-center justify-center gap-4 mb-2"
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-primary/50" />
          <p className="font-cormorant text-foreground/80 text-lg md:text-xl tracking-[0.3em]">
            May 6, 2026
          </p>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="font-cormorant text-muted-foreground text-sm md:text-base tracking-[0.2em] italic mt-2"
        >
          Together with their families
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <p className="font-cormorant text-primary/50 text-xs tracking-[0.3em] uppercase">
          Scroll to Explore
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}