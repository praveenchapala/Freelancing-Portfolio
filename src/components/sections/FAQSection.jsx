import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../../data/faq';
import { SectionHeader } from '../common/SectionHeader';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggleFAQ(idx) {
    setOpenIndex(openIndex === idx ? -1 : idx);
  }

  return (
    <section id="faq" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Logistics, Scope & Pricing Clarification"
          subtitle="Everything you need to know about starting a project, IP ownership, async communication, and post-launch support."
        />

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-zinc-400 shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-white bg-zinc-800' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 pt-0 text-sm text-zinc-400 leading-relaxed font-normal border-t border-zinc-900/60"
                    >
                      <div className="pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
