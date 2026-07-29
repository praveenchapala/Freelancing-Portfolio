import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Code, Zap, Server, CheckCircle, Clock, ShieldAlert } from 'lucide-react';
import { whyMePillars } from '../../data/whyMe';
import { SectionHeader } from '../common/SectionHeader';

const pillarIcons = {
  MessageSquare: MessageSquare,
  Code: Code,
  Zap: Zap,
  Server: Server,
  CheckCircle: CheckCircle,
  Clock: Clock,
};

export function WhyMeSection() {
  return (
    <section id="why-me" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Why Founders & Agencies Work With Me"
          title="Direct Engineering Access, Zero Tech Debt"
          subtitle="Skip bloated agency fees, project manager middlemen, and broken commitments. Work directly with a senior-level engineer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMePillars.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.icon] || Code;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 group glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6 group-hover:border-zinc-500 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-900/80 flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span>Guaranteed Quality Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
