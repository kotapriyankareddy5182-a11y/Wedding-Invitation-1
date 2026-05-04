import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MandalaPattern from './MandalaPattern';

export default function InvitationEnvelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />
      <MandalaPattern />

      <AnimatePresence>
        {!isOpening ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2, y: -60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center px-4"
          >
            {/* Ganesha at top */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 flex flex-col items-center"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-primary/15 blur-lg animate-pulse-glow" />
                <img
                  src="https://media.base44.com/images/public/69f5b05f0ccff00555d4552c/2429dfbff_generated_image.png"
                  alt="Lord Ganesha"
                  className="relative z-10 w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                />
              </div>
              <p className="font-cormorant text-primary/80 text-sm tracking-[0.3em] mt-3 uppercase">
                ॐ गणेशाय नमः
              </p>
            </motion.div>

            {/* Envelope card */}
            <div className="relative glass-card rounded-2xl p-8 md:p-12 max-w-sm w-full text-center shadow-[0_0_60px_rgba(212,175,55,0.08)]">
              {/* Gold corner ornaments */}
              {[
                'top-3 left-3 rotate-0',
                'top-3 right-3 rotate-90',
                'bottom-3 left-3 -rotate-90',
                'bottom-3 right-3 rotate-180',
              ].map((pos, i) => (
                <svg key={i} viewBox="0 0 20 20" className={`absolute w-5 h-5 ${pos}`} fill="none">
                  <path d="M 1 10 L 1 1 L 10 1" stroke="hsl(43, 72%, 53%)" strokeWidth="1.2" opacity="0.6" />
                </svg>
              ))}

              <p className="font-cormorant text-primary/60 text-xs tracking-[0.5em] uppercase mb-3">
                You're Invited
              </p>
              <h1 className="font-vibes text-5xl md:text-6xl text-primary text-glow-strong mb-2">
                <span className="font-playfair">P</span>ooja & <span className="font-playfair">A</span>shok
              </h1>
              <p className="font-cormorant text-muted-foreground text-sm tracking-[0.3em] mb-1">
                Wedding Celebration
              </p>
              <p className="font-cormorant text-primary/70 text-base tracking-[0.2em] mb-8">
                March 24, 2026
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
                <svg viewBox="0 0 20 20" className="w-3 h-3 text-primary/40" fill="currentColor">
                  <path d="M10 2l2 6h6l-5 3.5 2 6-5-3.5-5 3.5 2-6L2 8h6z" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
              </div>

              <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-3 px-8 py-3 rounded-full border border-primary/40 bg-primary/10 font-cormorant text-primary text-base tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary/20 hover:border-primary/70 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <span>✦</span>
                Open Invitation
                <span>✦</span>
              </motion.button>

              <p className="font-cormorant text-muted-foreground/40 text-xs mt-5 tracking-wide italic">
                Tap to unveil the celebration
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="opening"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative z-10 text-center"
          >
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              className="font-vibes text-5xl text-primary text-glow-strong"
            >
              With Love & Blessings...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}