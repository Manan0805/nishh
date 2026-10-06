import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X } from 'lucide-react';

interface FinalSurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FinalSurpriseModal: React.FC<FinalSurpriseModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Trigger a soft, gentle burst of rose and cream flower petals
      const end = Date.now() + 1.2 * 1000;
      const colors = ['#F4DCD6', '#EAA89B', '#DF8474', '#CFDBCB', '#FAF7F2'];

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: colors,
          shapes: ['circle'],
          ticks: 200,
          gravity: 0.8,
          scalar: 1.1,
          drift: 0.2,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: colors,
          shapes: ['circle'],
          ticks: 200,
          gravity: 0.8,
          scalar: 1.1,
          drift: -0.2,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm sm:max-w-md bg-cream-50 rounded-3xl p-6 sm:p-8 shadow-2xl border border-blush-200 paper-texture z-10 text-center select-none"
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-charcoal-400 hover:text-charcoal-700 hover:bg-cream-200/60 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Blooming Flower Animation */}
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Stem growing */}
                <motion.path
                  d="M50 85 Q50 65 50 48"
                  stroke="#8DA387"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                />

                {/* Leaves */}
                <motion.path
                  d="M50 70 Q40 65 36 72 Q44 75 50 70"
                  fill="#CFDBCB"
                  stroke="#8DA387"
                  strokeWidth="1.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                />
                <motion.path
                  d="M50 62 Q60 57 64 64 Q56 67 50 62"
                  fill="#CFDBCB"
                  stroke="#8DA387"
                  strokeWidth="1.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                />

                {/* Blooming Petals */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <motion.g
                    key={angle}
                    transform={`translate(50, 45) rotate(${angle})`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.7 + i * 0.05,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <ellipse
                      cx="0"
                      cy="-15"
                      rx="7.5"
                      ry="12"
                      fill="#F4DCD6"
                      stroke="#EAA89B"
                      strokeWidth="1.2"
                    />
                  </motion.g>
                ))}

                {/* Flower center */}
                <motion.circle
                  cx="50"
                  cy="45"
                  r="7"
                  fill="#DF8474"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, type: 'spring' }}
                />
              </svg>
            </div>

            {/* The Text */}
            <div className="space-y-3 font-sans text-charcoal-700 leading-relaxed">
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-2xl sm:text-3xl text-charcoal-800 font-semibold"
              >
                Waitttt.
              </motion.h4>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-sans text-base sm:text-lg text-charcoal-600"
              >
                You thought I was finally done? 😂
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="pt-2 space-y-1.5 text-base sm:text-lg"
              >
                <p>Okay, fine.</p>
                <p>I'll stop annoying you now.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="pt-3 border-t border-blush-200/60"
              >
                <p className="font-serif text-xl sm:text-2xl text-charcoal-800 font-medium">
                  Enjoy your birthday, Nishhu.
                </p>
                <p className="font-sans text-sm sm:text-base text-blush-500 font-medium mt-1">
                  And smile a little, okay?
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="pt-3 font-serif text-lg italic text-charcoal-700"
              >
                — Mann 🫶
              </motion.p>
            </div>

            {/* Bottom Dismiss Button */}
            <div className="mt-6">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-cream-200 hover:bg-cream-300 text-charcoal-700 text-sm font-medium transition-colors"
              >
                Okay, deal 😊
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
