import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface BirthdayFinaleProps {
  onOpenSurprise: () => void;
}

export const BirthdayFinale: React.FC<BirthdayFinaleProps> = ({
  onOpenSurprise,
}) => {
  return (
    <section
      id="finale"
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center py-20 px-4 sm:px-6 bg-gradient-to-b from-cream-100 via-blush-50/60 to-cream-200/50 paper-texture overflow-hidden select-none"
    >
      {/* Decorative background floral circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-blush-100/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center">
        {/* Floating Mini Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blush-200/60 border border-blush-300/60 text-xs font-semibold tracking-widest text-charcoal-700 uppercase mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-blush-500" />
          <span>October 07, 2026</span>
          <Heart className="w-3.5 h-3.5 fill-blush-400 text-blush-400 ml-0.5" />
        </motion.div>

        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-800 text-center font-normal tracking-tight leading-tight"
        >
          Happy Birthday, Nishhu. <span className="text-blush-500">❤️</span>
        </motion.h2>

        {/* Photo 03: Birthday Girl Polaroid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full my-4"
        >
          <PhotoPlaceholder
            photoKey="photo3"
            caption="To the cutest birthday girl"
            dateStr="7th October 2026"
            tag="#birthdaygirl"
            rotation="rotate-[-1deg]"
            illustrationType="birthday"
          />
        </motion.div>

        {/* The Heartfelt Letter Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 sm:mt-10 w-full rounded-3xl p-6 sm:p-10 bg-cream-50/95 border border-blush-200/80 shadow-soft-xl space-y-5 font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed sm:leading-loose text-left"
        >
          <p className="font-serif italic text-lg sm:text-xl text-charcoal-700">
            I know birthdays aren't exactly your favourite thing.
          </p>

          <p className="font-medium text-charcoal-800">
            But today, I just want to wish you a genuinely beautiful year ahead.
          </p>

          <div className="space-y-2 py-2 text-charcoal-700">
            <p>I hope you find more reasons to smile.</p>
            <p>I hope things start feeling a little lighter.</p>
            <p>I hope you achieve the things you've been working towards.</p>
            <p>I hope you meet people who appreciate you.</p>
            <p className="font-medium text-charcoal-800">
              And most importantly, I hope you find happiness in all those little everyday moments.
            </p>
          </div>

          <div className="pt-2 space-y-1">
            <p>I'm really glad I got to know you.</p>
            <p>And I hope we make plenty of good memories together.</p>
          </div>

          <p className="font-serif text-xl sm:text-2xl text-charcoal-800 font-medium pt-2">
            Happy birthday, Nishhu. 🫂❤️
          </p>

          {/* Signoff */}
          <div className="pt-4 border-t border-blush-200/60 font-serif">
            <p className="text-base sm:text-lg italic text-charcoal-500">
              Yours lovingly,
            </p>
            <p className="text-2xl sm:text-3xl font-medium text-charcoal-800 mt-0.5 tracking-wide">
              Mann
            </p>
          </div>
        </motion.div>

        {/* Large Button: "one last thing →" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 w-full max-w-sm flex justify-center"
        >
          <button
            onClick={onOpenSurprise}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blush-400 to-rose-400 hover:from-blush-500 hover:to-rose-500 active:scale-[0.98] text-white text-base sm:text-lg font-medium shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>one last thing</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1.5 font-sans">
              →
            </span>
          </button>
        </motion.div>

        {/* Small warm footer text */}
        <p className="mt-8 text-xs text-charcoal-400 font-sans tracking-wide">
          Handcrafted with care for Nishhu • 07.10.2026
        </p>
      </div>
    </section>
  );
};
