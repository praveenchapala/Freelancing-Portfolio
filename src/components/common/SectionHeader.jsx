import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClasses[align]} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-mono tracking-widest uppercase rounded-full bg-zinc-900/90 text-zinc-400 border border-zinc-800">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
          {badge}
        </span>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
