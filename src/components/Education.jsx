import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-[#F3EBDD] border-t border-[#CBD5C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Training"
          title="Education"
          subtitle="Formal university education in Artificial Intelligence and Data Science, plus foundational science schooling."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#E9E2D2] border border-[#CBD5C5] p-6 sm:p-8 hover:border-[#A8C3A0] hover:shadow-[0_0_25px_rgba(200,255,61,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#CBD5C5] mb-5">
                  <div className="p-3 rounded-2xl bg-[#FAF7EF] border border-[#CBD5C5] group-hover:bg-[#A8C3A0]/30 transition-colors">
                    <GraduationCap className="w-6 h-6 text-[#17231A]" />
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FAF7EF] text-[#17231A] border border-[#CBD5C5]">
                      {edu.grade}
                    </span>
                    <div className="text-[11px] text-[#647066] mt-1 font-mono">{edu.status}</div>
                  </div>
                </div>

                {/* Degree & Field */}
                <h3 className="font-display text-xl font-bold text-[#17231A] mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-[#59645A] mb-4">
                  {edu.field}
                </div>

                {/* Institution & Location */}
                <div className="space-y-1.5 text-xs text-[#59645A] mb-6 font-mono">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#647066]" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#17231A]" />
                    <span className="text-[#17231A] font-semibold">{edu.duration}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-[#CBD5C5]">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#17231A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#17231A] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CBD5C5] text-[11px] font-mono text-[#647066]">
                Official Academic Credential
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
