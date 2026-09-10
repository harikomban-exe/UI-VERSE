import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, FileText, Calendar, Clock, CheckCircle2, ShieldCheck, Check } from 'lucide-react';
import { newslettersData } from '../data/newsletters';
import { SectionReveal } from '../components/SectionReveal';
import { MagneticButton } from '../components/MagneticButton';
import { generateNewsletterPDF } from '../utils/pdfGenerator';

export const NewsletterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const archive = newslettersData.find((n) => n.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!archive) {
    return (
      <div className="min-h-screen pt-36 pb-20 px-4 text-center bg-[#050505]">
        <div className="max-w-md mx-auto metallic-card p-8 rounded-sm">
          <h2 className="font-display text-2xl font-bold text-white uppercase mb-2">
            ARCHIVE NOT FOUND
          </h2>
          <p className="font-tech text-xs text-[#8C8C8C] mb-6">
            THE SPECIFIED INTELLIGENCE DOSSIER HAS EITHER BEEN PURGED OR REDACTED.
          </p>
          <Link to="/newsletters">
            <MagneticButton size="sm">RETURN TO ARCHIVES</MagneticButton>
          </Link>
        </div>
      </div>
    );
  }

  const handleDownloadPDF = () => {
    setDownloading(true);
    try {
      generateNewsletterPDF({
        id: archive.id,
        code: archive.code,
        title: archive.title,
        date: archive.date,
        volume: archive.volume,
        category: 'TACTICAL INTELLIGENCE',
        summary: archive.summary,
        highlights: archive.highlights,
        classification: archive.classification,
      });

      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloadSuccess(false);
        setDownloading(false);
      }, 2000);
    } catch (err) {
      console.error('Error generating PDF:', err);
      setDownloading(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-[#050505]">
      {/* Background Lighting */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#9333EA]/06 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/newsletters"
            className="inline-flex items-center gap-2 font-tech text-xs tracking-widest text-[#8C8C8C] hover:text-[#9333EA] transition-colors uppercase group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>← BACK TO ARCHIVES</span>
          </Link>
        </div>

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-base sm:text-lg font-black text-[#9333EA] tracking-widest uppercase">
              {archive.code}
            </span>
            <span className="text-white/20">/</span>
            <span className="font-tech text-xs tracking-widest text-[#00F0FF] uppercase">
              {archive.volume}
            </span>
            <span
              className={`font-tech text-[10px] tracking-widest uppercase px-2.5 py-1 rounded border ${
                archive.classification === 'TOP SECRET'
                  ? 'border-red-500/50 bg-red-950/60 text-red-400'
                  : 'border-[#9333EA]/50 bg-purple-950/60 text-[#c084fc]'
              }`}
            >
              // {archive.classification}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight text-glow-white leading-tight">
            {archive.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 font-tech text-xs text-[#8C8C8C] pt-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00F0FF]" />
              <span>DATE OF ISSUE: {archive.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#9333EA]" />
              <span>{archive.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-white" />
              <span>{archive.pages} PAGES TOTAL</span>
            </div>
          </div>
        </motion.div>

        {/* Large Feature Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-sm overflow-hidden border border-[#9333EA]/30 shadow-[0_0_40px_rgba(147,51,234,0.2)] mb-12 h-[340px] sm:h-[460px] md:h-[500px] bg-black"
        >
          <img
            src={archive.coverImage}
            alt={archive.title}
            className="w-full h-full object-cover filter brightness-80 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />

          {/* Download Bar inside Hero */}
          <div className="absolute bottom-6 inset-x-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#050505]/90 p-4 rounded border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 rounded bg-[#9333EA]/20 border border-[#9333EA]/40 text-[#c084fc]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white uppercase">
                  CLASSIFIED INTELLIGENCE DOSSIER (PDF)
                </div>
                <div className="font-tech text-[10px] text-[#8C8C8C] uppercase">
                  COMPLETE UNABRIDGED RESEARCH ARCHIVE // {archive.pages} PAGES
                </div>
              </div>
            </div>

            {/* WORKING DOWNLOAD PDF BUTTON */}
            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className={`px-6 py-3 rounded-sm font-display text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-2 ${
                downloadSuccess
                  ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  : 'bg-gradient-to-r from-[#9333EA] to-[#0066FF] text-white hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>DOWNLOAD COMPLETE</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{downloading ? 'GENERATING...' : 'DOWNLOAD PDF'}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Narrative & Dossier Summary */}
        <div className="space-y-10 mb-16">
          <div className="space-y-4">
            <div className="font-tech text-xs tracking-[0.25em] text-[#9333EA] uppercase">
              // EXECUTIVE DOSSIER SYNOPSIS
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase">
              STRATEGIC ANALYSIS
            </h2>
            <p className="text-base sm:text-lg text-[#D8D8D8] leading-relaxed">
              {archive.summary}
            </p>
          </div>

          {/* Highlights */}
          <div className="metallic-card p-6 sm:p-8 rounded-sm space-y-4 border border-white/10">
            <div className="font-tech text-xs tracking-[0.25em] text-[#00F0FF] uppercase border-b border-white/10 pb-2">
              TECHNICAL KEY FINDINGS & DIRECTIVES
            </div>
            <div className="space-y-4">
              {archive.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="font-tech text-xs font-bold text-[#00F0FF] px-2 py-0.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex-shrink-0 mt-0.5">
                    [0{index + 1}]
                  </div>
                  <span className="text-sm sm:text-base text-[#D8D8D8] leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Back & Download Trigger */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <Link to="/newsletters">
            <MagneticButton variant="secondary" cursorLabel="BACK">
              ← BACK TO ALL ARCHIVES
            </MagneticButton>
          </Link>

          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-6 py-3 font-display text-xs font-bold tracking-widest text-[#00F0FF] border border-[#00F0FF]/40 rounded-sm hover:bg-[#00F0FF]/10 uppercase transition-all"
          >
            <Download className="w-4 h-4" />
            <span>EXPORT ARCHIVE DOSSIER (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
