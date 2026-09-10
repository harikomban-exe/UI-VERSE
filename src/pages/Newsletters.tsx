import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { newslettersData } from '../data/newsletters';
import { ArchiveCard } from '../components/ArchiveCard';
import { SectionReveal } from '../components/SectionReveal';
import { Database, ShieldAlert, Search, FileText } from 'lucide-react';

export const Newsletters: React.FC = () => {
  const [selectedClassification, setSelectedClassification] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const classifications = ['ALL', 'TOP SECRET', 'RESTRICTED', 'CLASSIFIED'];

  const filteredArchives = newslettersData.filter((archive) => {
    const matchesClassification =
      selectedClassification === 'ALL' ||
      archive.classification === selectedClassification;
    const matchesSearch =
      archive.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      archive.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      archive.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesClassification && matchesSearch;
  });

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background Ambient Glow */}
      <div className="absolute top-24 right-1/3 w-[600px] h-[350px] bg-[#9333EA]/08 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.3em] text-[#9333EA] uppercase mb-3">
              <Database className="w-4 h-4 text-[#9333EA] animate-pulse" />
              INTELLIGENCE VAULT // SECTOR 03
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase text-glow-white mb-4">
              THE ARCHIVES.
            </h1>
            <p className="text-sm sm:text-base text-[#8C8C8C] leading-relaxed">
              Declassified technical dossiers, spatial UI breakdowns, hardware schematics,
              and strategic insights published by ASTHRA research divisions.
            </p>

            {/* Clearance Ticker */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto bg-[#111318]/80 p-3 rounded-sm border border-white/10">
              <div className="text-center">
                <div className="font-display text-xl sm:text-2xl font-black text-[#9333EA]">04</div>
                <div className="font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">DOSSIERS</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="font-display text-xl sm:text-2xl font-black text-white">140+</div>
                <div className="font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">PAGES</div>
              </div>
              <div className="text-center">
                <div className="font-display text-xl sm:text-2xl font-black text-[#00F0FF]">256-BIT</div>
                <div className="font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">SECURITY</div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Filter & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#080808] p-4 rounded-sm border border-white/10">
          {/* Classification Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {classifications.map((item) => (
              <button
                key={item}
                onClick={() => setSelectedClassification(item)}
                className={`px-3.5 py-1.5 rounded-sm font-tech text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                  selectedClassification === item
                    ? 'bg-[#9333EA]/20 text-[#c084fc] border border-[#9333EA]/60 shadow-[0_0_12px_rgba(147,51,234,0.3)]'
                    : 'bg-[#111318] text-[#8C8C8C] border border-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-[#8C8C8C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH ARCHIVES..."
              className="w-full bg-[#111318] border border-white/10 focus:border-[#9333EA] rounded-sm pl-9 pr-3 py-2 text-white font-tech text-xs tracking-wider uppercase focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Archives Grid */}
        {filteredArchives.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArchives.map((archive, index) => (
              <ArchiveCard key={archive.id} archive={archive} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center metallic-card rounded-sm p-8">
            <ShieldAlert className="w-12 h-12 text-[#8C8C8C] mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-white uppercase">NO DOSSIERS MATCHED</h3>
            <p className="font-tech text-xs text-[#8C8C8C] tracking-wider mt-1">
              TRY BROADENING CLASSIFICATION CLEARANCE OR SEARCH KEYWORDS.
            </p>
            <button
              onClick={() => {
                setSelectedClassification('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 font-tech text-xs tracking-widest text-[#9333EA] border border-[#9333EA]/40 rounded-sm hover:bg-[#9333EA]/10 uppercase"
            >
              CLEAR QUERY
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
