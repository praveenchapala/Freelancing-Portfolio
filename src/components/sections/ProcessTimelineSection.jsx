import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../../data/processSteps';
import { SectionHeader } from '../common/SectionHeader';
import { Clock, CheckCircle2 } from 'lucide-react';

export function ProcessTimelineSection() {
  return (
    <section id="process" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Structured Engineering Execution"
          title="7-Stage Development Blueprint"
          subtitle="From initial discovery call to production deployment and 30-day post-launch SLA support. Zero ambiguity, maximum velocity."
        />

        {/* Process Timeline Grid */}
        <div className="space-y-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 glass-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              {/* Step Number & Title */}
              <div className="flex items-start gap-5">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-600 shrink-0">
                  {step.step}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-xl font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Deliverable & Duration Pills */}
              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-zinc-800 w-full md:w-auto">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{step.deliverable}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/60 border border-zinc-800/60 text-xs font-mono text-zinc-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Est. Turnaround: {step.duration}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
