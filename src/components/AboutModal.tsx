import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Terminal, Zap, Radio, Globe } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050505]/85 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-[#080808] border border-[#00F0FF]/40 rounded-sm shadow-[0_0_50px_rgba(0,240,255,0.2)] p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Corner Decorative Tech Notches */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00F0FF]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00F0FF]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00F0FF]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00F0FF]" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#00F0FF]/10 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-tech text-xs tracking-widest text-[#00F0FF] uppercase">
                    CLASSIFIED BRIEFING
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    ABOUT ASTHRA HEADQUARTERS
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-[#8C8C8C] hover:text-white border border-white/10 rounded-sm hover:border-[#00F0FF]/40 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              <div className="space-y-3">
                <h4 className="font-tech text-sm tracking-widest text-[#00F0FF] uppercase flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" /> ORIGIN & PHILOSOPHY
                </h4>
                <p className="text-sm text-[#D8D8D8] leading-relaxed">
                  ASTHRA is an original superhero-inspired department universe designed to empower
                  the next generation of engineers, creative technologists, and system architects.
                  Built upon the foundational ethos that every breakthrough begins with someone willing to
                  imagine it, ASTHRA operates as a futuristic command center for collaborative exploration.
                </p>
              </div>

              {/* Narrative Acts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[#111318] border border-white/5">
                  <div className="font-tech text-xs text-[#00F0FF] tracking-wider mb-1">ACT 01 // GENESIS</div>
                  <p className="text-xs text-[#8C8C8C] leading-relaxed">
                    Forging decentralized talent into an elite unified collective equipped with sovereign compute capabilities.
                  </p>
                </div>
                <div className="p-4 rounded-sm bg-[#111318] border border-white/5">
                  <div className="font-tech text-xs text-[#00F0FF] tracking-wider mb-1">ACT 02 // MISSIONS</div>
                  <p className="text-xs text-[#8C8C8C] leading-relaxed">
                    Rapid 36-hour deployments, AI workshops, and competitive algorithmic warfare in real-world scenarios.
                  </p>
                </div>
                <div className="p-4 rounded-sm bg-[#111318] border border-white/5">
                  <div className="font-tech text-xs text-[#9333EA] tracking-wider mb-1">ACT 03 // ARCHIVES</div>
                  <p className="text-xs text-[#8C8C8C] leading-relaxed">
                    Open dissemination of classified technical dossiers, spatial UI research, and cybersecurity blueprints.
                  </p>
                </div>
                <div className="p-4 rounded-sm bg-[#111318] border border-white/5">
                  <div className="font-tech text-xs text-[#9333EA] tracking-wider mb-1">ACT 04 // THE FUTURE</div>
                  <p className="text-xs text-[#8C8C8C] leading-relaxed">
                    Continuously mentoring upcoming cadets to engineer what comes next in computing, robotics, and design.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between font-tech text-xs text-[#8C8C8C]">
                <span>LOCATION: SECRET COMMAND LAT/LONG [CONFIDENTIAL]</span>
                <span className="text-[#00F0FF]">SYSTEM STATUS: NOMINAL</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
