import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ badge, title, subtitle, align = 'center', dark = false }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-16 md:mb-20 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
            dark
              ? 'bg-[#26382B] text-[#C8FF3D] border border-[#C8FF3D]/20'
              : 'bg-[#E9E2D2] text-[#17231A] border border-[#CBD5C5]'
          } ${isCenter ? 'mx-auto' : ''}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D] shadow-[0_0_8px_#C8FF3D] animate-pulse"></span>
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
          dark ? 'text-[#F3EBDD]' : 'text-[#17231A]'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-[#C7DFC5]' : 'text-[#59645A]'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
