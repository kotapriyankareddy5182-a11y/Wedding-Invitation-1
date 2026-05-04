import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import InvitationEnvelope from '../components/wedding/InvitationEnvelope';
import FloatingParticles from '../components/wedding/FloatingParticles';
import MusicToggle from '../components/wedding/MusicToggle';
import HeroSection from '../components/wedding/HeroSection';
import CoupleSection from '../components/wedding/CoupleSection';
import GallerySection from '../components/wedding/GallerySection';
import EventsSection from '../components/wedding/EventsSection';
import CountdownSection from '../components/wedding/CountdownSection';
import RsvpSection from '../components/wedding/RsvpSection';
import Footer from '../components/wedding/Footer';
import LiveStreamSection from '../components/wedding/LiveStreamSection';
import LocationMapSection from '../components/wedding/LocationMapSection';

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence>
        {!opened && (
          <InvitationEnvelope onOpen={() => setOpened(true)} />
        )}
      </AnimatePresence>

      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <FloatingParticles />
          <MusicToggle />
          <HeroSection />
          <CoupleSection />
          <EventsSection />
          <CountdownSection />
          <GallerySection />
          <LiveStreamSection />
          <LocationMapSection />
          <RsvpSection />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}