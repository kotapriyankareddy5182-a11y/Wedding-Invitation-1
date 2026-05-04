import React from 'react';
import { motion } from 'framer-motion';

const GANESHA_IMG = "https://media.base44.com/images/public/69f5b05f0ccff00555d4552c/2429dfbff_generated_image.png";

export default function GaneshaIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex flex-col items-center mb-6"
    >
      <div className="relative">
        <div className="absolute -inset-6 rounded-full bg-primary/15 animate-pulse-glow blur-lg" />
        <div className="absolute -inset-3 rounded-full bg-primary/10 animate-pulse-glow" />
        <img
          src={GANESHA_IMG}
          alt="Lord Ganesha"
          className="relative z-10 w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="font-cormorant text-primary/80 text-sm tracking-[0.3em] mt-4 uppercase"
      >
        ॐ गणेशाय नमः
      </motion.p>
    </motion.div>
  );
}