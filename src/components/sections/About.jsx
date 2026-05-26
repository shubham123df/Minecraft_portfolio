import React from 'react';
import { motion } from 'framer-motion';
import { BookIcon, HeartIcon, DiamondIcon } from '../icons/MinecraftIcons';

const highlights = [
  {
    icon: 'diamond',
    title: 'Systems Builder',
    description:
      'I design event-driven architectures and low-latency systems — from WebSocket game engines to API services that need to stay correct under load.',
  },
  {
    icon: 'book',
    title: 'API Design',
    description:
      'Contract-first thinking, sensible versioning, and developer experience. APIs should be obvious to use and hard to misuse.',
  },
  {
    icon: 'heart',
    title: 'Reliability First',
    description:
      'Load tests, graceful degradation, and observability are part of the build — not an afterthought. Uptime is a feature.',
  },
];

const stats = [
  { label: 'Backend Focus', detail: 'Node.js · Go · MongoDB' },
  { label: 'Real-time Systems', detail: 'WebSockets' },
  { label: 'Production Mindset', detail: 'Docker · CI/CD · Monitoring' },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative" aria-label="About me">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookIcon className="w-8 h-8" aria-hidden="true" />
            <h2 className="section-title mb-0">About Me</h2>
            <BookIcon className="w-8 h-8" aria-hidden="true" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pixel-card p-6 md:p-10 mb-12"
        >
          <div className="space-y-5">
            <p className="text-base md:text-lg leading-relaxed text-pixel-text-light/85 dark:text-pixel-text-dark/85">
              I'm <span className="text-pixel-accent font-semibold">Shubham Kumar Gupta</span>, a backend-focused software engineer who gets obsessive about system correctness, low-latency design, and clean API contracts.
            </p>

            <p className="leading-relaxed text-pixel-text-light/75 dark:text-pixel-text-dark/75">
              I've built real-time multiplayer systems, event-driven workers, and RESTful services that run in production. I'm drawn to problems where milliseconds matter and correctness is non-negotiable — the kind of constraints that force you to think carefully about data flow, failure modes, and consistency guarantees.
            </p>

            <p className="leading-relaxed text-pixel-text-light/75 dark:text-pixel-text-dark/75">
              When I'm not designing service boundaries, I'm exploring distributed systems literature, tinkering with open-source tooling, or building side projects that scratch a genuine technical itch.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t-4 border-pixel-border-light dark:border-pixel-border-dark"
            aria-label="Focus areas"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-pixel text-[9px] text-pixel-accent mb-1 leading-relaxed">
                  {stat.label}
                </div>
                <div className="text-xs text-pixel-text-light/55 dark:text-pixel-text-dark/55">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Engineering focus areas"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="pixel-card p-6 text-center"
            >
              <div className="inventory-slot mx-auto mb-4" aria-hidden="true">
                {item.icon === 'book' && <BookIcon className="w-8 h-8" />}
                {item.icon === 'heart' && <HeartIcon className="w-8 h-8" />}
                {item.icon === 'diamond' && <DiamondIcon className="w-8 h-8" />}
              </div>
              <h3 className="font-pixel text-[9px] text-pixel-accent mb-3 leading-relaxed">
                {item.title}
              </h3>
              <p className="text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <blockquote className="pixel-card p-6 inline-block max-w-lg">
            <p className="font-pixel text-[9px] text-pixel-accent italic leading-relaxed">
              "Good code is its own best documentation."
            </p>
            <figcaption className="mt-3 text-sm text-pixel-text-light/50 dark:text-pixel-text-dark/50">
              — Steve McConnell
            </figcaption>
          </blockquote>
        </motion.figure>
      </div>
    </section>
  );
}
