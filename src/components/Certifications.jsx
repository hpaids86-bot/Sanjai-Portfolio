import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative bg-[#FAF7EF] border-t border-[#CBD5C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications"
          subtitle="Specialized domain accreditations from recognized enterprise and national learning platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#E9E2D2] border border-[#CBD5C5] p-6 sm:p-7 hover:border-[#A8C3A0] hover:shadow-[0_0_25px_rgba(200,255,61,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm relative overflow-hidden"
            >
              {/* Subtle hover neon bottom indicator bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C8FF3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#CBD5C5] mb-4">
                  <div className="p-3 rounded-2xl bg-[#FAF7EF] border border-[#CBD5C5] group-hover:bg-[#A8C3A0]/30 transition-colors">
                    <Award className="w-5 h-5 text-[#17231A]" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#17231A] bg-[#FAF7EF] px-2.5 py-0.5 rounded-full border border-[#CBD5C5]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#17231A]" /> Verified
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#59645A] uppercase tracking-wider mb-1">
                  {cert.category}
                </div>

                <h3 className="font-display text-lg font-bold text-[#17231A] mb-2 leading-snug">
                  {cert.title}
                </h3>

                <div className="text-xs font-semibold text-[#59645A] mb-3 font-mono">
                  Provider: <span className="text-[#17231A] font-bold">{cert.issuer}</span>
                </div>

                <p className="text-xs text-[#59645A] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#CBD5C5] flex items-center justify-between text-[11px] font-mono text-[#647066]">
                <span>{cert.issuer} Curriculum</span>
                <span className="text-[#17231A] font-semibold">Official Coursework</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
