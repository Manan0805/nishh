import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';
import { PhotoPlaceholder } from './PhotoPlaceholder';

export const MemoryJournal: React.FC = () => {
  return (
    <section
      id="memory-date"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 max-w-2xl mx-auto scroll-mt-14"
    >
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100/70 border border-sage-200/60 text-xs font-medium text-sage-600 mb-3">
          <Compass className="w-3.5 h-3.5 text-sage-500" />
          <span>a memory journal entry</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 font-normal tracking-tight">
          03.10.2026
        </h2>
        <p className="mt-2.5 font-sans text-sm sm:text-base text-charcoal-500 max-w-md mx-auto italic">
          A little moment I don't want to forget.
        </p>
      </div>

      {/* Illustrated / Scrapbook Photo Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <PhotoPlaceholder
          caption="That peaceful cab ride"
          dateStr="3rd October 2026"
        />
      </motion.div>

      {/* Memory Journal Entry Letter / Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mt-8 rounded-3xl p-6 sm:p-8 bg-cream-50/90 border border-blush-200/60 shadow-soft-lg paper-texture"
      >
        {/* Decorative corner tag */}
        <div className="absolute top-4 right-4 text-xs font-serif italic text-charcoal-400 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-blush-400" />
          <span>page 03</span>
        </div>

        {/* Narrative */}
        <div className="space-y-4 font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed sm:leading-loose">
          <p>
            I think my favourite part of that day wasn't even something we planned.
          </p>

          <p className="font-serif text-xl sm:text-2xl text-charcoal-800 italic font-medium py-1">
            It was that cab ride.
          </p>

          <p>
            You fell asleep on my shoulder, and I was just playing with your hair.
          </p>

          <p className="font-serif italic text-lg sm:text-xl text-charcoal-700">
            And honestly?
          </p>

          <div className="my-3 py-3 px-4 rounded-2xl bg-cream-100/70 border-l-2 border-blush-300 space-y-1 text-charcoal-700 font-medium">
            <p>For those few minutes, everything felt really peaceful.</p>
            <p>No overthinking.</p>
            <p>No unnecessary conversations.</p>
            <p className="text-charcoal-800">Just you sleeping on my shoulder.</p>
          </div>

          <p>
            I remember looking at you and thinking about how ridiculously cute you looked. 😂
          </p>

          <p>
            I genuinely didn't want to move.
          </p>

          <div className="pt-2 text-charcoal-800 font-medium">
            <p>So yes...</p>
            <p className="font-serif text-lg sm:text-xl text-blush-500 italic mt-1 font-semibold">
              You officially owe my shoulder another nap. 😌
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
