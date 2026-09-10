import React from 'react';
import { motion } from 'framer-motion';

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';
  className?: string;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 35, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -35, filter: 'blur(4px)' },
          visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -35, filter: 'blur(4px)' },
          visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 35, filter: 'blur(4px)' },
          visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.94, filter: 'blur(6px)' },
          visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
        };
      case 'none':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
