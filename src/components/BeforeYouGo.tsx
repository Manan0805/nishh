import React from 'react';
import { motion } from 'framer-motion';

export const BeforeYouGo: React.FC = () => {
  return (
    <section
      id="before-you-go"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 max-w-2xl mx-auto scroll-mt-14"
    >
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-charcoal-400 font-semibold px-3 py-1 rounded-full bg-cream-200/80 border border-charcoal-200/50 inline-block mb-3">
          from a random bumble match
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 font-normal tracking-tight">
          Before you go...
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.65 }}
        className="rounded-3xl p-6 sm:p-9 bg-cream-50/95 border border-blush-200/70 shadow-soft-lg space-y-4 font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed sm:leading-loose"
      >
        <p className="font-serif text-2xl sm:text-3xl text-charcoal-800 font-medium">
          Nishhu,
        </p>

        <p>
          I don't know exactly what the future holds.
        </p>

        <p>
          And honestly, I don't think we need to figure everything out right now.
        </p>

        <p className="font-serif text-xl sm:text-2xl text-charcoal-800 italic pt-1">
          But I do know that I really enjoy having you around.
        </p>

        {/* Playful recall list */}
        <div className="pl-4 border-l-2 border-blush-300 space-y-1.5 text-charcoal-700 font-medium my-4">
          <p>Our random conversations.</p>
          <p>Our stupid jokes.</p>
          <p>Those unexpected little moments.</p>
          <p className="text-charcoal-800">
            And all the nonsense we somehow manage to talk about. 😂
          </p>
        </div>

        <p className="pt-1">
          I'm glad we met.
        </p>

        <p className="font-medium text-charcoal-800">
          And I'm glad that a random Bumble conversation turned into something I genuinely value.
        </p>

        <p>
          So here's to more good conversations, more laughter, and hopefully a lot more happy memories.
        </p>

        <div className="pt-3">
          <p className="font-serif italic text-xl sm:text-2xl text-blush-500 font-medium">
            One day at a time. 🫂
          </p>
        </div>
      </motion.div>
    </section>
  );
};
