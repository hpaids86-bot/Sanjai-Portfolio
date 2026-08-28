import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-[#FAF7EF] border-t border-[#CBD5C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Applied Background"
          title="Work Experience"
          subtitle="Practical industry internship focusing on data science workflows, exploratory evaluation, and predictive modeling."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-[#A8C3A0] pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
              >
                {/* Neon-lime timeline indicator dot */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-2 w-6 h-6 rounded-full bg-[#FAF7EF] border-2 border-[#17231A] flex items-center justify-center shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C8FF3D] shadow-[0_0_8px_#C8FF3D]"></div>
                </div>

                {/* Experience Card */}
                <div className="rounded-3xl bg-[#E9E2D2] border border-[#CBD5C5] p-6 sm:p-8 hover:border-[#A8C3A0] hover:shadow-[0_0_25px_rgba(200,255,61,0.15)] transition-all duration-300 shadow-sm">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#CBD5C5] mb-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FAF7EF] text-[#17231A] border border-[#CBD5C5]">
                          {exp.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#17231A] mt-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#59645A] font-semibold mt-0.5">
                        <Building2 className="w-4 h-4 text-[#17231A]" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#17231A] bg-[#FAF7EF] px-3 py-1.5 rounded-xl border border-[#CBD5C5] self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-[#59645A]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[#59645A] leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Learning & Work Areas */}
                  <div className="space-y-2.5 mb-6">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-[#647066] font-semibold">
                      Learning & Work Areas:
                    </h4>
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17231A]">
                        <CheckCircle2 className="w-4 h-4 text-[#17231A] flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-[#CBD5C5] flex flex-wrap gap-2">
                    {exp.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#FAF7EF] text-[#17231A] border border-[#CBD5C5]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
