import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { LogoOrbit } from '../components/LogoOrbit';
import { CommandCenter } from '../components/CommandCenter';
import { QuoteSection } from '../components/QuoteSection';
import { MissionCard } from '../components/MissionCard';
import { ArchiveCard } from '../components/ArchiveCard';
import { SectionReveal } from '../components/SectionReveal';
import { activitiesData } from '../data/activities';
import { newslettersData } from '../data/newsletters';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Terminal, Shield, Zap } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

export const Home: React.FC = () => {
  const featuredMissions = activitiesData.slice(0, 3);
  const featuredArchives = newslettersData.slice(0, 2);

  return (
    <div className="relative w-full">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* ============================================================ */}
      {/* 10. SECTION: THE ASTHRA STORY                                */}
      {/* ============================================================ */}
      <section
        id="story-section"
        className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#080808] border-t border-b border-white/5 overflow-hidden"
      >
        {/* Cinematic Ambient Beam */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.3em] text-[#00F0FF] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              ACT 01 // GENESIS NARRATIVE
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1] text-glow-white mb-10">
              THE STORY <br />
              <span className="bg-gradient-to-r from-white via-[#00F0FF] to-[#9333EA] bg-clip-text text-transparent">
                BEGINS HERE.
              </span>
            </h2>
          </SectionReveal>

          {/* Editorial Cinematic Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <SectionReveal delay={0.1}>
                <p className="font-display text-xl sm:text-2xl md:text-3xl text-white/95 font-medium leading-relaxed">
                  ASTHRA is where curious minds converge to engineer technology, unleash creativity,
                  ignite innovation, and forge breakthroughs that matter.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <p className="text-sm sm:text-base text-[#8C8C8C] leading-relaxed">
                  We are not an ordinary student association. We operate as an autonomous innovation
                  headquarters—a secret proving ground where developers, designers, hardware hackers,
                  and researchers assemble to build production-grade architectures and solve complex challenges.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link to="/activities">
                    <MagneticButton cursorLabel="MISSIONS">
                      EXPLORE ALL MISSIONS
                    </MagneticButton>
                  </Link>
                  <Link to="/committee">
                    <MagneticButton variant="secondary" cursorLabel="CADRE">
                      MEET THE COMMAND
                    </MagneticButton>
                  </Link>
                </div>
              </SectionReveal>
            </div>

            {/* Strategic Pillars Editorial Box */}
            <div className="lg:col-span-5 metallic-card p-8 rounded-sm space-y-6 border border-white/10">
              <div className="font-tech text-xs tracking-widest text-[#00F0FF] uppercase border-b border-white/10 pb-3 flex items-center justify-between">
                <span>OPERATIONAL PILLARS</span>
                <span>HQ_ALPHA</span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex-shrink-0 flex items-center justify-center text-[#00F0FF] font-tech font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase">
                      RADICAL COGNITION
                    </h4>
                    <p className="text-xs text-[#8C8C8C] mt-1 leading-relaxed">
                      Deep neural exploration, edge ML compute, and post-quantum cryptographic defense.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-[#9333EA]/10 border border-[#9333EA]/30 flex-shrink-0 flex items-center justify-center text-[#9333EA] font-tech font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase">
                      SPATIAL & HAPTIC INTERFACES
                    </h4>
                    <p className="text-xs text-[#8C8C8C] mt-1 leading-relaxed">
                      Designing futuristic heads-up telemetry dashboards, WebGPU shaders, and spatial computing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-white/5 border border-white/20 flex-shrink-0 flex items-center justify-center text-white font-tech font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white uppercase">
                      HARDWARE FABRICATION
                    </h4>
                    <p className="text-xs text-[#8C8C8C] mt-1 leading-relaxed">
                      Custom PCB routing, autonomous robotics kinematics, and rapid embedded prototyping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 21. ASTHRA COMMAND CENTER */}
      <CommandCenter />

      {/* 22. INTERACTIVE LOGO SECTION */}
      <LogoOrbit />

      {/* ============================================================ */}
      {/* FEATURED MISSIONS PREVIEW                                    */}
      {/* ============================================================ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="font-tech text-xs tracking-[0.3em] text-[#00F0FF] uppercase mb-2">
                ACT 02 // TACTICAL DEPLOYMENTS
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white text-glow-white">
                MISSIONS COMPLETED.
              </h2>
            </div>
            <Link
              to="/activities"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest text-[#00F0FF] hover:text-white uppercase transition-colors"
            >
              <span>VIEW ALL 06 MISSIONS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMissions.map((activity, index) => (
              <MissionCard key={activity.id} activity={activity} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED CLASSIFIED ARCHIVES                                 */}
      {/* ============================================================ */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#080808] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="font-tech text-xs tracking-[0.3em] text-[#9333EA] uppercase mb-2">
                ACT 03 // CLASSIFIED INTELLIGENCE
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white text-glow-white">
                THE ARCHIVES.
              </h2>
            </div>
            <Link
              to="/newsletters"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 font-display text-xs font-bold tracking-widest text-[#9333EA] hover:text-white uppercase transition-colors"
            >
              <span>ACCESS ALL DOSSIERS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArchives.map((archive, index) => (
              <ArchiveCard key={archive.id} archive={archive} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. CINEMATIC QUOTE SECTION */}
      <QuoteSection />
    </div>
  );
};
