import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Radio, CheckCircle, Shield } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    callsign: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto reset after 3s
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', callsign: '', email: '', message: '' });
        onClose();
      }, 2500);
    }, 500);
  };

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
            className="relative w-full max-w-xl bg-[#080808] border border-[#00F0FF]/40 rounded-sm shadow-[0_0_50px_rgba(0,240,255,0.2)] p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Corner Tech Notches */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00F0FF]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00F0FF]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00F0FF]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00F0FF]" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-[#00F0FF]/10 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF]">
                  <Radio className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <div className="font-tech text-xs tracking-widest text-[#00F0FF] uppercase">
                    COMMUNICATION UPLINK
                  </div>
                  <h3 className="font-display text-xl font-black text-white uppercase tracking-tight">
                    TRANSMIT TO ASTHRA HQ
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

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-[#00F0FF]/20 border border-[#00F0FF] mx-auto flex items-center justify-center text-[#00F0FF] shadow-[0_0_25px_#00F0FF]"
                >
                  <CheckCircle className="w-8 h-8" />
                </motion.div>
                <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wider">
                  TRANSMISSION DISPATCHED
                </h4>
                <p className="font-tech text-xs text-[#8C8C8C] tracking-widest uppercase">
                  ENCRYPTED PACKET LOGGED IN ASTHRA CENTRAL COMM QUEUE.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-tech text-xs text-[#8C8C8C] tracking-widest uppercase mb-1">
                      OPERATIVE NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Johnathan Vance"
                      className="w-full bg-[#111318] border border-white/10 focus:border-[#00F0FF] rounded-sm px-3.5 py-2.5 text-white text-xs font-tech focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-tech text-xs text-[#8C8C8C] tracking-widest uppercase mb-1">
                      CALLSIGN / AFFILIATION
                    </label>
                    <input
                      type="text"
                      value={formData.callsign}
                      onChange={(e) => setFormData({ ...formData, callsign: e.target.value })}
                      placeholder="e.g. VECTOR-09"
                      className="w-full bg-[#111318] border border-white/10 focus:border-[#00F0FF] rounded-sm px-3.5 py-2.5 text-white text-xs font-tech focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-tech text-xs text-[#8C8C8C] tracking-widest uppercase mb-1">
                    TRANSMISSION FREQUENCY (EMAIL) *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="operative@domain.com"
                    className="w-full bg-[#111318] border border-white/10 focus:border-[#00F0FF] rounded-sm px-3.5 py-2.5 text-white text-xs font-tech focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-tech text-xs text-[#8C8C8C] tracking-widest uppercase mb-1">
                    CLASSIFIED PAYLOAD (MESSAGE) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter mission briefing, collaboration inquiry, or intelligence dispatch..."
                    className="w-full bg-[#111318] border border-white/10 focus:border-[#00F0FF] rounded-sm px-3.5 py-2.5 text-white text-xs font-tech focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <span className="font-tech text-[10px] text-[#8C8C8C] uppercase">
                    POST-QUANTUM 256-BIT ENCRYPTION
                  </span>
                  <MagneticButton type="submit" size="sm" cursorLabel="SEND">
                    BROADCAST TRANSMISSION
                  </MagneticButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
