import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Terminal, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAbout, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MISSIONS', path: '/activities' },
    { name: 'ARCHIVES', path: '/newsletters' },
    { name: 'COMMAND TEAM', path: '/committee' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#080808]/85 backdrop-blur-md border-b border-[#00F0FF]/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: ASTHRA Logo */}
            <Link
              to="/"
              data-cursor="ASTHRA"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/a1.png"
                  alt="ASTHRA Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(0,240,255,0.7)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm md:text-base tracking-[0.25em] text-white group-hover:text-[#00F0FF] transition-colors">
                  ASTHRA
                </span>
                <span className="font-tech text-[9px] tracking-[0.2em] text-[#8C8C8C] uppercase -mt-0.5">
                  HQ COMMAND
                </span>
              </div>
            </Link>

            {/* CENTER: Main Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#111318]/60 px-5 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-1.5 font-display text-xs tracking-[0.18em] uppercase transition-all duration-200 rounded-full ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-[#8C8C8C] hover:text-[#00F0FF]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00F0FF]/20 to-[#9333EA]/20 border border-[#00F0FF]/40 shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: About, Contact, and Primary CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={onOpenAbout}
                className="font-tech text-xs tracking-widest text-[#8C8C8C] hover:text-[#00F0FF] transition-colors uppercase py-1 px-2.5"
              >
                ABOUT HQ
              </button>

              <button
                onClick={onOpenContact}
                className="font-tech text-xs tracking-widest text-[#8C8C8C] hover:text-[#00F0FF] transition-colors uppercase py-1 px-2.5"
              >
                TRANSMIT
              </button>

              <Link
                to="/activities"
                data-cursor="ENTER"
                className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#111318] text-white font-display text-xs tracking-widest uppercase border border-[#00F0FF]/40 hover:border-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
                <span>ENTER ASTHRA</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white/80 hover:text-[#00F0FF] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-24 px-6 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between pb-8 md:hidden"
          >
            <div className="flex flex-col space-y-5">
              <div className="font-tech text-xs text-[#00F0FF] tracking-widest uppercase border-b border-white/10 pb-2">
                COMMAND MENU // SECTORS
              </div>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-display text-lg tracking-[0.2em] uppercase py-2 transition-colors ${
                      isActive ? 'text-[#00F0FF] font-bold' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAbout();
                  }}
                  className="text-left font-tech text-sm tracking-wider text-[#8C8C8C] hover:text-[#00F0FF]"
                >
                  [01] ABOUT HEADQUARTERS
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="text-left font-tech text-sm tracking-wider text-[#8C8C8C] hover:text-[#00F0FF]"
                >
                  [02] TRANSMIT DISPATCH (CONTACT)
                </button>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/activities"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#111318] to-[#16191F] border border-[#00F0FF] text-white font-display text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <span>ENTER ASTHRA MISSIONS</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
