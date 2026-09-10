import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(true);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check closest interactive element with data-cursor or specific tags
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
        return;
      }

      const interactive = target.closest('a, button, [role="button"]');
      if (interactive) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      <motion.div
        animate={{
          x: mousePosition.x - (cursorText ? 36 : isHovered ? 20 : 6),
          y: mousePosition.y - (cursorText ? 36 : isHovered ? 20 : 6),
          width: cursorText ? 72 : isHovered ? 40 : 12,
          height: cursorText ? 72 : isHovered ? 40 : 12,
          backgroundColor: cursorText
            ? 'rgba(0, 240, 255, 0.9)'
            : isHovered
            ? 'rgba(0, 240, 255, 0.2)'
            : 'rgba(255, 255, 255, 0.95)',
          borderColor: isHovered ? 'rgba(0, 240, 255, 0.8)' : 'transparent',
          borderWidth: isHovered ? 1.5 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.1,
        }}
        className="rounded-full flex items-center justify-center backdrop-blur-[2px] shadow-[0_0_15px_rgba(0,240,255,0.4)]"
      >
        {cursorText && (
          <span className="font-display text-[9px] font-bold text-black tracking-wider uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
