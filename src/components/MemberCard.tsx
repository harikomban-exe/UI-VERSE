import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Shield, Terminal, ArrowUpRight } from 'lucide-react';
import { CommitteeMember } from '../data/committee';

interface MemberCardProps {
  member: CommitteeMember;
  index: number;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-sm overflow-hidden bg-[#080808] border border-white/10 group transition-all duration-500 hover:border-[#00F0FF]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] h-[440px] flex flex-col justify-end"
      data-cursor="PROFILE"
    >
      {/* Background Full-Bleed Portrait */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-75 transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-95"
          loading="lazy"
        />

        {/* Cinematic Gradient Vignette from Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />

        {/* Light Sweep Reflection on Hover */}
        <motion.div
          animate={{
            x: isHovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
        />
      </div>

      {/* Top Codename Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="font-tech text-[10px] tracking-widest text-[#00F0FF] uppercase px-2.5 py-1 rounded-sm bg-[#050505]/80 border border-[#00F0FF]/30 backdrop-blur-md">
          {member.codeName}
        </span>
      </div>

      {/* Card Information Overlay */}
      <div className="relative z-10 p-6 flex flex-col justify-end">
        {/* Division Indicator */}
        <div className="font-tech text-xs tracking-[0.25em] text-[#00F0FF] uppercase mb-1">
          {member.division}
        </div>

        {/* Operative Name */}
        <h3 className="font-display text-2xl font-black text-white tracking-wide uppercase transition-transform duration-300 group-hover:-translate-y-1">
          {member.name}
        </h3>

        {/* Role & Position */}
        <p className="font-tech text-xs text-[#D8D8D8] tracking-widest uppercase mt-1 transition-all duration-300">
          {member.role}
        </p>

        {/* Expanded Details on Hover: Bio & Skills */}
        <div className="mt-4 pt-3 border-t border-white/10 space-y-3">
          <p className="text-xs text-[#8C8C8C] line-clamp-2 leading-relaxed">
            {member.bio}
          </p>

          <div className="flex items-center justify-between pt-1">
            <div className="flex flex-wrap gap-1">
              {member.skills.slice(0, 2).map((skill) => (
                <span
                  key={skill}
                  className="font-tech text-[9px] text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* LinkedIn Link */}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 p-2 rounded-sm bg-[#111318] border border-white/10 text-white hover:text-[#00F0FF] hover:border-[#00F0FF] transition-colors"
              aria-label={`LinkedIn profile of ${member.name}`}
            >
              <Linkedin className="w-3.5 h-3.5" />
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
