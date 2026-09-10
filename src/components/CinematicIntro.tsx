import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [isSkipped, setIsSkipped] = useState<boolean>(false);

  useEffect(() => {
    // Check if user previously skipped or completed in this session
    const hasSeenIntro = sessionStorage.getItem('asthra_intro_viewed');
    if (hasSeenIntro === 'true') {
      onComplete();
      return;
    }

    // Sequence timing
    // Phase 0: Black screen with faint particles (0ms - 600ms)
    // Phase 1: Energy ring appearing & light circulating (600ms - 1400ms)
    // Phase 2: Logo emerges & glows brighter (1400ms - 2200ms)
    // Phase 3: Energy pulse & portal expansion (2200ms - 2900ms)
    // Complete at 3000ms

    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => {
      sessionStorage.setItem('asthra_intro_viewed', 'true');
      onComplete();
    }, 2900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    sessionStorage.setItem('asthra_intro_viewed', 'true');
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  return (
    <AnimatePresence>
      {!isSkipped && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden select-none cursor-default"
        >
          {/* Skip Intro Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={handleSkip}
            className="absolute top-6 right-8 z-50 text-xs font-mono tracking-widest text-[#8C8C8C] hover:text-[#00F0FF] transition-colors py-2 px-4 border border-white/10 rounded-full backdrop-blur-md hover:border-[#00F0FF]/40"
          >
            SKIP INTRO [ESC]
          </motion.button>

          {/* Ambient Lighting Background */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                opacity: phase >= 1 ? [0.2, 0.5, 0.3] : 0,
                scale: phase >= 2 ? [1, 1.2, 1.1] : 0.8,
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#0066FF]/20 via-[#00F0FF]/15 to-[#9333EA]/20 blur-[100px]"
            />
          </div>

          {/* Central Energy Ring & Logo Stage */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Outer Circular Energy Ring */}
            <AnimatePresence>
              {phase >= 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full border border-[#00F0FF]/30"
                >
                  {/* Rotating Arc Light */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full rounded-full border-t-2 border-r border-[#00F0FF] shadow-[0_0_20px_#00F0FF]"
                  />
                  {/* Counter-rotating Secondary Ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-2 rounded-full border-b border-l border-[#9333EA]/60 shadow-[0_0_15px_#9333EA]"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ASTHRA Logo Reveal */}
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, filter: 'blur(10px) brightness(0.5)' }}
                  animate={{
                    opacity: 1,
                    scale: phase === 3 ? [1, 1.1, 1.05] : 1,
                    filter: phase === 3 ? 'blur(0px) brightness(1.3)' : 'blur(0px) brightness(1)',
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-44 h-44 md:w-56 md:h-56 flex items-center justify-center"
                >
                  <img
                    src="/assets/a1.png"
                    alt="ASTHRA Logo"
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,240,255,0.6)]"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse Wave Shockwave */}
            {phase === 3 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.9 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full border-2 border-[#00F0FF] shadow-[0_0_40px_#00F0FF]"
              />
            )}
          </div>

          {/* Subtitle Telemetry */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 15 }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="font-tech text-xs tracking-[0.35em] text-[#00F0FF] uppercase mb-1">
              INITIALIZING HEADQUARTERS
            </div>
            <div className="font-display text-sm tracking-[0.25em] text-white/80 font-bold">
              ASTHRA // DEPT OF INNOVATION
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
