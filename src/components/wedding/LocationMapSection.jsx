import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionDivider from './SectionDivider';

export default function LocationMapSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-background">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
               <MapPin className="w-8 h-8 text-primary" />
             </div>
          </div>
          <p className="font-cormorant text-primary/80 text-xs md:text-sm tracking-[0.4em] uppercase mb-3">
            Venue
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-foreground mb-4">
            Wedding Location
          </h2>
          <SectionDivider />
          <p className="font-cormorant text-foreground text-2xl mt-6 max-w-2xl mx-auto font-medium">
            Chitirala Kalyana Mandapam
          </p>
          <p className="font-cormorant text-muted-foreground text-lg mt-2 max-w-2xl mx-auto">
            Giddalur, Prakasam District
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-primary/20"
        >
          <iframe 
            className="w-full h-full"
            src="https://maps.google.com/maps?q=Chitirala%20kalyana%20mandapam%2C%20Giddalur%2C%20Prakasam%20district&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </motion.div>
      </div>
    </section>
  );
}
