import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2, Sparkles, Brain, Cpu, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function About() {
  const { about } = portfolioData;

  const statIcons = [
    <GraduationCap className="w-5 h-5 text-[#17231A]" />,
    <Award className="w-5 h-5 text-[#17231A]" />,
    <Calendar className="w-5 h-5 text-[#17231A]" />
  ];

  return (
    <section id="about" className="py-24 relative bg-[#FAF7EF] border-t border-[#CBD5C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Editorial Biography"
          title={about.title}
          subtitle="A disciplined foundation in Artificial Intelligence, predictive data systems, and analytical architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative & Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#17231A] leading-snug">
              {about.headline}
            </h3>

            <div className="space-y-4 text-[#59645A] text-base leading-relaxed">
              {about.bio.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Competencies Tags */}
            <div className="pt-4">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#647066] mb-3">
                Key Technical Disciplines:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {about.focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#E9E2D2] border border-[#CBD5C5] text-xs font-medium text-[#17231A] hover:border-[#A8C3A0] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D] border border-[#17231A]/30"></span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Three Large Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="bg-[#E9E2D2] border border-[#CBD5C5] rounded-3xl p-6 sm:p-7 space-y-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#CBD5C5]">
                <h3 className="font-display text-sm font-bold text-[#17231A] uppercase tracking-wider">
                  Verified Academic Metrics
                </h3>
                <span className="text-[11px] font-mono text-[#17231A] bg-[#A8C3A0]/40 px-2.5 py-0.5 rounded-full border border-[#CBD5C5]">
                  Official
                </span>
              </div>

              <div className="space-y-4">
                {about.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAF7EF] border border-[#CBD5C5] hover:border-[#A8C3A0] hover:shadow-[0_0_20px_rgba(200,255,61,0.18)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-xl bg-[#E9E2D2] border border-[#CBD5C5] group-hover:scale-105 transition-transform">
                        {statIcons[idx]}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#59645A]">{stat.label}</div>
                        <div className="text-[11px] text-[#647066]">{stat.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-2xl font-bold text-[#17231A]">{stat.value}</span>
                      {stat.unit && (
                        <span className="text-xs text-[#59645A] ml-1 font-mono">{stat.unit}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-xs text-[#647066] font-mono">
                B.Tech in Artificial Intelligence & Data Science (2023 - 2027)
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
