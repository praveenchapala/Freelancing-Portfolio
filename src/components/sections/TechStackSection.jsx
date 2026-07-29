import React from 'react';
import { motion } from 'framer-motion';
import { techStackCategories } from '../../data/techStack';
import { SectionHeader } from '../common/SectionHeader';
import { Atom, Zap, Palette, Code, Sparkles, FileCode, Workflow, Bot, Brain, Database, Terminal, Server, Radio, Cpu, Layers, GitBranch, Container, Globe, CheckCircle2, TerminalSquare } from 'lucide-react';

const iconMap = {
  Atom, Zap, Palette, Code, Sparkles, FileCode, Workflow, Bot, Brain, Database, Terminal, Server, Radio, Cpu, Layers, GitBranch, Container, Globe, CheckCircle2, TerminalSquare
};

export function TechStackSection() {
  return (
    <section id="stack" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Production Tooling & Skill Matrix"
          title="Battle-Tested Modern Tech Stack"
          subtitle="Curated suite of languages, automation platforms, AI frameworks, and cloud tooling used to build scalable digital products."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStackCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 glass-panel space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white">{cat.category}</h3>
                <p className="text-xs text-zinc-400 mt-1 font-normal">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-zinc-300" />
                          <span className="text-sm font-semibold text-white">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          {skill.level}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400">
                        {skill.highlight}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
