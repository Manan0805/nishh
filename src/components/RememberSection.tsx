import React from 'react';
import { motion } from 'framer-motion';

export const RememberSection: React.FC = () => {
  return (
    <section
      id="remember"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 max-w-2xl mx-auto scroll-mt-14"
    >
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-sage-600 font-semibold px-3 py-1 rounded-full bg-sage-100/70 border border-sage-200/50 inline-block mb-3">
          a quiet reminder
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 font-normal tracking-tight">
          Something I want you to remember.
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl p-6 sm:p-9 bg-gradient-to-b from-cream-50 via-cream-50/90 to-blush-50/40 border border-blush-200/70 shadow-soft-xl overflow-hidden"
      >
        {/* Subtle decorative delicate leaf background */}
        <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 opacity-15 pointer-events-none text-sage-400">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M10,80 Q30,20 80,10 Q70,60 10,80 Z" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-5 font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed sm:leading-loose">
          <p className="font-serif text-2xl sm:text-3xl text-charcoal-800 font-medium">
            Nishhu,
          </p>

          <p>
            I know things haven't always been easy for you.
          </p>

          <p>
            And I know that sometimes even expecting something good can feel difficult.
          </p>

          <p className="font-medium text-charcoal-800">
            But I genuinely hope this year gives you reasons to believe that good things can happen too.
          </p>

          {/* Warm highlighted promises / affirmations */}
          <div className="space-y-3.5 my-5 py-4 px-5 rounded-2xl bg-cream-100/80 border border-blush-200/50 text-charcoal-700">
            <div className="flex items-start gap-2.5">
              <span className="text-blush-400 font-serif text-lg leading-none mt-1">✦</span>
              <p>You deserve moments where you don't have to overthink everything.</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-blush-400 font-serif text-lg leading-none mt-1">✦</span>
              <p>Moments where you can laugh without worrying about what happens next.</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-blush-400 font-serif text-lg leading-none mt-1">✦</span>
              <p>Moments where you can simply enjoy being yourself.</p>
            </div>
          </div>

          <p>
            And I hope you have plenty of those moments this year.
          </p>

          <div className="pt-2 text-charcoal-700">
            <p>Also...</p>
            <p className="font-serif italic text-lg sm:text-xl text-charcoal-800 font-semibold mt-1">
              I hope I get to annoy you through at least a few of them. 😂🫂
            </p>
          </div>
        </div>

        {/* Delicate botanical footer accent */}
        <div className="mt-8 pt-4 border-t border-blush-200/50 flex items-center justify-between text-xs text-charcoal-400 font-serif italic">
          <span>just breathe</span>
          <span>you are safe here</span>
        </div>
      </motion.div>
    </section>
  );
};
