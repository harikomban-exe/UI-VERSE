import React from 'react';
import { motion } from 'framer-motion';

export const QuoteSection: React.FC = () => {
  const quote = 'Every breakthrough begins with someone willing to imagine it.';
  const words = quote.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden border-t border-b border-white/5">
      {/* Cinematic Lighting Behind Quote */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center" aria-hidden="true">
        <div className="w-[500px] h-[300px] md:w-[700px] md:h-[400px] bg-gradient-to-r from-[#0066FF]/15 via-[#00F0FF]/20 to-[#9333EA]/20 rounded-full blur-[110px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Classified Protocol Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-tech text-xs tracking-[0.35em] text-[#00F0FF] uppercase mb-8"
        >
          // DIRECTIVE ARCHIVE: MANIFESTO_01
        </motion.div>

        {/* Word-by-Word Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 md:gap-x-5 md:gap-y-3"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={`font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight ${
                word.toLowerCase().includes('breakthrough') || word.toLowerCase().includes('imagine')
                  ? 'bg-gradient-to-r from-[#00F0FF] to-[#9333EA] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                  : 'text-white text-glow-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <div className="h-px w-12 bg-[#00F0FF]/40" />
          <span className="font-tech text-xs tracking-[0.25em] text-[#8C8C8C] uppercase">
            ASTHRA CREED // FOUNDATION MANIFESTO
          </span>
          <div className="h-px w-12 bg-[#9333EA]/40" />
        </motion.div>
      </div>
    </section>
  );
};
