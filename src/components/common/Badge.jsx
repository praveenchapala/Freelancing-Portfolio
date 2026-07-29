import React from 'react';

export function Badge({ children, variant = 'default', className = '', icon: Icon }) {
  const variants = {
    default: 'bg-zinc-900/80 text-zinc-300 border-zinc-800',
    outline: 'bg-transparent text-zinc-400 border-zinc-700/60',
    glow: 'bg-zinc-900 text-white border-zinc-700 shadow-[0_0_12px_rgba(255,255,255,0.08)]',
    success: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60',
    accent: 'bg-zinc-800 text-zinc-200 border-zinc-700',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-md transition-colors ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
}
