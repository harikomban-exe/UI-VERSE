import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { activitiesData } from '../data/activities';
import { MissionCard } from '../components/MissionCard';
import { SectionReveal } from '../components/SectionReveal';
import { Shield, Filter, Search, Activity as ActivityIcon } from 'lucide-react';

export const Activities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'ALL',
    'ARTIFICIAL INTELLIGENCE',
    'DESIGN SYSTEMS',
    'HACKATHON',
    'TECH TALK',
    'INNOVATION MEETUP',
    'CODING CHALLENGE',
  ];

  const filteredMissions = activitiesData.filter((mission) => {
    const matchesCategory =
      selectedCategory === 'ALL' || mission.category === selectedCategory;
    const matchesSearch =
      mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mission.missionNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background Ambient Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#00F0FF]/08 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.3em] text-[#00F0FF] uppercase mb-3">
              <ActivityIcon className="w-4 h-4 text-[#00F0FF] animate-pulse" />
              TACTICAL FIELD REPERTOIRE // SECTOR 02
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase text-glow-white mb-4">
              MISSIONS COMPLETED.
            </h1>
            <p className="text-sm sm:text-base text-[#8C8C8C] leading-relaxed">
              Every deployment represents high-intensity student collaboration, engineering combat,
              and concrete breakthroughs across frontier computational disciplines.
            </p>

            {/* Quick Stats Strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto bg-[#111318]/80 p-3 rounded-sm border border-white/10">
              <div className="text-center">
                <div className="font-display text-xl sm:text-2xl font-black text-[#00F0FF]">06</div>
                <div className="font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">MISSIONS</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="font-display text-xl sm:text-2xl font-black text-white">907</div>
                <div className="font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">OPERATIVES</div>
              </div>
              <div className="text-center">
                <div className="font-display text-xl sm:text-2xl font-black text-[#9333EA]">103</div>
                <div className="font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">PROTOTYPES</div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Filters & Search Toolbar */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#080808] p-4 rounded-sm border border-white/10">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-sm font-tech text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/50 shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                    : 'bg-[#111318] text-[#8C8C8C] border border-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-[#8C8C8C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH MISSIONS..."
              className="w-full bg-[#111318] border border-white/10 focus:border-[#00F0FF] rounded-sm pl-9 pr-3 py-2 text-white font-tech text-xs tracking-wider uppercase focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Missions Grid */}
        {filteredMissions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMissions.map((mission, index) => (
              <MissionCard key={mission.id} activity={mission} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center metallic-card rounded-sm p-8">
            <Shield className="w-12 h-12 text-[#8C8C8C] mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-white uppercase">NO MISSIONS FOUND</h3>
            <p className="font-tech text-xs text-[#8C8C8C] tracking-wider mt-1">
              ADJUST SEARCH PARAMETERS OR RESET ACTIVE CATEGORY FILTER.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 font-tech text-xs tracking-widest text-[#00F0FF] border border-[#00F0FF]/40 rounded-sm hover:bg-[#00F0FF]/10 uppercase"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
