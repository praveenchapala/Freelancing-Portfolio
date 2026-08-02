import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Zap, CheckCircle2, Play, GitBranch, RefreshCw, Terminal, Layers } from 'lucide-react';
import { Button } from '../common/Button';

export function HeroSection() {
  const [activeTab, setActiveTab] = useState('n8n');
  const [isRunning, setIsRunning] = useState(true);
  const [activeStep, setActiveStep] = useState(0);

  // Simulated live execution loop for interactive canvas
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2200);
    return () => clearInterval(interval);
  }, [isRunning]);

  const workflowSteps = [
    { title: 'Inbound Webhook', icon: Zap, status: 'Payload Received', time: '0ms' },
    { title: 'Claude 3.5 Schema Parser', icon: Cpu, status: 'Structured Output Extracted', time: '180ms' },
    { title: 'Autonomous Vector Agent', icon: Bot, status: 'Pinecone RAG Search', time: '320ms' },
    { title: 'Postgres & Slack Sync', icon: CheckCircle2, status: '200 OK Executed', time: '410ms' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-black text-white">
      {/* Background Lighting & Grid Grid Backdrop */}
      <div className="absolute inset-0 bg-hero-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-zinc-300">
                Available for Domestic & International Client Projects
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]"
            >
              I Build <span className="text-gradient">AI Automation</span>, n8n Workflows & Full-Stack Products.
            </motion.h1>

            {/* Subheadline Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed"
            >
              Helping startup founders and tech agencies automate 80% of repetitive operational tasks, engineer autonomous AI agents, and ship high-performance React applications.
            </motion.p>

            {/* Credibility Quick Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-zinc-400"
            >
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/80">⚡ Self-Hosted n8n</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/80">🤖 LangChain AI Agents</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/80">⚛️ React 19 & Vite</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800/80">🔌 API Middleware</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                Let's Build Together
              </Button>
              <Button
                href="#projects"
                variant="outline"
                size="lg"
                icon={Layers}
                iconPosition="left"
              >
                View Case Studies
              </Button>
            </motion.div>
          </div>

          {/* Right Interactive Architecture Canvas Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl p-5 overflow-hidden glass-panel">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <span className="text-xs font-mono text-zinc-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                    live_execution_node.py
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="flex items-center gap-1 px-2 py-1 text-[11px] font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
                  >
                    {isRunning ? <RefreshCw className="w-3 h-3 animate-spin text-emerald-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
                    <span>{isRunning ? 'RUNNING' : 'PAUSED'}</span>
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('n8n')}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                    activeTab === 'n8n' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  n8n Workflow
                </button>
                <button
                  onClick={() => setActiveTab('rag')}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                    activeTab === 'rag' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  AI Agent Chain
                </button>
              </div>

              {/* Workflow Flow Steps */}
              <div className="space-y-3">
                {workflowSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  const isCompleted = activeStep > idx;

                  return (
                    <div
                      key={step.title}
                      className={`p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                        isActive
                          ? 'bg-zinc-900 border-white/30 shadow-lg shadow-white/5 translate-x-1'
                          : isCompleted
                          ? 'bg-zinc-950/80 border-zinc-800/80 opacity-90'
                          : 'bg-zinc-950/40 border-zinc-900 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center border ${
                            isActive
                              ? 'bg-white text-black border-white'
                              : isCompleted
                              ? 'bg-zinc-800 text-emerald-400 border-zinc-700'
                              : 'bg-zinc-900 text-zinc-500 border-zinc-800'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white flex items-center gap-2">
                            <span>{step.title}</span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            )}
                          </div>
                          <div className="text-[11px] font-mono text-zinc-400">
                            {isActive ? 'Processing...' : step.status}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-mono text-zinc-400">
                          {step.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Execution Console Output Footnote */}
              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <GitBranch className="w-3.5 h-3.5" />
                  branch: main | status: 200 OK
                </span>
                <span>Latency: 410ms total</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
