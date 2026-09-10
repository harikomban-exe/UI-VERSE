import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  type?: 'button' | 'submit' | 'reset';
  cursorLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  icon = true,
  type = 'button',
  cursorLabel,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-xs md:text-sm',
    lg: 'px-8 py-4 text-sm md:text-base',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#111318] to-[#16191F] text-white border border-[#00F0FF]/40 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:border-[#00F0FF] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]',
    secondary:
      'bg-[#080808]/80 text-[#D8D8D8] border border-white/15 hover:border-white/40 hover:text-white hover:bg-[#111318]',
    ghost:
      'bg-transparent text-[#8C8C8C] border border-transparent hover:border-[#00F0FF]/30 hover:text-[#00F0FF]',
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20, mass: 0.2 }}
      data-cursor={cursorLabel}
      className={`group relative inline-flex items-center justify-center font-display font-bold tracking-widest uppercase transition-all duration-300 rounded-sm overflow-hidden select-none ${sizeClasses[size]} ${variantStyles[variant]} ${className}`}
    >
      {/* Background fill shimmer */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F0FF]/15 via-transparent to-[#9333EA]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Edge accent line */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#00F0FF] to-[#9333EA] group-hover:w-full transition-all duration-300" />

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        {icon && (
          <ArrowRight className="w-4 h-4 text-[#00F0FF] transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </motion.button>
  );
};
