import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Mail, ArrowUpRight, Shield, Globe } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import logoImg from '../assets/a1.png';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden border-t border-white/5">
      {/* ============================================================ */}
      {/* 28. FINAL CTA: FULL SCREEN BLACK SECTION                     */}
      {/* ============================================================ */}
      <section className="relative py-28 md:py-36 px-4 text-center flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#0066FF]/15 via-[#00F0FF]/15 to-[#9333EA]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="font-tech text-xs tracking-[0.3em] text-[#00F0FF] uppercase">
            // INITIATIVE CALLOUT: PROTOCOL NEXT
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white text-glow-white">
            READY TO CREATE <br />
            <span className="bg-gradient-to-r from-white via-[#00F0FF] to-[#9333EA] bg-clip-text text-transparent">
              WHAT COMES NEXT?
            </span>
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#8C8C8C]">
            Enlist in the ASTHRA innovation community. Explore real-time missions, contribute
            to tactical research dossiers, and pioneer breakthroughs.
          </p>

          <div className="pt-4">
            <Link to="/activities">
              <MagneticButton size="lg" cursorLabel="ENTER">
                ENTER ASTHRA →
              </MagneticButton>
            </Link>
          </div>

          {/* Logo below CTA with subtle cinematic glow */}
          <div className="pt-10 flex justify-center">
            <div className="relative w-20 h-20 md:w-28 md:h-28">
              <div className="absolute inset-0 rounded-full bg-[#00F0FF]/20 blur-xl animate-pulse" />
              <img
                src={logoImg}
                alt="ASTHRA Emblem"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 27. MAIN FOOTER CONTENT: THE STORY CONTINUES                 */}
      {/* ============================================================ */}
      <div className="border-t border-white/10 bg-[#080808] pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            {/* Brand & Narrative */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10">
                  <img src={logoImg} alt="ASTHRA" className="w-full h-full object-contain" />
                </div>
                <span className="font-display font-bold text-lg tracking-[0.25em] text-white">
                  ASTHRA
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white uppercase text-glow-white">
                THE STORY CONTINUES.
              </h3>

              <p className="text-xs sm:text-sm text-[#8C8C8C] max-w-md leading-relaxed">
                ASTHRA is an original superhero-inspired department headquarters uniting
                pioneering engineering, artificial intelligence, and visionary student initiatives.
              </p>
            </div>

            {/* Direct Navigation */}
            <div className="md:col-span-3 space-y-3">
              <div className="font-tech text-xs tracking-[0.25em] text-[#00F0FF] uppercase mb-2">
                SECTORS & ACCESS
              </div>
              <ul className="space-y-2 font-display text-xs tracking-wider">
                <li>
                  <Link to="/" className="text-[#8C8C8C] hover:text-[#00F0FF] transition-colors">
                    HOME HEADQUARTERS
                  </Link>
                </li>
                <li>
                  <Link to="/activities" className="text-[#8C8C8C] hover:text-[#00F0FF] transition-colors">
                    MISSIONS & DEPLOYMENTS
                  </Link>
                </li>
                <li>
                  <Link to="/newsletters" className="text-[#8C8C8C] hover:text-[#00F0FF] transition-colors">
                    CLASSIFIED ARCHIVES
                  </Link>
                </li>
                <li>
                  <Link to="/committee" className="text-[#8C8C8C] hover:text-[#00F0FF] transition-colors">
                    COMMAND TEAM
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social Connections */}
            <div className="md:col-span-3 space-y-3">
              <div className="font-tech text-xs tracking-[0.25em] text-[#00F0FF] uppercase mb-2">
                COMMUNICATION LINKS
              </div>
              <div className="space-y-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-tech tracking-wider text-[#8C8C8C] hover:text-[#00F0FF] transition-colors group"
                >
                  <div className="p-2 rounded bg-[#111318] border border-white/10 group-hover:border-[#00F0FF]/40">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>INSTAGRAM // @ASTHRA_HQ</span>
                  <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {onOpenContact ? (
                  <button
                    onClick={onOpenContact}
                    className="w-full flex items-center gap-2 text-xs font-tech tracking-wider text-[#8C8C8C] hover:text-[#00F0FF] transition-colors group text-left"
                  >
                    <div className="p-2 rounded bg-[#111318] border border-white/10 group-hover:border-[#00F0FF]/40">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>EMAIL // HQ@ASTHRA.DEPT</span>
                    <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ) : (
                  <a
                    href="mailto:hq@asthra.dept"
                    className="flex items-center gap-2 text-xs font-tech tracking-wider text-[#8C8C8C] hover:text-[#00F0FF] transition-colors group"
                  >
                    <div className="p-2 rounded bg-[#111318] border border-white/10 group-hover:border-[#00F0FF]/40">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>EMAIL // HQ@ASTHRA.DEPT</span>
                    <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-tech text-[#8C8C8C] tracking-widest uppercase gap-4">
            <div>
              © 2026 ASTHRA DEPARTMENT OF INNOVATION. ALL RIGHTS RESERVED.
            </div>
            <button
              onClick={scrollToTop}
              className="hover:text-[#00F0FF] transition-colors flex items-center gap-1.5"
            >
              <span>RETURN TO TOP [ASCEND]</span>
              <span className="text-[#00F0FF]">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
