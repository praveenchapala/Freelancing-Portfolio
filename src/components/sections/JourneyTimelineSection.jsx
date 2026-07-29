import React from 'react';
import { motion } from 'framer-motion';
import { journeyTimeline } from '../../data/journey';
import { SectionHeader } from '../common/SectionHeader';
import { Calendar, Briefcase, GitPullRequest, GraduationCap, Award } from 'lucide-react';

const categoryIcons = {
  'Freelance & Contracting': Briefcase,
  'Industry Experience': Award,
  'Open Source & Projects': GitPullRequest,
  'Learning Journey': GraduationCap,
};

export function JourneyTimelineSection() {
  return (
    <section id="journey" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Track Record & Growth Velocity"
          title="Open Source & Experience Journey"
          subtitle="A timeline of software engineering internships, open-source pull requests, n8n workflow milestones, and daily commit consistency."
        />

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
          {journeyTimeline.map((item, idx) => {
            const Icon = categoryIcons[item.category] || Briefcase;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-zinc-600 flex items-center justify-center group-hover:border-white transition-colors">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Content Box */}
                <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 glass-card space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-900 text-zinc-300 border border-zinc-800 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year} | {item.quarter}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <Icon className="w-3.5 h-3.5" />
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 text-xs font-mono rounded bg-zinc-900/60 text-zinc-300 border border-zinc-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
