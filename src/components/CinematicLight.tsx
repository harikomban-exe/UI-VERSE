import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CinematicLight: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const springConfig = { damping: 25, stiffness: 80, mass: 0.5 };
  const mouseX = useSpring(0.5, springConfig);
  const mouseY = useSpring(0.3, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [mouseX, mouseY]);

  // If mobile or prefers-reduced-motion, keep static ambient glow
  if (windowWidth < 768) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#00F0FF]/10 rounded-full blur-[90px]" />
        <div className="absolute bottom-1/3 right-10 w-[280px] h-[280px] bg-[#9333EA]/10 rounded-full blur-[90px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary dynamic cursor light source */}
      <motion.div
        style={{
          left: mouseX ? `${mouseX.get() * 100}%` : '50%',
          top: mouseY ? `${mouseY.get() * 100}%` : '30%',
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#0066FF]/12 via-[#00F0FF]/15 to-[#9333EA]/12 blur-[120px] transition-all duration-300"
      />

      {/* Secondary accent bloom that shifts opposite to mouse */}
      <motion.div
        style={{
          right: mouseX ? `${(1 - mouseX.get()) * 50}%` : '30%',
          top: mouseY ? `${(1 - mouseY.get()) * 60}%` : '50%',
          transform: 'translate(50%, -50%)',
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#9333EA]/10 via-[#00F0FF]/08 to-transparent blur-[140px] pointer-events-none"
      />

      {/* Top subtle blue rim lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent" />
      
      {/* Vignette edge lighting */}
      <div className="absolute inset-0 vignette-overlay" />
    </div>
  );
};
