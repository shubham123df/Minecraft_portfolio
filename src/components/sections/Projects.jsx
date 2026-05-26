import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { FEATURED_PROJECTS, SOCIAL_LINKS } from '../../utils/constants';
import { DiamondIcon, GrassIcon } from '../icons/MinecraftIcons';

function ProjectIcon({ iconSrc, name, size = 'lg' }) {
  const dim = size === 'lg' ? 'w-20 h-20 md:w-24 md:h-24' : 'w-10 h-10';
  const imgDim = size === 'lg' ? 'w-14 h-14 md:w-16 md:h-16' : 'w-6 h-6';

  return (
    <div className={`inventory-slot ${dim} shrink-0`} aria-hidden="true">
      {iconSrc ? (
        <img
          src={iconSrc}
          alt=""
          className={`${imgDim} object-contain`}
          style={{ imageRendering: 'pixelated' }}
        />
      ) : (
        <GrassIcon className={size === 'lg' ? 'w-10 h-10 md:w-12 md:h-12' : 'w-5 h-5'} />
      )}
    </div>
  );
}

function FeaturedProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="pixel-card p-6 md:p-8 relative overflow-hidden"
      aria-label={`Featured project: ${project.name}`}
    >
      <div className="absolute top-0 right-0 bg-mc-gold text-pixel-bg-dark font-pixel text-[8px] px-3 py-1">
        ⭐ FEATURED
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                '0 0 16px rgba(252,220,0,0.25)',
                '0 0 28px rgba(252,220,0,0.45)',
                '0 0 16px rgba(252,220,0,0.25)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <ProjectIcon iconSrc={project.iconSrc} name={project.name} size="lg" />
          </motion.div>
        </div>

        <div className="flex-grow">
          <h3 className="font-pixel text-sm md:text-base mb-3 text-mc-gold leading-relaxed">
            {project.name}
          </h3>

          <p className="text-sm text-pixel-text-light/75 dark:text-pixel-text-dark/75 mb-5 leading-relaxed">
            {project.description}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5" aria-label="Key features">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="w-2 h-2 bg-pixel-accent mt-1.5 shrink-0" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-5" aria-label="Tech stack">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-pixel-accent/10 border-2 border-pixel-accent/30 text-pixel-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn text-xs flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              Source Code
            </motion.a>
            {project.live ? (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-secondary text-xs flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View ${project.name} live demo (opens in new tab)`}
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                Live Demo
              </motion.a>
            ) : (
              <span className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-pixel
                               border-2 border-pixel-border-light dark:border-pixel-border-dark
                               text-pixel-text-light/50 dark:text-pixel-text-dark/50">
                Source Only
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {

  return (
    <section id="projects" className="py-20 md:py-32 relative" aria-label="Projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <DiamondIcon className="w-8 h-8" aria-hidden="true" />
            <h2 className="section-title mb-0">Projects</h2>
            <DiamondIcon className="w-8 h-8" aria-hidden="true" />
          </div>
          <p className="text-pixel-text-light/65 dark:text-pixel-text-dark/65 max-w-2xl mx-auto">
            Things I've built, shipped, and learned from. Each project is a snapshot of a problem worth solving.
          </p>
        </motion.div>

        {/* Hero Featured Projects */}
        <div className="space-y-6 mb-16" aria-label="Featured projects">
          {FEATURED_PROJECTS.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-pixel-accent
                       text-pixel-accent hover:bg-pixel-accent hover:text-white
                       font-pixel text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
            aria-label="View all repositories on GitHub (opens in new tab)"
          >
            View All on GitHub
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
