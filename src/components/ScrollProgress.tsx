import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  activeSection: string;
}

const SECTIONS = [
  { id: 'opening', label: 'Intro' },
  { id: 'seven-things', label: '7 Things' },
  { id: 'memory-date', label: '03.10.2026' },
  { id: 'remember', label: 'Remember' },
  { id: 'little-things', label: 'The Little Things' },
  { id: 'before-you-go', label: 'Before You Go' },
  { id: 'finale', label: 'Birthday' },
];

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ activeSection }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Fade in after scrolling past top of opening screen
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top subtle slim line indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blush-200 via-blush-300 to-sage-300 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating minimal pill navigation for mobile & desktop */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        aria-label="Section Navigation"
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 px-3 py-1.5 rounded-full glass-cream shadow-soft flex items-center gap-1.5 border border-blush-200/60 transition-all duration-300"
      >
        <span className="text-[11px] font-medium tracking-wider uppercase text-charcoal-500 pl-1 pr-1.5 border-r border-charcoal-200/50">
          N &amp; M
        </span>

        <div className="flex items-center gap-1">
          {SECTIONS.map((sec, idx) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                title={sec.label}
                className="group relative p-1.5 rounded-full focus:outline-none"
                aria-label={`Jump to section ${sec.label}`}
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-5 h-2 bg-blush-400'
                      : 'w-2 h-2 bg-charcoal-300/40 group-hover:bg-blush-300'
                  }`}
                />
                <span className="sr-only">{sec.label}</span>
                {/* Floating tooltip on hover */}
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] rounded bg-charcoal-700 text-cream-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block shadow-sm">
                  {idx + 1}. {sec.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};
