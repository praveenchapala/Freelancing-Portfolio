import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Activity, GitPullRequest, ShieldCheck, Code, CheckCircle } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa6';
import { trustMetrics } from '../../data/githubStats';

const iconMap = {
  Briefcase: Briefcase,
  Activity: Activity,
  GitPullRequest: GitPullRequest,
  ShieldCheck: ShieldCheck,
};

export function TrustMetricsSection() {
  return (
    <section className="py-20 bg-black border-y border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Counter Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 mb-16 backdrop-blur-xl">
          {trustMetrics.statsCounters.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center sm:text-left border-r border-zinc-900 last:border-r-0 pr-4"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-white tracking-tight">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-mono tracking-widest uppercase rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
            Empirical Credibility & Proof of Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Built on Daily Shipping, Internship Rigor & Open Source.
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            No fluff or unverified claims. My credibility is backed by consistent production code, internship engineering, and active GitHub contributions.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.highlights.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Code;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-4 group-hover:border-zinc-500 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Live GitHub Commitment Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800/90 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center text-white shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-semibold text-white flex items-center gap-2">
                <span>Active 180+ Day GitHub Commit Streak</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800">Verified</span>
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Over 1,420+ commits pushed across n8n automation repos, React packages, and Python AI tools in the past 12 months.
              </div>
            </div>
          </div>
          <a
            href="https://github.com/praveenchapala"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono rounded-xl bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 transition-colors whitespace-nowrap"
          >
            View GitHub Profile ↗
          </a>
        </div>

      </div>
    </section>
  );
}
