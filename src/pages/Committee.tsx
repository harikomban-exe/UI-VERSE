import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { committeeChapters } from '../data/committee';
import { MemberCard } from '../components/MemberCard';
import { SectionReveal } from '../components/SectionReveal';
import { Users, Shield, Award, ChevronRight } from 'lucide-react';

export const Committee: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(committeeChapters[0].id);

  const activeChapter =
    committeeChapters.find((ch) => ch.id === selectedChapterId) || committeeChapters[0];

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background Ambient Beam */}
      <div className="absolute top-24 left-1/3 w-[600px] h-[350px] bg-[#00F0FF]/08 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.3em] text-[#00F0FF] uppercase mb-3">
              <Users className="w-4 h-4 text-[#00F0FF] animate-pulse" />
              OPERATIONAL ROSTER // SECTOR 04
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase text-glow-white mb-4">
              THE COMMAND TEAM.
            </h1>
            <p className="text-sm sm:text-base text-[#8C8C8C] leading-relaxed">
              The architects, researchers, and creative commanders spearheading the ASTHRA
              mission. Chronicled chapter-by-chapter across department history.
            </p>
          </div>
        </SectionReveal>

        {/* 20. CHAPTER NAVIGATION SELECTOR */}
        <div className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex p-1.5 rounded-sm bg-[#111318] border border-white/10 shadow-lg">
            {committeeChapters.map((chapter) => {
              const isActive = chapter.id === selectedChapterId;
              return (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className={`relative px-6 py-3 font-display text-xs md:text-sm font-bold tracking-widest uppercase transition-all rounded-sm flex items-center gap-2 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#8C8C8C] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="chapterIndicator"
                      className="absolute inset-0 rounded-sm bg-gradient-to-r from-[#00F0FF]/25 to-[#9333EA]/25 border border-[#00F0FF]/60 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10 font-tech text-xs text-[#00F0FF]">
                    {chapter.chapterNumber}
                  </span>
                  <span className="relative z-10">{chapter.year}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CHAPTER CONTENT WITH CINEMATIC TRANSITION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter.id}
            initial={{ opacity: 0, x: 25, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -25, filter: 'blur(6px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            {/* Chapter Briefing Banner */}
            <div className="metallic-card p-6 sm:p-8 rounded-sm border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="font-tech text-xs tracking-widest text-[#00F0FF] uppercase mb-1">
                  {activeChapter.chapterNumber} // {activeChapter.year}
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {activeChapter.subtitle}
                </h2>
                <p className="text-xs sm:text-sm text-[#8C8C8C] mt-2 max-w-2xl leading-relaxed">
                  {activeChapter.overview}
                </p>
              </div>

              <div className="flex-shrink-0 bg-[#050505]/60 px-5 py-3 rounded border border-white/5 font-tech text-xs text-[#00F0FF] tracking-widest uppercase">
                {activeChapter.members.length} VERIFIED OPERATIVES
              </div>
            </div>

            {/* Member Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeChapter.members.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
