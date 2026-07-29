import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Card({
  children,
  className = '',
  hoverEffect = true,
  spotlight = true,
  onClick,
  ...props
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    if (!spotlight) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 ${
        hoverEffect ? 'hover:border-zinc-700 hover:shadow-2xl hover:shadow-white/[0.03]' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
