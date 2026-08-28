import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, LineChart, Cpu, BarChart3, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { key: 'all', label: 'All Disciplines' },
    { key: 'programming', label: 'Programming', icon: <Code2 className="w-4 h-4" /> },
    { key: 'dataScience', label: 'Data Science', icon: <LineChart className="w-4 h-4" /> },
    { key: 'aiDevelopment', label: 'AI-Assisted Dev', icon: <Cpu className="w-4 h-4" /> },
    { key: 'visualization', label: 'Visualization & BI', icon: <BarChart3 className="w-4 h-4" /> },
    { key: 'databasesCloud', label: 'Databases & Cloud', icon: <Database className="w-4 h-4" /> }
  ];

  const skillGroups = [
    {
      key: 'programming',
      title: 'Programming',
      icon: <Code2 className="w-5 h-5 text-[#17231A]" />,
      desc: 'Analytical programming & query syntax',
      items: skills.programming
    },
    {
      key: 'dataScience',
      title: 'Data Science',
      icon: <LineChart className="w-5 h-5 text-[#17231A]" />,
      desc: 'Extracting patterns & statistical signals',
      items: skills.dataScience
    },
    {
      key: 'aiDevelopment',
      title: 'AI-Assisted Development',
      icon: <Cpu className="w-5 h-5 text-[#17231A]" />,
      desc: 'Prompt engineering & LLM architectures',
      items: skills.aiDevelopment
    },
    {
      key: 'visualization',
      title: 'Data Visualization & BI',
      icon: <BarChart3 className="w-5 h-5 text-[#17231A]" />,
      desc: 'Interactive business intelligence & DAX',
      items: skills.visualization
    },
    {
      key: 'databasesCloud',
      title: 'Databases & Cloud',
      icon: <Database className="w-5 h-5 text-[#17231A]" />,
      desc: 'Relational storage & cloud infrastructure',
      items: skills.databasesCloud
    }
  ];

  const filteredGroups =
    activeTab === 'all' ? skillGroups : skillGroups.filter((g) => g.key === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-[#F3EBDD] border-t border-[#CBD5C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curated Taxonomy"
          title="Technical Skills"
          subtitle="Disciplined capabilities across programming, analytical statistics, generative AI engineering, and BI reporting."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === cat.key
                  ? 'bg-[#17231A] text-[#F3EBDD] shadow-sm'
                  : 'bg-[#E9E2D2] text-[#59645A] hover:text-[#17231A] border border-[#CBD5C5] hover:bg-[#FAF7EF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl bg-[#E9E2D2] border border-[#CBD5C5] p-6 sm:p-7 hover:border-[#A8C3A0] hover:shadow-[0_0_25px_rgba(200,255,61,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#CBD5C5] mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#FAF7EF] border border-[#CBD5C5] group-hover:scale-110 group-hover:bg-[#A8C3A0]/30 transition-transform">
                      {group.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#17231A]">
                        {group.title}
                      </h3>
                      <p className="text-[11px] text-[#647066] mt-0.5">
                        {group.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Individual Skill Items */}
                <div className="space-y-2.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-2xl bg-[#FAF7EF] border border-[#CBD5C5] hover:border-[#A8C3A0] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-[#17231A]">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#E9E2D2] text-[#59645A] border border-[#CBD5C5]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#59645A]">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#CBD5C5] flex items-center justify-between text-[11px] font-mono text-[#647066]">
                <span>{group.items.length} Competencies</span>
                <span className="text-[#17231A] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D] border border-[#17231A]/30"></span>
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
