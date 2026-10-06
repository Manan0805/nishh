import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Moon, Smile, Volume2, MessageSquare, ShieldCheck, Heart, ChevronDown } from 'lucide-react';
import { SevenThingCard } from '../types';

const CARDS_DATA: SevenThingCard[] = [
  {
    id: 1,
    numberStr: '01',
    title: 'YOUR EYES',
    teaser: 'Still not over them...',
    message: [
      'Still not over them.',
      'I genuinely could stare at them for an unnecessarily long amount of time. 👀',
    ],
  },
  {
    id: 2,
    numberStr: '02',
    title: 'YOUR SLEEPY FACE',
    teaser: 'Especially after that cab ride...',
    message: [
      'Especially after that cab ride on 3rd October.',
      "You looked ridiculously cute, and you didn't even know it. 😂",
    ],
  },
  {
    id: 3,
    numberStr: '03',
    title: 'YOUR ATTITUDE',
    teaser: 'Very confusing behaviour...',
    message: [
      "Sometimes you act like you don't need anyone.",
      'And then somehow you end up being the cutest person ever.',
      'Very confusing behaviour, Nishhu. 😂',
    ],
  },
  {
    id: 4,
    numberStr: '04',
    title: 'YOUR VOICE',
    teaser: "Especially when you're tired...",
    message: [
      "Especially when you're tired.",
      "I don't even know how to explain this one.",
      'I just really like listening to you.',
    ],
  },
  {
    id: 5,
    numberStr: '05',
    title: 'YOUR RANDOM RANTS',
    teaser: 'From serious to nonsense in 10 seconds...',
    message: [
      "One minute we're discussing something serious.",
      'The next minute we\'re talking absolute nonsense.',
      'And somehow, I enjoy both equally. 😂',
    ],
  },
  {
    id: 6,
    numberStr: '06',
    title: 'YOUR TRUST',
    teaser: 'Something I value deeply...',
    message: [
      "I know trusting someone isn't always easy for you.",
      'And I genuinely appreciate the little moments when you feel comfortable enough to be yourself around me.',
    ],
  },
  {
    id: 7,
    numberStr: '07',
    title: 'YOU',
    teaser: 'The most important one.',
    message: [
      'Honestly, I could keep going.',
      "But then you'd get too confident.",
      'And we absolutely cannot allow that. 😌',
    ],
    isSpecial: true,
  },
];

const CARD_ICONS = [
  Eye,
  Moon,
  Smile,
  Volume2,
  MessageSquare,
  ShieldCheck,
  Heart,
];

export const SevenThings: React.FC = () => {
  const [openedCards, setOpenedCards] = useState<number[]>([1]); // First card opened by default to invite interaction

  const toggleCard = (id: number) => {
    setOpenedCards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const revealedCount = openedCards.length;

  return (
    <section
      id="seven-things"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 max-w-2xl mx-auto scroll-mt-14"
    >
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-blush-400 font-semibold px-3 py-1 rounded-full bg-blush-100/70 border border-blush-200/50 inline-block mb-3">
          The 7th for the 7th
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 font-normal tracking-tight">
          7 things I like about you
        </h2>
        <p className="mt-3 font-sans text-sm sm:text-base text-charcoal-500 max-w-md mx-auto leading-relaxed">
          Since it's your birthday on the 7th, here's a little list.
        </p>

        {/* Subtle interactive discovery tracker */}
        <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-50/90 border border-blush-200/40 text-xs text-charcoal-500 shadow-sm">
          <span>{revealedCount} of 7 uncovered</span>
          <div className="w-16 h-1.5 bg-cream-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-blush-400 rounded-full transition-all duration-500"
              style={{ width: `${(revealedCount / 7) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Seven Interactive Cards */}
      <div className="space-y-4 sm:space-y-5">
        {CARDS_DATA.map((card, idx) => {
          const isOpened = openedCards.includes(card.id);
          const Icon = CARD_ICONS[idx];

          if (card.isSpecial) {
            // Card 07 - Visually Distinct Special Card
            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => toggleCard(card.id)}
                className={`relative rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden border-2 ${
                  isOpened
                    ? 'bg-gradient-to-br from-cream-50 via-blush-100/60 to-sage-50 border-blush-300 shadow-soft-xl'
                    : 'bg-gradient-to-br from-cream-50 to-blush-50/70 border-blush-200 shadow-soft-lg hover:border-blush-300'
                }`}
              >
                {/* Special Highlight Badge */}
                <div className="absolute top-3 right-4 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blush-300/40 text-charcoal-700 text-[10px] font-semibold tracking-wider uppercase">
                  <span>✨ the final one</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blush-400 to-rose-400 text-cream-50 flex items-center justify-center font-serif font-bold text-base shadow-sm">
                      <Heart className="w-5 h-5 fill-cream-50 text-cream-50" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-sm font-semibold text-blush-500 tracking-wider">
                          CARD {card.numberStr}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-charcoal-800 font-semibold tracking-wide">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpened ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-blush-200/50 flex items-center justify-center text-charcoal-600"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Card Content Expansion */}
                <AnimatePresence initial={false}>
                  {isOpened && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-4 border-t border-blush-200/70 space-y-2.5 text-charcoal-700 font-sans text-base sm:text-lg leading-relaxed">
                        {card.message.map((paragraph, pIdx) => (
                          <p key={pIdx} className="font-medium text-charcoal-800">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isOpened && (
                  <p className="mt-2.5 text-xs text-charcoal-400 font-sans italic pl-13">
                    Tap to reveal card 07 →
                  </p>
                )}
              </motion.div>
            );
          }

          // Cards 01 to 06
          return (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              onClick={() => toggleCard(card.id)}
              className={`relative rounded-2xl p-4 sm:p-5 transition-all duration-300 cursor-pointer overflow-hidden border ${
                isOpened
                  ? 'bg-cream-50 border-blush-200 shadow-soft-lg'
                  : 'bg-cream-50/70 hover:bg-cream-50 border-cream-300 hover:border-blush-200 shadow-soft'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blush-100 text-charcoal-700 flex items-center justify-center font-serif font-semibold text-sm border border-blush-200/60">
                    <Icon className="w-4 h-4 text-blush-500" />
                  </div>
                  <div>
                    <span className="font-serif text-xs font-semibold text-charcoal-400 tracking-wider">
                      CARD {card.numberStr}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-charcoal-800 font-medium tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!isOpened && (
                    <span className="hidden sm:inline-block text-[11px] text-charcoal-400">
                      tap to open
                    </span>
                  )}
                  <motion.div
                    animate={{ rotate: isOpened ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-7 h-7 rounded-full bg-cream-200/70 flex items-center justify-center text-charcoal-500"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </motion.div>
                </div>
              </div>

              {/* Message Drawer */}
              <AnimatePresence initial={false}>
                {isOpened && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-3.5 border-t border-cream-200 space-y-2 text-charcoal-600 font-sans text-sm sm:text-base leading-relaxed">
                      {card.message.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
