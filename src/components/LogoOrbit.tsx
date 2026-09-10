import React, { useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import logoImg from '../assets/a1.png';

export const LogoOrbit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pulseKey, setPulseKey] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Smooth springs for mouse parallax
  const rotateX = useSpring(0, { damping: 20, stiffness: 100 });
  const rotateY = useSpring(0, { damping: 20, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * -12);
    rotateY.set(((x - centerX) / centerX) * 12);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    setPulseKey((prev) => prev + 1);
  };

  return (
    <section className="relative py-28 px-4 overflow-hidden border-t border-b border-white/5 bg-[#050505]">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-[#00F0FF]/05 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F0FF]/30 bg-[#111318]/80 text-[#00F0FF] text-[11px] font-tech tracking-[0.25em] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-ping" />
          PRIMARY CORE IDENTITY
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-[0.2em] text-white uppercase mb-4 text-glow-white">
          THIS IS ASTHRA.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-base text-[#8C8C8C] mb-12">
          Click the core emblem to channel energy. The foundation of futuristic circuitry,
          dynamic energy rings, and visionary student innovation.
        </p>

        {/* 3D Interactive Stage */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          data-cursor="ASTHRA"
          className="relative mx-auto w-80 h-80 md:w-[460px] md:h-[460px] flex items-center justify-center cursor-pointer select-none perspective-1000"
        >
          {/* Parallax Container */}
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-full h-full flex items-center justify-center transform-style-3d"
          >
            {/* Outermost Orbit Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-[#00F0FF]/25 flex items-center justify-center"
            >
              {/* Circuit Satellite Node 1 */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#00F0FF] shadow-[0_0_12px_#00F0FF]" />
                <span className="font-tech text-[9px] text-[#00F0FF] tracking-wider hidden md:inline">NODE_ALPHA</span>
              </div>
              {/* Circuit Satellite Node 2 */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#9333EA] shadow-[0_0_10px_#9333EA]" />
                <span className="font-tech text-[9px] text-[#9333EA] tracking-wider hidden md:inline">NODE_BETA</span>
              </div>
            </motion.div>

            {/* Middle Orbit Ring (Reverse Direction) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 rounded-full border border-[#0066FF]/35"
            >
              <div className="absolute top-1/2 -right-1 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#FFF]" />
              <div className="absolute top-1/2 -left-1 w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
            </motion.div>

            {/* Inner Ring with Segmented Dash */}
            <div className="absolute inset-16 rounded-full border border-white/10" />

            {/* Shockwave Pulse from click */}
            <motion.div
              key={pulseKey}
              initial={{ scale: 0.5, opacity: 0.9 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-20 rounded-full border-2 border-[#00F0FF] shadow-[0_0_35px_#00F0FF] pointer-events-none"
            />

            {/* Glow Aura behind logo */}
            <motion.div
              animate={{
                scale: isHovered ? [1, 1.25, 1.15] : [1, 1.08, 1],
                opacity: isHovered ? 0.7 : 0.4,
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-[#0066FF]/30 via-[#00F0FF]/30 to-[#9333EA]/30 blur-[40px] pointer-events-none"
            />

            {/* Core ASTHRA Logo (Untouched Proportions) */}
            <motion.div
              animate={{
                scale: isHovered ? 1.08 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="relative z-20 w-44 h-44 md:w-60 md:h-60 flex items-center justify-center"
            >
              <img
                src={logoImg}
                alt="ASTHRA Core Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(0,240,255,0.7)]"
              />
            </motion.div>
          </motion.div>

          {/* Telemetry markers around border */}
          <div className="absolute top-2 left-2 font-tech text-[10px] text-[#00F0FF]/70 tracking-widest uppercase">
            [SYS_INTEGRITY: 100%]
          </div>
          <div className="absolute bottom-2 right-2 font-tech text-[10px] text-[#9333EA]/70 tracking-widest uppercase">
            [FREQ: 142.8 THZ]
          </div>
        </div>
      </div>
    </section>
  );
};
