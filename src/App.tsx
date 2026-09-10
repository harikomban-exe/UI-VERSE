import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import { CinematicIntro } from './components/CinematicIntro';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ParticleField } from './components/ParticleField';
import { CinematicLight } from './components/CinematicLight';
import { CustomCursor } from './components/CustomCursor';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';

// Pages
import { Home } from './pages/Home';
import { Activities } from './pages/Activities';
import { ActivityDetails } from './pages/ActivityDetails';
import { Newsletters } from './pages/Newsletters';
import { NewsletterDetails } from './pages/NewsletterDetails';
import { Committee } from './pages/Committee';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route path="/newsletters" element={<Newsletters />} />
          <Route path="/newsletters/:id" element={<NewsletterDetails />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [introCompleted, setIntroCompleted] = useState<boolean>(() => {
    return sessionStorage.getItem('asthra_intro_viewed') === 'true';
  });
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  return (
    <Router>
      <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
        {/* Custom Interactive Desktop Cursor */}
        <CustomCursor />

        {/* Cinematic Mouse-Following Lighting Layer */}
        <CinematicLight />

        {/* Ambient Canvas Particle Field */}
        <ParticleField density={45} />

        {/* Cinematic Intro Sequence */}
        {!introCompleted && (
          <CinematicIntro onComplete={() => setIntroCompleted(true)} />
        )}

        {/* Main Application Shell */}
        <div className={`transition-opacity duration-700 ${introCompleted ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Navbar
            onOpenAbout={() => setAboutOpen(true)}
            onOpenContact={() => setContactOpen(true)}
          />

          <main id="main-content" className="relative z-10">
            <AnimatedRoutes />
          </main>

          <Footer onOpenContact={() => setContactOpen(true)} />
        </div>

        {/* Global Modals */}
        <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
