import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { SOCIAL_LINKS, NAV_LINKS, RESUME_URL } from '../../utils/constants';
import { GrassIcon } from '../icons/MinecraftIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t-4 border-pixel-border-light dark:border-pixel-border-dark bg-pixel-card-light dark:bg-pixel-card-dark"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#hero"
              className="font-pixel text-base text-pixel-accent hover:text-pixel-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
              aria-label="Back to top"
            >
              &lt;S/&gt;
            </a>
            <p className="mt-3 text-sm text-pixel-text-light/60 dark:text-pixel-text-dark/60 leading-relaxed max-w-xs">
              Backend engineer building real-time systems, clean APIs, and scalable infrastructure.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-pixel
                               bg-mc-emerald/15 text-mc-emerald border-2 border-mc-emerald/30">
                <span className="w-1.5 h-1.5 rounded-full bg-mc-emerald animate-pulse" aria-hidden="true" />
                Open to Work
              </span>
            </div>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <h3 className="font-pixel text-[9px] text-pixel-text-light/50 dark:text-pixel-text-dark/50 uppercase mb-4 tracking-widest">
              Navigate
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70
                               hover:text-pixel-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pixel-accent"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Links */}
          <div>
            <h3 className="font-pixel text-[9px] text-pixel-text-light/50 dark:text-pixel-text-dark/50 uppercase mb-4 tracking-widest">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70
                             hover:text-pixel-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pixel-accent"
                  aria-label="GitHub profile (opens in new tab)"
                >
                  <Github className="w-4 h-4 shrink-0" aria-hidden="true" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70
                             hover:text-pixel-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pixel-accent"
                  aria-label="LinkedIn profile (opens in new tab)"
                >
                  <Linkedin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-2 text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70
                             hover:text-pixel-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pixel-accent"
                  aria-label={`Send email to ${SOCIAL_LINKS.email}`}
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={RESUME_URL ?? '#'}
                  target={RESUME_URL ? '_blank' : undefined}
                  rel={RESUME_URL ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70
                             hover:text-pixel-accent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pixel-accent"
                  aria-label="View resume (opens in new tab)"
                >
                  <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t-2 border-pixel-border-light dark:border-pixel-border-dark flex flex-col sm:flex-row items-center justify-between gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <GrassIcon className="w-5 h-5" aria-hidden="true" />
            <span className="font-pixel text-[9px] text-pixel-text-light/50 dark:text-pixel-text-dark/50">
              Shubham © {currentYear}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-pixel text-[8px] text-pixel-text-light/40 dark:text-pixel-text-dark/40"
          >
            Built with React · Vite · Tailwind
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
