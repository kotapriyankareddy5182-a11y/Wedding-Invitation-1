import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

export default function RsvpSection() {
  const [form, setForm] = useState({ name: '', phone: '', guests: '1', attending: 'yes', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const waNumber = '919705249617';
    const text = `*RSVP Response*\n\n*Name:* ${form.name}\n*Phone:* ${form.phone || 'N/A'}\n*Attending:* ${form.attending === 'yes' ? 'Yes, Joyfully Accepts' : 'No, Regretfully Declines'}\n*Guests:* ${form.guests}\n*Message:* ${form.message || 'None'}`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
    
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
    
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-cormorant text-primary/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-3">
            Join Us
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl text-foreground text-glow mb-4">
            RSVP
          </h2>
          <p className="font-cormorant text-muted-foreground text-base md:text-lg italic">
            Kindly confirm your presence by March 15, 2026
          </p>
          <SectionDivider />
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-10 text-center"
          >
            <div className="text-4xl mb-4">🪷</div>
            <h3 className="font-vibes text-4xl text-primary text-glow mb-3">Thank You!</h3>
            <p className="font-cormorant text-muted-foreground text-lg">
              We're overjoyed to celebrate with you. Your presence means the world to us.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 md:p-10 space-y-5"
          >
            {/* Gold corner ornaments */}
            {['top-3 left-3 rotate-0', 'top-3 right-3 rotate-90', 'bottom-3 left-3 -rotate-90', 'bottom-3 right-3 rotate-180'].map((pos, i) => (
              <svg key={i} viewBox="0 0 20 20" className={`absolute w-5 h-5 ${pos}`} fill="none">
                <path d="M 1 10 L 1 1 L 10 1" stroke="hsl(43, 72%, 53%)" strokeWidth="1.2" opacity="0.5" />
              </svg>
            ))}

            <div>
              <label className="font-cormorant text-primary/70 text-sm tracking-[0.2em] uppercase block mb-2">Your Name</label>
              <input
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Full Name"
                className="w-full bg-background/40 border border-primary/20 rounded-lg px-4 py-3 font-cormorant text-foreground text-base placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div>
              <label className="font-cormorant text-primary/70 text-sm tracking-[0.2em] uppercase block mb-2">Phone Number</label>
              <input
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-background/40 border border-primary/20 rounded-lg px-4 py-3 font-cormorant text-foreground text-base placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div>
              <label className="font-cormorant text-primary/70 text-sm tracking-[0.2em] uppercase block mb-2">Will You Attend?</label>
              <div className="flex gap-4">
                {['yes', 'no'].map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm({ ...form, attending: opt })}
                    className={`flex-1 py-3 rounded-lg font-cormorant text-base tracking-[0.15em] uppercase border transition-all duration-300 ${form.attending === opt
                        ? 'bg-primary/20 border-primary/60 text-primary'
                        : 'bg-background/40 border-primary/20 text-muted-foreground hover:border-primary/40'
                      }`}
                  >
                    {opt === 'yes' ? '✦ Joyfully Accepts' : '✦ Regretfully Declines'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-cormorant text-primary/70 text-sm tracking-[0.2em] uppercase block mb-2">Number of Guests</label>
              <select
                value={form.guests}
                onChange={e => setForm({ ...form, guests: e.target.value })}
                className="w-full bg-background/40 border border-primary/20 rounded-lg px-4 py-3 font-cormorant text-foreground text-base focus:outline-none focus:border-primary/50 transition-colors"
              >
                {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
              </select>
            </div>

            <div>
              <label className="font-cormorant text-primary/70 text-sm tracking-[0.2em] uppercase block mb-2">Message (Optional)</label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Share your blessings..."
                rows={3}
                className="w-full bg-background/40 border border-primary/20 rounded-lg px-4 py-3 font-cormorant text-foreground text-base placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-full border border-primary/40 bg-primary/10 font-cormorant text-primary text-base tracking-[0.3em] uppercase hover:bg-primary/20 hover:border-primary/70 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-300"
            >
              ✦ Send RSVP ✦
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}