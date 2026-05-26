import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../utils/constants';
import { PickaxeIcon } from '../icons/MinecraftIcons';

const categoryAccentColors = {
  'mc-gold': 'border-mc-gold/40 bg-mc-gold/5',
  'mc-grass': 'border-mc-grass/40 bg-mc-grass/5',
  'mc-diamond': 'border-mc-diamond/40 bg-mc-diamond/5',
  'mc-oak': 'border-mc-oak/40 bg-mc-oak/5',
  'mc-obsidian': 'border-pixel-border-light dark:border-pixel-border-dark bg-pixel-bg-light/50 dark:bg-pixel-bg-dark/50',
  'mc-lapis': 'border-mc-lapis/40 bg-mc-lapis/5',
};

const categoryTextColors = {
  'mc-gold': 'text-mc-gold',
  'mc-grass': 'text-mc-grass',
  'mc-diamond': 'text-mc-diamond',
  'mc-oak': 'text-mc-oak',
  'mc-obsidian': 'text-pixel-text-light/80 dark:text-pixel-text-dark/80',
  'mc-lapis': 'text-mc-lapis',
};

function CategoryCard({ category, index }) {
  const accentBorder = categoryAccentColors[category.color] ?? '';
  const textColor = categoryTextColors[category.color] ?? 'text-pixel-accent';
  const Icon = category.iconComponent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="pixel-card p-5 h-full flex flex-col"
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-pixel-border-light dark:border-pixel-border-dark shrink-0">
        <div className={`inventory-slot w-9 h-9 shrink-0 ${accentBorder}`} aria-hidden="true">
          <Icon className="w-4 h-4" />
        </div>
        <h3 className={`font-pixel text-[9px] ${textColor}`}>{category.name}</h3>
      </div>

      {/* Skill pills — flex-1 so the pill area grows and all cards fill height equally */}
      <ul className="flex flex-wrap gap-1.5 flex-1 content-start" aria-label={`${category.name} skills`}>
        {category.skills.map((skill) => (
          <li key={skill}>
            <motion.span
              className={`block px-2.5 py-1 text-xs border-2 ${accentBorder}
                          text-pixel-text-light/80 dark:text-pixel-text-dark/80
                          hover:border-pixel-accent hover:text-pixel-accent
                          transition-colors cursor-default`}
              whileHover={{ scale: 1.04 }}
            >
              {skill}
            </motion.span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Skills() {
  const totalSkills = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden"
      aria-label="Skills"
    >
      <div className="absolute inset-0 bg-pixel-pattern dark:bg-pixel-pattern-dark opacity-30" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <PickaxeIcon className="w-8 h-8" aria-hidden="true" />
            <h2 className="section-title mb-0">Skills</h2>
            <PickaxeIcon className="w-8 h-8" aria-hidden="true" />
          </div>
          <p className="text-pixel-text-light/65 dark:text-pixel-text-dark/65 max-w-xl mx-auto">
            Tools, languages, and systems I work with day to day.
          </p>
        </motion.div>

        {/* Category grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
          role="list"
          aria-label="Skill categories"
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={category.name} role="listitem" className="h-full">
              <CategoryCard category={category} index={index} />
            </div>
          ))}
        </div>

        {/* Inventory footer flavour */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <span className="font-pixel text-[8px] text-pixel-text-light/40 dark:text-pixel-text-dark/40">
            {totalSkills} technologies · Level 99
          </span>
        </motion.div>
      </div>
    </section>
  );
}
