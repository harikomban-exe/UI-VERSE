import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useSpring } from 'framer-motion';
import { ArrowRight, FileText, Lock, Clock, ShieldAlert } from 'lucide-react';
import { Newsletter } from '../data/newsletters';

interface ArchiveCardProps {
  archive: Newsletter;
  index: number;
}

export const ArchiveCard: React.FC<ArchiveCardProps> = ({ archive, index }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Spring Physics
  const rotateX = useSpring(0, { damping: 20, stiffness: 120 });
  const rotateY = useSpring(0, { damping: 20, stiffness: 120 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -10);
    rotateY.set(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000 select-none"
      data-cursor="OPEN"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative rounded-sm overflow-hidden bg-[#0D0D0F] border border-white/10 transition-all duration-300 hover:border-[#9333EA]/60 hover:shadow-[0_0_35px_rgba(147,51,234,0.3)] transform-style-3d group flex flex-col justify-between h-full"
      >
        <Link to={`/newsletters/${archive.id}`} className="block relative h-full flex flex-col justify-between">
          {/* Cover Art Stage */}
          <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
            <img
              src={archive.coverImage}
              alt={archive.title}
              className="w-full h-full object-cover object-center filter brightness-70 contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-90"
              loading="lazy"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-[#0D0D0F]/50 to-black/40" />

            {/* Light Sweep Effect */}
            <motion.div
              animate={{
                x: isHovered ? ['-100%', '200%'] : '-100%',
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
            />

            {/* Security Classification Stamp */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-sm border font-tech text-[10px] tracking-widest uppercase backdrop-blur-md ${
                  archive.classification === 'TOP SECRET'
                    ? 'border-red-500/50 bg-red-950/60 text-red-400'
                    : 'border-[#9333EA]/50 bg-purple-950/60 text-[#c084fc]'
                }`}
              >
                // {archive.classification}
              </span>
            </div>

            {/* Archive Code Header */}
            <div className="absolute top-4 right-4 font-tech text-xs tracking-widest text-[#00F0FF] group-hover:text-glow-cyan transition-all">
              {archive.volume}
            </div>

            {/* Large Archive Number */}
            <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between border-b border-white/10 pb-2">
              <span className="font-display text-2xl font-black text-white group-hover:text-[#9333EA] group-hover:text-glow-purple transition-colors">
                {archive.code}
              </span>
              <span className="font-tech text-xs text-[#8C8C8C]">{archive.date}</span>
            </div>
          </div>

          {/* Dossier Metadata & Description */}
          <div className="p-6 relative z-10 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#9333EA] transition-colors leading-snug">
                {archive.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#8C8C8C] line-clamp-3 leading-relaxed">
                {archive.shortDescription}
              </p>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-tech text-xs text-[#8C8C8C]">
                <Clock className="w-3.5 h-3.5 text-[#00F0FF]" />
                <span>{archive.readTime}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 font-display text-xs font-bold tracking-wider text-white group-hover:text-[#9333EA] transition-colors">
                <span>OPEN ARCHIVE</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};
