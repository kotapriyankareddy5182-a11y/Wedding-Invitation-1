import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

const WEDDING_DATE = new Date('2026-03-24T00:00:00');

function CountdownDigit({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative group">
        <div className="absolute -inset-2 bg-primary/10 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
        <div className="relative glass-card rounded-xl w-16 h-20 md:w-24 md:h-28 flex items-center justify-center">
          <span className="font-playfair text-3xl md:text-5xl text-primary text-glow-strong font-bold">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <p className="font-cormorant text-muted-foreground text-xs md:text-sm tracking-[0.3em] uppercase mt-3">
        {label}
      </p>
    </motion.div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTime());
    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-cormorant text-primary/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-3">
            Counting Every Moment
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-foreground text-glow mb-4">
            Until We Say "I Do"
          </h2>
          <SectionDivider />
        </motion.div>

        <div className="flex items-center justify-center gap-4 md:gap-8 mt-12">
          <CountdownDigit value={timeLeft.days} label="Days" />
          <span className="font-vibes text-3xl text-primary/30 mt-[-20px]">:</span>
          <CountdownDigit value={timeLeft.hours} label="Hours" />
          <span className="font-vibes text-3xl text-primary/30 mt-[-20px]">:</span>
          <CountdownDigit value={timeLeft.minutes} label="Minutes" />
          <span className="font-vibes text-3xl text-primary/30 mt-[-20px]">:</span>
          <CountdownDigit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}