import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Activity, Database, Users, Cpu, Radio, Terminal, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CommandCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'status' | 'sectors' | 'telemetry'>('status');

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#080808] border-t border-b border-white/5 overflow-hidden">
      {/* Subtle Background Circuitry */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-tech text-xs tracking-[0.3em] text-[#00F0FF] uppercase mb-2">
              <Radio className="w-3.5 h-3.5 animate-pulse text-[#00F0FF]" />
              CENTRAL COMMAND HUD // LIVE MONITOR
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase text-glow-white">
              THE COMMAND CENTER.
            </h2>
          </div>

          {/* HUD Tab Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 bg-[#111318] p-1.5 rounded-sm border border-white/10">
            <button
              onClick={() => setActiveTab('status')}
              className={`px-4 py-2 font-tech text-xs tracking-wider uppercase transition-all ${
                activeTab === 'status'
                  ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'text-[#8C8C8C] hover:text-white'
              }`}
            >
              CORE TELEMETRY
            </button>
            <button
              onClick={() => setActiveTab('sectors')}
              className={`px-4 py-2 font-tech text-xs tracking-wider uppercase transition-all ${
                activeTab === 'sectors'
                  ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'text-[#8C8C8C] hover:text-white'
              }`}
            >
              TACTICAL SECTORS
            </button>
            <button
              onClick={() => setActiveTab('telemetry')}
              className={`px-4 py-2 font-tech text-xs tracking-wider uppercase transition-all ${
                activeTab === 'telemetry'
                  ? 'bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'text-[#8C8C8C] hover:text-white'
              }`}
            >
              DIAGNOSTICS
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'status' && (
            <motion.div
              key="tab-status"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Metric Card 1 */}
              <div className="metallic-card p-6 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 font-tech text-xs text-[#00F0FF]/40 group-hover:text-[#00F0FF] transition-colors">
                  [01]
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF]">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">
                      ACTIVE MISSIONS
                    </div>
                    <div className="font-display text-2xl font-bold text-white tracking-wider">
                      06 COMPLETED
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#8C8C8C] leading-relaxed mb-4">
                  Neural workshops, hardware hackathons, and algorithmic combat arenas.
                </p>
                <Link
                  to="/activities"
                  className="inline-flex items-center gap-1.5 font-tech text-xs text-[#00F0FF] hover:underline uppercase tracking-wider"
                >
                  <span>INSPECT MISSIONS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Metric Card 2 */}
              <div className="metallic-card p-6 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 font-tech text-xs text-[#9333EA]/40 group-hover:text-[#9333EA] transition-colors">
                  [02]
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#9333EA]/10 border border-[#9333EA]/30 flex items-center justify-center text-[#9333EA]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">
                      CLASSIFIED DOSSIERS
                    </div>
                    <div className="font-display text-2xl font-bold text-white tracking-wider">
                      12 ARCHIVES
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#8C8C8C] leading-relaxed mb-4">
                  Classified research papers, spatial UI telemetry, and cybersecurity digests.
                </p>
                <Link
                  to="/newsletters"
                  className="inline-flex items-center gap-1.5 font-tech text-xs text-[#9333EA] hover:underline uppercase tracking-wider"
                >
                  <span>ACCESS ARCHIVES</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Metric Card 3 */}
              <div className="metallic-card p-6 rounded-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 font-tech text-xs text-white/30 group-hover:text-white transition-colors">
                  [03]
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/20 flex items-center justify-center text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-tech text-[10px] text-[#8C8C8C] tracking-widest uppercase">
                      OPERATIONAL CADRE
                    </div>
                    <div className="font-display text-2xl font-bold text-white tracking-wider">
                      24 OPERATIVES
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#8C8C8C] leading-relaxed mb-4">
                  Engineers, creative technologists, AI researchers, and tactical leads.
                </p>
                <Link
                  to="/committee"
                  className="inline-flex items-center gap-1.5 font-tech text-xs text-white hover:underline uppercase tracking-wider"
                >
                  <span>VIEW COMMAND TEAM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Metric Card 4: System Status */}
              <div className="metallic-card p-6 rounded-sm relative overflow-hidden border border-[#00F0FF]/30 bg-gradient-to-br from-[#111318] to-[#16191F]">
                <div className="absolute top-0 right-0 p-3 font-tech text-xs text-[#00F0FF]">
                  LIVE_FEED
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#00F0FF]/20 border border-[#00F0FF] flex items-center justify-center text-[#00F0FF] shadow-[0_0_15px_#00F0FF]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-tech text-[10px] text-[#00F0FF] tracking-widest uppercase">
                      HEADQUARTERS STATUS
                    </div>
                    <div className="font-display text-xl font-bold text-white tracking-wider flex items-center gap-2">
                      <span>ONLINE</span>
                      <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 font-tech text-xs text-[#D8D8D8]">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-[#8C8C8C]">DEFENSE PROTOCOL</span>
                    <span className="text-[#00F0FF]">OPTIMAL</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-[#8C8C8C]">LATENCY</span>
                    <span>12.4 MS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C8C8C]">ENCRYPTION</span>
                    <span>POST-QUANTUM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'sectors' && (
            <motion.div
              key="tab-sectors"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="metallic-card p-6 rounded-sm">
                <div className="flex items-center gap-2 text-[#00F0FF] font-tech text-xs tracking-widest uppercase mb-3">
                  <Cpu className="w-4 h-4" /> SECTOR 01 // NEURAL LABS
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-2">AUTONOMOUS SYSTEMS DIVISION</h4>
                <p className="text-xs text-[#8C8C8C] leading-relaxed mb-4">
                  Directing localized small language models, low-power vision systems, and edge neural accelerators.
                </p>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#00F0FF] h-full w-[88%]" />
                </div>
                <div className="flex justify-between text-[10px] font-tech text-[#8C8C8C] mt-2">
                  <span>CAPACITY UTILIZATION</span>
                  <span className="text-[#00F0FF]">88%</span>
                </div>
              </div>

              <div className="metallic-card p-6 rounded-sm">
                <div className="flex items-center gap-2 text-[#9333EA] font-tech text-xs tracking-widest uppercase mb-3">
                  <Terminal className="w-4 h-4" /> SECTOR 02 // FORGE HACK LABS
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-2">RAPID PROTOTYPING FORGE</h4>
                <p className="text-xs text-[#8C8C8C] leading-relaxed mb-4">
                  High-speed multi-layer PCB design, mechanical fabrication, and custom sensor network telemetry.
                </p>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#9333EA] h-full w-[94%]" />
                </div>
                <div className="flex justify-between text-[10px] font-tech text-[#8C8C8C] mt-2">
                  <span>CAPACITY UTILIZATION</span>
                  <span className="text-[#9333EA]">94%</span>
                </div>
              </div>

              <div className="metallic-card p-6 rounded-sm">
                <div className="flex items-center gap-2 text-white font-tech text-xs tracking-widest uppercase mb-3">
                  <Shield className="w-4 h-4" /> SECTOR 03 // CYBER COMMAND
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-2">CIPHER DEFENSE SQUAD</h4>
                <p className="text-xs text-[#8C8C8C] leading-relaxed mb-4">
                  Conducting zero-trust isolation audits, cryptographic attack simulations, and perimeter monitoring.
                </p>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-white h-full w-[100%]" />
                </div>
                <div className="flex justify-between text-[10px] font-tech text-[#8C8C8C] mt-2">
                  <span>CAPACITY UTILIZATION</span>
                  <span className="text-white">100% (SECURE)</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'telemetry' && (
            <motion.div
              key="tab-telemetry"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="metallic-card p-8 rounded-sm font-tech text-xs text-[#00F0FF]/90 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-bold tracking-widest">[HOST: ASTHRA-HQ-CORE-NODE-01]</span>
                <span className="text-[#9333EA] animate-pulse">UPTIME: 99.98% // NO DRIFT DETECTED</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#D8D8D8]">
                <div>
                  <div className="text-[#8C8C8C] mb-1">&gt; QUANTUM COMPUTE ENCLAVE:</div>
                  <div className="font-mono text-xs bg-black/60 p-3 rounded border border-white/5 text-[#00F0FF]">
                    256 QUBIT EMULATION ENGINE: SYNCHRONIZED
                    <br />
                    THERMAL DRIFT: &lt; 0.002 KELVIN
                    <br />
                    SEC_KEYS ROTATED: 14 SECONDS AGO
                  </div>
                </div>
                <div>
                  <div className="text-[#8C8C8C] mb-1">&gt; TELEMETRY STREAM LOG:</div>
                  <div className="font-mono text-xs bg-black/60 p-3 rounded border border-white/5 text-[#9333EA]">
                    PORT 443 ENCRYPTED SSL TLS 1.3
                    <br />
                    SPATIAL ASSETS PRE-CACHED: OK
                    <br />
                    BROADCAST CHANNEL: ASTHRA_HQ_ONLINE
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
