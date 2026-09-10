import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Users, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { activitiesData } from '../data/activities';
import { SectionReveal } from '../components/SectionReveal';
import { MagneticButton } from '../components/MagneticButton';

export const ActivityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const activity = activitiesData.find((a) => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!activity) {
    return (
      <div className="min-h-screen pt-36 pb-20 px-4 text-center bg-[#050505]">
        <div className="max-w-md mx-auto metallic-card p-8 rounded-sm">
          <h2 className="font-display text-2xl font-bold text-white uppercase mb-2">
            MISSION NOT FOUND
          </h2>
          <p className="font-tech text-xs text-[#8C8C8C] mb-6">
            THE REQUESTED MISSION CODE DOES NOT EXIST IN THE TACTICAL REPOSITORY.
          </p>
          <Link to="/activities">
            <MagneticButton size="sm">RETURN TO MISSIONS</MagneticButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background Lighting */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-[#00F0FF]/06 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 font-tech text-xs tracking-widest text-[#8C8C8C] hover:text-[#00F0FF] transition-colors uppercase group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>← BACK TO MISSIONS</span>
          </Link>
        </div>

        {/* Hero Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-base sm:text-lg font-black text-[#00F0FF] tracking-widest uppercase">
              {activity.missionNumber}
            </span>
            <span className="text-white/20">/</span>
            <span className="font-tech text-xs tracking-widest text-[#8C8C8C] uppercase px-2.5 py-1 rounded bg-[#111318] border border-white/10">
              {activity.category}
            </span>
            <span className="font-tech text-xs tracking-widest text-[#00F0FF] uppercase flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              STATUS: {activity.status}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight text-glow-white">
            {activity.title}
          </h1>

          <div className="flex items-center gap-6 font-tech text-xs text-[#8C8C8C] pt-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00F0FF]" />
              <span>{activity.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00F0FF]" />
              <span>{activity.metrics.participants} AGENTS DEPLOYED</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00F0FF]" />
              <span>{activity.metrics.hours} DEPLOYMENT HOURS</span>
            </div>
          </div>
        </motion.div>

        {/* Large Feature Poster Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-sm overflow-hidden border border-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,240,255,0.2)] mb-14 h-[350px] sm:h-[480px] md:h-[540px] bg-black"
        >
          <img
            src={activity.coverImage}
            alt={activity.title}
            className="w-full h-full object-cover filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div className="font-tech text-xs text-white/70 tracking-widest uppercase bg-[#050505]/80 px-4 py-2 rounded border border-white/10 backdrop-blur-md">
              PRIMARY TACTICAL RECONNAISSANCE FRAME
            </div>
          </div>
        </motion.div>

        {/* Content Section: Overview & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-tech text-xs tracking-[0.25em] text-[#00F0FF] uppercase">
              // OPERATIONAL MISSION LOG
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase">
              MISSION OBJECTIVE & SYNTHESIS
            </h2>
            <p className="text-base text-[#D8D8D8] leading-relaxed">
              {activity.fullDescription}
            </p>
            <p className="text-sm text-[#8C8C8C] leading-relaxed">
              Throughout the deployment duration, multidisciplinary teams utilized local
              accelerated compute clusters to test stress limits, simulate failure modes, and
              package open-source reference implementations.
            </p>
          </div>

          {/* Highlights Checklist */}
          <div className="lg:col-span-5 metallic-card p-6 sm:p-8 rounded-sm space-y-4">
            <div className="font-tech text-xs tracking-[0.25em] text-[#00F0FF] uppercase border-b border-white/10 pb-2">
              KEY MILESTONES & OUTCOMES
            </div>
            <div className="space-y-3">
              {activity.highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#D8D8D8] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Tactical Metrics Card */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#050505]/60 p-2.5 rounded border border-white/5">
                <div className="font-display text-lg font-bold text-[#00F0FF]">
                  {activity.metrics.participants}
                </div>
                <div className="font-tech text-[9px] text-[#8C8C8C] uppercase">CADETS</div>
              </div>
              <div className="bg-[#050505]/60 p-2.5 rounded border border-white/5">
                <div className="font-display text-lg font-bold text-white">
                  {activity.metrics.hours}H
                </div>
                <div className="font-tech text-[9px] text-[#8C8C8C] uppercase">DURATION</div>
              </div>
              <div className="bg-[#050505]/60 p-2.5 rounded border border-white/5">
                <div className="font-display text-lg font-bold text-[#9333EA]">
                  {activity.metrics.projects}
                </div>
                <div className="font-tech text-[9px] text-[#8C8C8C] uppercase">BUILDS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {activity.gallery.length > 0 && (
          <SectionReveal>
            <div className="space-y-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-tech text-xs tracking-[0.25em] text-[#00F0FF] uppercase mb-1">
                    TACTICAL ARCHIVE // SATELLITE CAPTURES
                  </div>
                  <h3 className="font-display text-2xl font-black text-white uppercase">
                    FIELD GALLERY
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {activity.gallery.map((imgUrl, i) => (
                  <div
                    key={i}
                    className="relative rounded-sm overflow-hidden h-64 bg-black border border-white/10 group"
                  >
                    <img
                      src={imgUrl}
                      alt={`${activity.title} capture ${i + 1}`}
                      className="w-full h-full object-cover filter brightness-85 contrast-110 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 font-tech text-[10px] text-[#00F0FF] tracking-widest uppercase">
                      FRAME_0{i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        )}

        {/* Bottom Back Button */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-center">
          <Link to="/activities">
            <MagneticButton variant="secondary" cursorLabel="BACK">
              ← BACK TO ALL MISSIONS
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
