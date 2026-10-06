import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  Laugh,
  Video,
  HeartHandshake,
  Heart,
  Moon,
  Sparkles,
  Check,
} from 'lucide-react';

interface LittleMoment {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  note: string;
  color: string;
}

const MOMENTS: LittleMoment[] = [
  {
    id: 'conversations',
    name: 'Random conversations',
    icon: MessageCircle,
    note: 'The 2 AM topics that make zero sense but are the best.',
    color: 'from-blush-100 to-cream-50',
  },
  {
    id: 'jokes',
    name: 'Your stupid jokes',
    icon: Laugh,
    note: 'Terrible delivery, but I will still laugh every single time.',
    color: 'from-amber-100/70 to-cream-50',
  },
  {
    id: 'facetime',
    name: 'Our FaceTime calls',
    icon: Video,
    note: 'Even when neither of us is saying anything at all.',
    color: 'from-sage-100 to-cream-50',
  },
  {
    id: 'holding-hands',
    name: 'Holding hands',
    icon: HeartHandshake,
    note: 'Quiet, simple, and effortlessly comforting.',
    color: 'from-blush-100 to-cream-50',
  },
  {
    id: 'hugs',
    name: 'Hugs',
    icon: Heart,
    note: 'The kind where you can just let out a long sigh and relax.',
    color: 'from-rose-100/70 to-cream-50',
  },
  {
    id: 'sleep-shoulder',
    name: 'Falling asleep on my shoulder',
    icon: Moon,
    note: 'My shoulder is officially reserved for you. No questions asked.',
    color: 'from-indigo-100/60 to-cream-50',
  },
  {
    id: 'hair',
    name: 'Playing with your hair',
    icon: Sparkles,
    note: 'So soft, and genuinely one of my favourite things to do.',
    color: 'from-sage-100 to-cream-50',
  },
];

export const LittleThings: React.FC = () => {
  const [activeMoment, setActiveMoment] = useState<string | null>(null);

  return (
    <section
      id="little-things"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 max-w-2xl mx-auto scroll-mt-14"
    >
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-blush-400 font-semibold px-3 py-1 rounded-full bg-blush-100/70 border border-blush-200/50 inline-block mb-3">
          the everyday magic
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 font-normal tracking-tight">
          It's the little things.
        </h2>
      </div>

      {/* Main Narrative Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl p-6 sm:p-8 bg-cream-50/90 border border-blush-200/60 shadow-soft-lg space-y-4 font-sans text-base sm:text-lg text-charcoal-600 leading-relaxed"
      >
        <p className="font-serif italic text-xl sm:text-2xl text-charcoal-800">
          You know what I've realised?
        </p>

        <p>
          Sometimes the smallest moments end up becoming my favourites.
        </p>

        {/* Interactive Vignette Pills */}
        <div className="my-6 pt-2">
          <p className="text-xs uppercase tracking-wider text-charcoal-400 font-semibold mb-3">
            Tap to see a little note on each:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {MOMENTS.map((item) => {
              const isSelected = activeMoment === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    setActiveMoment(isSelected ? null : item.id)
                  }
                  className={`text-left p-3 rounded-2xl border transition-all duration-300 flex items-start gap-3 active:scale-[0.98] ${
                    isSelected
                      ? 'bg-cream-100 border-blush-300 shadow-soft'
                      : 'bg-white/60 hover:bg-white/90 border-cream-300/70 shadow-sm'
                  }`}
                  aria-expanded={isSelected}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-blush-400 text-cream-50'
                        : 'bg-blush-100/70 text-blush-500'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm sm:text-base font-medium text-charcoal-800 truncate">
                        {item.name}
                      </span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-blush-400 shrink-0 ml-1" />
                      )}
                    </div>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, y: -4 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs text-charcoal-600 mt-1 font-sans leading-normal italic overflow-hidden"
                        >
                          {item.note}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <p className="font-medium text-charcoal-800">
          Honestly, I really like these little things.
        </p>

        <p>
          There's no need to rush anything or turn every moment into something bigger.
        </p>

        <div className="pt-2 text-charcoal-800">
          <p className="font-serif text-xl sm:text-2xl italic text-charcoal-800">
            I just like spending time with you.
          </p>
          <p className="font-serif text-lg sm:text-xl text-blush-500 mt-1">
            And I think that's pretty nice. 🫶
          </p>
        </div>
      </motion.div>
    </section>
  );
};
