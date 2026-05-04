import React from 'react';
import { motion } from 'framer-motion';
import ArchFrame from './ArchFrame';
import SectionDivider from './SectionDivider';

const GROOM_IMAGE = "/images/groom.jpg";
const BRIDE_IMAGE = "/images/bride.jpg";

export default function CoupleSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-cormorant text-primary/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-3">
            Together Forever
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-foreground text-glow mb-4">
            The Couple
          </h2>
          <p className="font-cormorant text-muted-foreground text-base md:text-lg italic max-w-md mx-auto">
            Two families, many traditions, one timeless celebration
          </p>
          <SectionDivider />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-28">
          <ArchFrame
            imageUrl={GROOM_IMAGE}
            name="Ashok"
            label="The Groom"
            parents="S/o Ankiteddy & Lakshmi Devi"
            delay={0.1}
          />

          {/* Center decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:flex flex-col items-center"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <div className="my-4 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-lg animate-pulse-glow" />
              <span className="font-vibes text-4xl text-primary text-glow relative">&amp;</span>
            </div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
          </motion.div>

          <ArchFrame
            imageUrl={BRIDE_IMAGE}
            name="Pooja"
            label="The Bride"
            parents="D/o Rama Krishna Reddy & Srikala"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}