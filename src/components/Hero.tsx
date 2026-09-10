import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Compass, ShieldAlert } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import logoImg from '../assets/a1.png';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // Scroll parallax transforms
  const logoY = useTransform(scrollY, [0, 600], [0, -120]);
  const logoScale = useTransform(scrollY, [0, 600], [1, 0.75]);
  const textY = useTransform(scrollY, [0, 600], [0, -60]);
  const textOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const bgOpacity = useTransform(scrollY, [0, 600], [0.3, 0.8]);

  const scrollToStory = () => {
    const el = document.getElementById('story-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-16">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Ambient energy circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#00F0FF]/15 animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] rounded-full border border-dashed border-[#9333EA]/10 animate-spin-reverse-slow pointer-events-none" />

        {/* Distant light streaks */}
        <div className="absolute top-1/3 -left-40 w-96 h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent rotate-45 blur-sm" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-1 bg-gradient-to-r from-transparent via-[#9333EA]/40 to-transparent -rotate-45 blur-sm" />

        {/* Vignette */}
        <div className="absolute inset-0 vignette-overlay" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Department Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#111318]/90 text-white shadow-[0_0_15px_rgba(0,240,255,0.2)] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="font-tech text-xs tracking-[0.3em] uppercase text-[#00F0FF]">
            ASTHRA // DEPARTMENT OF INNOVATION
          </span>
          <span className="text-white/30">|</span>
          <span className="font-tech text-[10px] tracking-widest text-[#8C8C8C] uppercase">
            SEC_LEVEL: ALPHA
          </span>
        </motion.div>

        {/* Cinematic Camera Push-In: Hero Logo */}
        <motion.div
          style={{ y: logoY, scale: logoScale }}
          initial={{ scale: 0.4, opacity: 0, filter: 'blur(12px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 flex items-center justify-center select-none"
        >
          {/* Energy Ring behind Logo */}
          <div className="absolute inset-0 rounded-full border border-[#00F0FF]/40 shadow-[0_0_30px_rgba(0,240,255,0.4)] animate-pulse" />
          <img
            src={logoImg}
            alt="ASTHRA Emblem"
            className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(0,240,255,0.7)]"
          />
        </motion.div>

        {/* Hero Dramatic Heading */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-white">
            <span className="block">WHERE IDEAS</span>
            <span className="block bg-gradient-to-r from-white via-[#00F0FF] to-[#9333EA] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              BECOME IMPACT.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#D8D8D8]/80 font-normal leading-relaxed pt-2">
            A community of curious minds building, learning and creating what comes next.
            Step into the command center of next-generation engineering.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <Link to="/activities">
            <MagneticButton size="lg" cursorLabel="ENTER">
              ENTER ASTHRA
            </MagneticButton>
          </Link>

          <Link to="/activities">
            <MagneticButton variant="secondary" size="lg" cursorLabel="EXPLORE">
              EXPLORE MISSIONS
            </MagneticButton>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          onClick={scrollToStory}
          className="mt-14 sm:mt-20 flex flex-col items-center cursor-pointer group select-none"
        >
          <span className="font-tech text-[10px] tracking-[0.3em] uppercase text-[#8C8C8C] group-hover:text-[#00F0FF] transition-colors mb-2">
            INITIALIZE SEQUENCE
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#00F0FF]/50"
          >
            <div className="w-1 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
