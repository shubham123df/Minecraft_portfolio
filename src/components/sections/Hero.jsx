import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowDown, Mail, FileText } from 'lucide-react';
import { SOCIAL_LINKS, RESUME_URL } from '../../utils/constants';
import { DiamondIcon } from '../icons/MinecraftIcons';

const CORNER_BLOCKS = [
  { top: '8%', left: '2%', size: 28, delay: 0 },
  { top: '15%', left: '5%', size: 20, delay: 0.4 },
  { top: '70%', left: '1%', size: 24, delay: 0.8 },
  { top: '85%', left: '4%', size: 16, delay: 1.2 },
  { top: '10%', right: '2%', size: 24, delay: 0.2 },
  { top: '20%', right: '5%', size: 16, delay: 0.6 },
  { top: '75%', right: '1%', size: 28, delay: 1.0 },
  { top: '88%', right: '4%', size: 18, delay: 1.4 },
];

function AvatarFrame() {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      {/* Pixel border frame */}
      <div
        className="absolute inset-0 border-8 border-pixel-border-light dark:border-pixel-border-dark
                    bg-pixel-card-light dark:bg-pixel-card-dark shadow-pixel overflow-hidden"
      >
        <img
          src="/avatar-netherite.png"
          alt="Shubham Kumar Gupta — Software Engineer"
          className="w-full h-full object-contain"
          loading="eager"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Corner accent blocks */}
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-pixel-accent" aria-hidden="true" />
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-pixel-accent" aria-hidden="true" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pixel-accent" aria-hidden="true" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pixel-accent" aria-hidden="true" />

      {/* Floating diamond */}
      <motion.div
        className="absolute -right-5 -top-5"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <DiamondIcon className="w-8 h-8" />
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      aria-label="Introduction"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pixel-pattern dark:bg-pixel-pattern-dark opacity-50" aria-hidden="true" />

      {/* Edge-only floating blocks — desktop only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block" aria-hidden="true">
        {CORNER_BLOCKS.map((block, i) => (
          <motion.div
            key={i}
            className="absolute bg-pixel-accent/15 border-2 border-pixel-accent/20"
            style={{
              width: block.size,
              height: block.size,
              top: block.top,
              left: block.left,
              right: block.right,
            }}
            animate={{ y: [0, -14, 0], rotate: [0, 4, -4, 0] }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: block.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <AvatarFrame />
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left w-full">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-pixel text-xs text-pixel-accent mb-2 block"
            >
              Hello, I'm
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-pixel text-3xl md:text-4xl lg:text-5xl mb-4 pixel-text-shadow"
            >
              Shubham Kumar Gupta
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-pixel-accent mb-4"
            >
              Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-pixel-text-light/75 dark:text-pixel-text-dark/75 max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Backend-focused engineer building real-time systems, clean APIs, and production-ready services.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3"
            >
              <motion.a
                href="#projects"
                className="pixel-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href={RESUME_URL || undefined}
                target={RESUME_URL ? '_blank' : undefined}
                rel={RESUME_URL ? 'noopener noreferrer' : undefined}
                className={`pixel-btn-secondary flex items-center justify-center gap-2 ${!RESUME_URL ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="View resume (opens in new tab)"
                aria-disabled={!RESUME_URL}
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Resume
              </motion.a>

              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="GitHub profile (opens in new tab)"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                GitHub
              </motion.a>

              <motion.a
                href="#contact"
                className="pixel-btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Contact
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16 lg:mt-24"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <ArrowDown className="w-6 h-6 text-pixel-accent/50" />
        </motion.div>
      </div>
    </section>
  );
}
