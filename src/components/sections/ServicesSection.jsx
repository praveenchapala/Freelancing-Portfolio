import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Workflow, Bot, Code2, Layers, Layout, MessageSquareCode, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { servicesData } from '../../data/services';
import { SectionHeader } from '../common/SectionHeader';

const serviceIcons = {
  Cpu: Cpu,
  Workflow: Workflow,
  Bot: Bot,
  Code2: Code2,
  Layers: Layers,
  Layout: Layout,
  MessageSquareCode: MessageSquareCode,
};

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(servicesData[0].id);

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Specialized Engineering Services"
          title="High-ROI AI Systems, n8n Workflows & Full-Stack Apps"
          subtitle="Designed to eliminate operational bottlenecks, reduce manual headcount overhead, and ship production digital products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Service Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {servicesData.map((service) => {
              const Icon = serviceIcons[service.iconName] || Cpu;
              const isSelected = selectedService === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                    isSelected
                      ? 'bg-zinc-900 border-white/40 shadow-xl shadow-white/[0.02] translate-x-1'
                      : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-white text-black border-white'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-base font-semibold transition-colors ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5 font-normal">
                      {service.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Active Service Deep-Dive Card */}
          <div className="lg:col-span-7">
            {servicesData.map((service) => {
              if (service.id !== selectedService) return null;
              const Icon = serviceIcons[service.iconName] || Cpu;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl glass-panel space-y-6"
                >
                  {/* Title Bar */}
                  <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        <span className="text-xs font-mono text-zinc-400">{service.tagline}</span>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 text-xs font-mono text-zinc-300 hover:text-white hover:underline"
                    >
                      <span>Inquire Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Problem Breakdown */}
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
                      <AlertCircle className="w-4 h-4 text-zinc-400" />
                      <span>The Business Bottleneck (Problem)</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                      {service.problem}
                    </p>
                  </div>

                  {/* Engineered Solution */}
                  <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-700/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>The Engineered Solution</span>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                      {service.solution}
                    </p>
                  </div>

                  {/* Measurable ROI & Benefits */}
                  <div>
                    <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-3">
                      Measurable Client ROI & Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-2 text-xs font-normal text-zinc-300 p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-zinc-800/80">
                    <span className="text-[11px] font-mono text-zinc-400 block mb-2">Primary Technologies Used:</span>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
