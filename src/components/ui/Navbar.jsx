import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { NAV_LINKS, RESUME_URL } from '../../utils/constants';
import { useActiveSection } from '../../hooks';

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

export function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-pixel-bg-light/95 dark:bg-pixel-bg-dark/95 backdrop-blur-sm shadow-pixel border-b-2 border-pixel-border-light dark:border-pixel-border-dark'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#hero"
            className="font-pixel text-sm text-pixel-accent hover:text-pixel-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent focus-visible:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            &lt;S/&gt;
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, index) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent ${
                    isActive
                      ? 'text-pixel-accent'
                      : 'text-pixel-text-light/70 dark:text-pixel-text-dark/70 hover:text-pixel-accent'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-pixel-accent"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            <a
              href={RESUME_URL ?? '#'}
              target={RESUME_URL ? '_blank' : undefined}
              rel={RESUME_URL ? 'noopener noreferrer' : undefined}
              className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium
                         border-2 border-pixel-accent text-pixel-accent hover:bg-pixel-accent hover:text-white
                         transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
              aria-label="View resume (opens in new tab)"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Resume
            </a>

            <motion.button
              onClick={toggleTheme}
              className="ml-2 p-2 bg-pixel-card-light dark:bg-pixel-card-dark
                         border-2 border-pixel-border-light dark:border-pixel-border-dark
                         hover:border-pixel-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-mc-gold" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-mc-lapis" aria-hidden="true" />
              )}
            </motion.button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={RESUME_URL ?? '#'}
              target={RESUME_URL ? '_blank' : undefined}
              rel={RESUME_URL ? 'noopener noreferrer' : undefined}
              className="p-2 text-pixel-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
              aria-label="View resume"
            >
              <FileText className="w-5 h-5" aria-hidden="true" />
            </a>

            <motion.button
              onClick={toggleTheme}
              className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
              whileTap={{ scale: 0.9 }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-mc-gold" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5 text-mc-lapis" aria-hidden="true" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-pixel-card-light dark:bg-pixel-card-dark
                       border-t-4 border-pixel-border-light dark:border-pixel-border-dark"
          >
            <nav aria-label="Mobile navigation">
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map((link, index) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className={`flex items-center py-2.5 px-4 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-pixel-accent border-l-4 border-pixel-accent bg-pixel-accent/5'
                          : 'hover:bg-pixel-accent/10 hover:text-pixel-accent border-l-4 border-transparent'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={closeMobile}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
