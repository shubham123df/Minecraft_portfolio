import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const loadingTexts = [
  'Building world...',
  'Loading chunks...',
  'Spawning projects...',
  'Initialising skills...',
  'Ready to explore!',
];

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const step = prefersReducedMotion ? 20 : 2;
    const interval = prefersReducedMotion ? 40 : 40;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev >= loadingTexts.length - 1) {
          clearInterval(textInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const delay = prefersReducedMotion ? 0 : 300;
      const timeout = setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, prefersReducedMotion ? 0 : 500);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete, prefersReducedMotion]);

  const blockAnimation = prefersReducedMotion
    ? {}
    : {
        animate: { rotateY: 360 },
        transition: { duration: 3, repeat: Infinity, ease: 'linear' },
      };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.div
            initial={prefersReducedMotion ? {} : { scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative w-16 h-16">
              <motion.div
                {...blockAnimation}
                className="w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="absolute inset-0 bg-mc-grass border-4 border-mc-grass/80 shadow-pixel"
                  style={{ transform: 'translateZ(8px)' }}
                />
              </motion.div>
            </div>

            <div aria-live="polite" aria-atomic="true">
              <motion.p
                key={textIndex}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-pixel text-xs text-pixel-accent"
              >
                {loadingTexts[textIndex]}
              </motion.p>
            </div>

            <div
              className="loading-bar"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Loading progress"
            >
              <motion.div
                className="loading-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p
              className="font-pixel text-[10px] text-pixel-text-light/60 dark:text-pixel-text-dark/60"
              aria-hidden="true"
            >
              {progress}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
