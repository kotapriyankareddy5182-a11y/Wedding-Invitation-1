import React from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';
import { Youtube } from 'lucide-react';

export default function LiveStreamSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-[#FFFDD0]/5">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
             <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
               <Youtube className="w-8 h-8 text-red-500" />
             </div>
          </div>
          <p className="font-cormorant text-primary/80 text-xs md:text-sm tracking-[0.4em] uppercase mb-3">
            Join Us Live
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-foreground mb-4">
            Watch Our Wedding Live
          </h2>
          <SectionDivider />
          <p className="font-cormorant text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            For our friends and family who couldn't make it, we would love for you to be part of our special day virtually.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-primary/20"
        >
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/KvvKTLWSYaM?si=S1wrCamFgobHgeSd" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </motion.div>
      </div>
    </section>
  );
}
