import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Cpu, CheckCircle, ArrowRight, Sparkles, Network, Filter, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function DataPipeline() {
  const { pipeline } = portfolioData;
  const [activeStage, setActiveStage] = useState(2); // default AI stage

  const stageIcons = [
    <Database className="w-5 h-5" />,
    <Filter className="w-5 h-5" />,
    <Cpu className="w-5 h-5" />,
    <Zap className="w-5 h-5" />
  ];

  return (
    <section id="pipeline" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="End-to-End Methodology"
          title={pipeline.title}
          subtitle={pipeline.subtitle}
        />

        {/* Interactive Pipeline Stages Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative mt-12">
          {pipeline.stages.map((stage, idx) => {
            const isSelected = activeStage === idx;

            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStage(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-[#121212] border-indigo-500/50 shadow-xl shadow-indigo-500/10'
                    : 'bg-[#0B0B0B] border-white/[0.06] hover:border-white/[0.15] hover:bg-[#101010]'
                }`}
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs px-2.5 py-1 rounded-md ${
                    isSelected ? 'bg-indigo-500/20 text-indigo-300 font-semibold' : 'bg-white/[0.04] text-text-muted'
                  }`}>
                    STAGE {stage.step}
                  </span>
                  <div className={`p-2 rounded-lg ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-[#161616] text-text-secondary'
                  }`}>
                    {stageIcons[idx]}
                  </div>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 mb-1">
                  {stage.tag}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {stage.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {stage.desc}
                </p>

                {/* Bottom Active Indicator bar */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-text-muted">
                    {isSelected ? 'Active Step' : 'Click to inspect'}
                  </span>
                  {idx < pipeline.stages.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted hidden lg:block" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Stage Detail Insight Bar */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-8 rounded-2xl bg-[#0F0F0F] border border-white/[0.08] p-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-600/30">
              {stageIcons[activeStage]}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-indigo-400 font-semibold">
                  STEP {pipeline.stages[activeStage].step}: {pipeline.stages[activeStage].tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <h4 className="text-base font-semibold text-white mt-0.5">
                {pipeline.stages[activeStage].title} Execution Framework
              </h4>
              <p className="text-xs text-text-secondary mt-1">
                {pipeline.stages[activeStage].desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-[#1A1A1A] hover:bg-[#222222] border border-white/[0.1] transition-colors"
            >
              <span>See in Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
