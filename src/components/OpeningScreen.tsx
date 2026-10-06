import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';

interface OpeningScreenProps {
  onStart: () => void;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onStart }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.65,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="opening"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-6 py-10 sm:py-14 bg-gradient-to-b from-cream-100 via-blush-50 to-cream-100 paper-texture overflow-hidden select-none"
    >
      {/* Top delicate date & stamp */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full flex justify-between items-center max-w-md pt-2 text-xs tracking-widest text-charcoal-400 uppercase font-sans"
      >
        <span className="flex items-center gap-1.5 text-sage-500 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-blush-400" />
          October 07, 2026
        </span>
        <span className="text-[11px] text-charcoal-300">from Mann</span>
      </motion.div>

      {/* Center Staggered Text Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg my-auto py-8 text-center flex flex-col items-center gap-6 sm:gap-7"
      >
        {/* Line 1 */}
        <motion.div variants={itemVariants} className="space-y-1">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-blush-400 font-semibold px-3 py-1 rounded-full bg-blush-100/60 border border-blush-200/50 mb-1">
            a little surprise
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-800 font-normal tracking-tight">
            Hiii Nishuu <span className="inline-block hover:rotate-12 transition-transform duration-300">👀</span>
          </h1>
        </motion.div>

        {/* Line 2 */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-base sm:text-lg text-charcoal-500 font-normal leading-relaxed max-w-sm sm:max-w-md"
        >
          You were probably expecting a birthday paragraph from me.
        </motion.p>

        {/* Line 3 */}
        <motion.div
          variants={itemVariants}
          className="px-5 py-3.5 rounded-2xl bg-cream-50/80 border border-blush-200/50 shadow-soft max-w-xs sm:max-w-sm"
        >
          <p className="font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Unfortunately for you...
            <span className="block mt-1 font-medium text-charcoal-800">
              I decided to show off a little. 😂
            </span>
          </p>
        </motion.div>

        {/* Line 4 */}
        <motion.p
          variants={itemVariants}
          className="font-serif text-2xl sm:text-3xl text-charcoal-700 italic font-medium"
        >
          So I made you something.
        </motion.p>

        {/* Line 5 */}
        <motion.div variants={itemVariants} className="pt-2">
          <p className="font-serif text-2xl sm:text-3xl text-blush-500 font-semibold tracking-wide flex items-center justify-center gap-2">
            Happy birthday, birthday girl. <span className="text-xl">❤️</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="w-full max-w-sm flex flex-col items-center pb-4 z-20"
      >
        <button
          onClick={onStart}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-charcoal-800 hover:bg-charcoal-700 active:scale-[0.98] text-cream-50 text-base sm:text-lg font-medium shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 flex items-center justify-center gap-3 border border-charcoal-600/40 group"
        >
          <span>come on, birthday girl</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5 font-sans">
            →
          </span>
        </button>

        <button
          onClick={onStart}
          className="mt-3 flex items-center gap-1.5 text-xs text-charcoal-400 hover:text-charcoal-600 transition-colors"
          aria-label="Scroll down"
        >
          <span className="font-sans tracking-wide">scroll to unfold</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </button>
      </motion.div>

      {/* Delicate botanical SVG decorations */}
      <div className="absolute -top-12 -left-12 w-40 h-40 opacity-20 pointer-events-none text-sage-300">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 25 75 40 100 50 C75 60 60 75 50 100 C40 75 25 60 0 50 C25 40 40 25 50 0 Z" />
        </svg>
      </div>
      <div className="absolute -bottom-16 -right-12 w-48 h-48 opacity-15 pointer-events-none text-blush-300">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
    </section>
  );
};
