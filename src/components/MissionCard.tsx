import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { Activity } from '../data/activities';

interface MissionCardProps {
  activity: Activity;
  index: number;
}

export const MissionCard: React.FC<MissionCardProps> = ({ activity, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative rounded-sm overflow-hidden bg-[#0D0D0F] border border-white/10 transition-all duration-500 hover:border-[#00F0FF]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] flex flex-col justify-between h-full"
      data-cursor="VIEW"
    >
      <Link to={`/activities/${activity.id}`} className="block relative h-full flex flex-col justify-between">
        {/* Poster Image Container */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
          <img
            src={activity.coverImage}
            alt={activity.title}
            className="w-full h-full object-cover object-center filter brightness-75 contrast-125 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-95"
            loading="lazy"
          />

          {/* Cinematic Dark Gradient & Scanline Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-[#0D0D0F]/40 to-transparent transition-opacity duration-300 group-hover:opacity-75" />
          
          {/* Top Classification Stamp */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-sm bg-[#050505]/80 border border-[#00F0FF]/40 text-[#00F0FF] font-tech text-[10px] tracking-widest uppercase backdrop-blur-md">
              {activity.category}
            </span>
          </div>

          {/* Mission Number Callout */}
          <div className="absolute top-3 right-4 font-display font-black text-3xl sm:text-4xl text-white/20 group-hover:text-[#00F0FF] group-hover:text-glow-cyan transition-all duration-300 select-none">
            {activity.missionNumber.replace('MISSION ', 'M-')}
          </div>

          {/* Status Indicator */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>STATUS: {activity.status}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 relative z-10 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-[#8C8C8C] mb-2 tracking-wider">
              <Calendar className="w-3 h-3 text-[#00F0FF]" />
              <span>{activity.date}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#00F0FF] transition-all duration-300 group-hover:-translate-y-1">
              {activity.title}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-[#8C8C8C] line-clamp-2 leading-relaxed">
              {activity.shortDescription}
            </p>
          </div>

          {/* Interactive Footer Reveal */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="font-tech text-xs text-[#00F0FF] tracking-widest uppercase">
              {activity.metrics.participants} AGENTS DEPLOYED
            </span>

            <div className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-wider text-white group-hover:text-[#00F0FF] transition-colors">
              <span>VIEW MISSION</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>
        </div>

        {/* Hover Edge Accent Glow */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
    </motion.div>
  );
};
