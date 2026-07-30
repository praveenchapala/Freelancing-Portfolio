import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Check, Copy, Calendar, Sparkles } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa6';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'n8n AI Workflows',
    budget: '$2,500 - $5,000',
    message: '',
  });

  function handleCopyEmail() {
    navigator.clipboard.writeText('shipwithpraveen@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

function handleSubmit(e) {
  e.preventDefault();
  setFormSubmitted(true);
}
  return (
    <section id="contact" className="py-24 bg-black relative border-t border-zinc-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          badge="High-Priority Project Inquiry"
          title="Let's Build Something Extraordinary."
          subtitle="Have an AI automation workflow, autonomous agent, or full-stack application in mind? Send a inquiry or book a direct discovery call."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Direct Connect Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 glass-panel space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">Direct Developer Contact</h3>
                <p className="text-xs text-zinc-400 font-normal leading-relaxed">
                  I typically respond within 2 to 4 hours during business days. No sales representatives—you will communicate directly with me.
                </p>
              </div>

              {/* Email Quick Copy Box */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Direct Email</div>
                    <div className="text-xs font-mono text-white truncate">shipwithpraveen@gmail.com</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-zinc-300 hover:text-white rounded-lg bg-zinc-800 border border-zinc-700 transition-colors shrink-0 text-xs font-mono flex items-center gap-1"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* WhatsApp Instant Connect */}
              <a
                href="https://wa.me/9014939196?text=Hi%20Praveen,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">Instant WhatsApp Chat</div>
                    <div className="text-xs text-zinc-400 font-mono">Quick scope sync or urgent query</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-400 group-hover:translate-x-1 transition-transform">↗</span>
              </a>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-900 flex items-center gap-3">
                <a
                  href="https://github.com/praveenchapala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/chapala-praveen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-center text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

            {/* Calendar Booking Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-white" />
                <span>Prefer a live call?</span>
              </div>
              <h4 className="text-base font-bold text-white">Book a 25-Min Technical Discovery Call</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                We will discuss your system requirements, evaluate n8n vs custom agent feasibility, and establish fixed milestone estimates.
              </p>
              <Button
                href="https://cal.com/praveen-chapala-discovery-call/25-min-technical-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                className="w-full justify-center mt-2"
              >
                Schedule Discovery Call 📅
              </Button>
            </div>

          </div>

          {/* Right Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 glass-panel shadow-2xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    Thank you for reaching out. I have received your project details and will reply via email within 2 to 4 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Uday Chandra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@startup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Project Type Select */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Primary Capability Needed</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors"
                      >
                        <option value="n8n AI Workflows">n8n Workflow Automation</option>
                        <option value="Autonomous AI Agent">Autonomous AI Agents</option>
                        <option value="Full Stack React App">Full Stack Web Application</option>
                        <option value="API Integration Middleware">API Integration & Webhooks</option>
                        <option value="High-Converting Landing Page">Modern Landing Page</option>
                        <option value="Knowledge Base Chatbot">RAG Knowledge Base Chatbot</option>
                      </select>
                    </div>

                    {/* Budget Bracket */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300">Estimated Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors"
                      >
                        <option value="<$1,500">Under $1,500</option>
                        <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000+">$5,000+ (Custom Scope)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300">Project Overview & Operational Goals *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project requirements, current bottlenecks, target deliverables, or timeline constraints..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    className="w-full justify-center"
                  >
                    Submit Project Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
