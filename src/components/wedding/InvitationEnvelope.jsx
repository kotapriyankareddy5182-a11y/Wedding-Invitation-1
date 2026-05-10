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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#FC9798]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FC9798] via-[#EFBC65] to-[#DFDA70] opacity-90" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-[150px]" />
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
                <div className="absolute -inset-6 rounded-full bg-white/30 blur-lg animate-pulse-glow" />
                <motion.img
                  src="/images/ganesha.png"
                  alt="Lord Ganesha"
                  className="relative z-10 w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-white/50 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <p className="font-cormorant text-white/90 text-sm tracking-[0.3em] mt-3 uppercase">
                ॐ गणेशाय नमः
              </p>
            </motion.div>

            {/* Envelope card */}
            <div className="relative glass-card rounded-2xl p-8 md:p-12 max-w-sm w-full text-center shadow-[0_0_60px_rgba(255,255,255,0.2)] border-white/40 bg-white/10 backdrop-blur-md">
              {/* Gold corner ornaments */}
              {[
                'top-3 left-3 rotate-0',
                'top-3 right-3 rotate-90',
                'bottom-3 left-3 -rotate-90',
                'bottom-3 right-3 rotate-180',
              ].map((pos, i) => (
                <svg key={i} viewBox="0 0 20 20" className={`absolute w-5 h-5 ${pos}`} fill="none">
                  <path d="M 1 10 L 1 1 L 10 1" stroke="white" strokeWidth="1.2" opacity="0.8" />
                </svg>
              ))}

              <p className="font-cormorant text-white/80 text-xs tracking-[0.5em] uppercase mb-3">
                You're Invited
              </p>
              <h1 className="font-vibes text-5xl md:text-6xl text-white drop-shadow-md mb-2">
                <span className="font-playfair">P</span>ooja & <span className="font-playfair">A</span>shok
              </h1>
              <p className="font-cormorant text-white/70 text-sm tracking-[0.3em] mb-1">
                Wedding Celebration
              </p>
              <p className="font-cormorant text-white/90 text-base tracking-[0.2em] mb-8">
                March 24, 2026
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50" />
                <svg viewBox="0 0 20 20" className="w-3 h-3 text-white/60" fill="currentColor">
                  <path d="M10 2l2 6h6l-5 3.5 2 6-5-3.5-5 3.5 2-6L2 8h6z" />
                </svg>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50" />
              </div>

              <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/60 bg-white/20 font-cormorant text-white text-base tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/30 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                <span>✦</span>
                Open Invitation
                <span>✦</span>
              </motion.button>

              <p className="font-cormorant text-white/60 text-xs mt-5 tracking-wide italic">
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
              className="font-vibes text-5xl text-white drop-shadow-lg"
            >
              With Love & Blessings...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}