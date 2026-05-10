import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Heart, PartyPopper } from 'lucide-react';
import SectionDivider from './SectionDivider';

const events = [
  {
    icon: Sun,
    title: "Haldi Ceremony",
    date: "March 23, 2026",
    description: "The auspicious turmeric ceremony blessing the couple with love and warmth.",
  },
  {
    icon: Sparkles,
    title: "Muhurtam",
    date: "March 23, 2026",
    description: "The sacred wedding rituals performed during the divine auspicious hour.",
  },
  {
    icon: Heart,
    title: "Wedding",
    date: "March 24, 2026",
    description: "The grand celebration where two souls unite in the bond of marriage.",
  },
];

export default function EventsSection() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-cormorant text-primary/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-3">
            Save the Dates
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-foreground text-glow mb-4">
            Celebration Schedule
          </h2>
          <SectionDivider />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-xl p-6 md:p-8 group cursor-default transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(252,151,152,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-2 bg-accent/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <event.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair text-lg md:text-xl text-foreground mb-1 group-hover:text-glow transition-all">
                    {event.title}
                  </h3>
                  <p className="font-cormorant text-primary/70 text-sm tracking-[0.15em] mb-3">
                    {event.date}
                  </p>
                  <p className="font-cormorant text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}