import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/30 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <p className="font-cormorant text-primary/60 text-xs tracking-[0.5em] uppercase mb-4">
          With Love & Blessings
        </p>
        <h2 className="font-vibes text-4xl md:text-6xl text-primary text-glow mb-6">
          <span className="font-playfair">P</span>ooja & <span className="font-playfair">A</span>shok
        </h2>
        <p className="font-cormorant text-muted-foreground text-base md:text-lg leading-relaxed italic mb-8">
          "Two souls with but a single thought, two hearts that beat as one."
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/20" />
          <Heart className="w-4 h-4 text-primary/40" fill="currentColor" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/20" />
        </div>

        <p className="font-cormorant text-muted-foreground/50 text-xs tracking-[0.2em]">
          We can't wait to celebrate with you
        </p>
      </motion.div>
    </footer>
  );
}