import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, Lightbulb, Cpu, CheckCircle, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function DataJourney() {
  const { dataJourney } = portfolioData;
  const [activeStep, setActiveStep] = useState(3); // Default to AI stage

  const stepIcons = [
    <Database className="w-5 h-5" />,
    <Filter className="w-5 h-5" />,
    <Lightbulb className="w-5 h-5" />,
    <Cpu className="w-5 h-5" />,
    <CheckCircle className="w-5 h-5" />
  ];

  return (
    <section id="journey" className="py-24 relative bg-[#F3EBDD] border-t border-[#CBD5C5] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#A8C3A0]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Unique Visual Framework"
          title={dataJourney.title}
          subtitle={dataJourney.subtitle}
        />

        {/* Desktop Horizontal Process Line with Traveling Neon Particle */}
        <div className="relative mt-12 mb-12 hidden lg:block">
          {/* Base Connection Track */}
          <div className="absolute top-[38px] left-[5%] right-[5%] h-1 bg-[#CBD5C5] rounded-full z-0">
            {/* Animated Traveling Neon Particle */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#C8FF3D] shadow-[0_0_12px_#C8FF3D] z-10"
              animate={{
                left: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>

          {/* 5 Process Nodes */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {dataJourney.steps.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Node Circle */}
                  <div
                    className={`w-[76px] h-[76px] rounded-2xl flex items-center justify-center transition-all duration-300 border mb-4 shadow-sm ${
                      isSelected
                        ? 'bg-[#17231A] text-[#C8FF3D] border-[#C8FF3D] shadow-[0_0_20px_rgba(200,255,61,0.35)] scale-105'
                        : 'bg-[#FAF7EF] text-[#17231A] border-[#CBD5C5] group-hover:border-[#A8C3A0] group-hover:bg-[#E9E2D2]'
                    }`}
                  >
                    {stepIcons[idx]}
                  </div>

                  <span className="text-[11px] font-mono font-bold text-[#647066] mb-0.5">
                    STAGE {step.number}
                  </span>
                  <h4 className="font-display text-base font-bold text-[#17231A] mb-1">
                    {step.title}
                  </h4>
                  <span className="text-xs text-[#59645A]">
                    {step.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 mb-8">
          {dataJourney.steps.map((step, idx) => {
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#17231A] text-[#F3EBDD] border-[#C8FF3D] shadow-md'
                    : 'bg-[#FAF7EF] border-[#CBD5C5] text-[#17231A]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-[#26382B] text-[#C8FF3D]' : 'bg-[#E9E2D2] text-[#647066]'
                  }`}>
                    STEP {step.number}
                  </span>
                  <div className={`p-2 rounded-xl ${isSelected ? 'text-[#C8FF3D]' : 'text-[#17231A]'}`}>
                    {stepIcons[idx]}
                  </div>
                </div>
                <h4 className={`font-display text-lg font-bold ${isSelected ? 'text-white' : 'text-[#17231A]'}`}>
                  {step.title}
                </h4>
                <p className={`text-xs mt-1 ${isSelected ? 'text-[#C7DFC5]' : 'text-[#59645A]'}`}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Detailed Inspection Card of Selected Stage */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 rounded-3xl bg-[#FAF7EF] border border-[#CBD5C5] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#17231A] text-[#C8FF3D] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(200,255,61,0.2)]">
              {stepIcons[activeStep]}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#17231A] bg-[#A8C3A0]/40 px-2.5 py-0.5 rounded-full border border-[#CBD5C5]">
                  STEP {dataJourney.steps[activeStep].number} · {dataJourney.steps[activeStep].badge}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D] border border-[#17231A]/30"></span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#17231A] mt-1">
                {dataJourney.steps[activeStep].title} Execution Matrix
              </h3>
              <p className="text-sm text-[#59645A] mt-1.5 max-w-2xl leading-relaxed">
                {dataJourney.steps[activeStep].desc}
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-[#F3EBDD] bg-[#17231A] hover:bg-[#C8FF3D] hover:text-[#17231A] transition-all flex-shrink-0"
          >
            <span>See Project Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
