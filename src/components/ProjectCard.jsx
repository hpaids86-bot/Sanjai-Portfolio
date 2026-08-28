import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, ShieldAlert, Activity, TrendingUp, BarChart2, Sparkles, PieChart } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-3xl bg-[#26382B] border border-[#C8FF3D]/15 p-6 sm:p-8 hover:border-[#C8FF3D]/40 hover:shadow-[0_0_30px_rgba(200,255,61,0.15)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left / Info Column */}
        <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
          <div>
            {/* Header: Number & Category */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-[#17231A] bg-[#C8FF3D] px-3 py-1 rounded-full shadow-[0_0_10px_rgba(200,255,61,0.4)]">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#C7DFC5]">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F3EBDD] tracking-tight mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#C7DFC5] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-2.5 mb-6">
              {project.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F3EBDD]">
                  <CheckCircle2 className="w-4 h-4 text-[#C8FF3D] flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#17231A] text-[#A8C3A0] border border-[#A8C3A0]/25"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          <div className="flex items-center flex-wrap gap-3 pt-4 border-t border-white/[0.08]">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#17231A] bg-[#C8FF3D] hover:bg-[#39FF88] shadow-[0_0_20px_rgba(200,255,61,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>VIEW LIVE PROJECT →</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#17231A] bg-[#A8C3A0]">
                <BarChart2 className="w-3.5 h-3.5" />
                {project.badgeText || "Power BI Analytics Project"}
              </span>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium text-[#F3EBDD] bg-[#17231A] hover:bg-[#1E2E21] border border-[#CBD5C5]/20 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Right / Visual Mockup Column */}
        <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
          {project.visualType === 'prijsm' ? (
            /* PRIJSM Conceptual Predictive Dashboard Visual */
            <div className="rounded-2xl bg-[#17231A] border border-[#C8FF3D]/20 p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C8FF3D]" />
                  <span className="font-mono text-xs text-[#A8C3A0] ml-1">prijsm_v5_inference_engine.py</span>
                </div>
                <span className="text-[10px] font-mono text-[#17231A] bg-[#C8FF3D] px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> REAL-TIME SCORING
                </span>
              </div>

              {/* Telemetry Metric Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#26382B] border border-[#C8FF3D]/15">
                  <div className="flex items-center justify-between text-[#C7DFC5] text-[11px] font-mono mb-1">
                    <span>Customer Return Risk</span>
                    <ShieldAlert className="w-3.5 h-3.5 text-[#C8FF3D]" />
                  </div>
                  <div className="font-display text-2xl font-bold text-[#F3EBDD]">18.4%</div>
                  <div className="text-[10px] text-[#39FF88] mt-1 flex items-center gap-1">
                    <TrendingUp className="w-2.5 h-2.5" /> Low Anomaly Profile
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#26382B] border border-[#C8FF3D]/15">
                  <div className="flex items-center justify-between text-[#C7DFC5] text-[11px] font-mono mb-1">
                    <span>Inference Speed</span>
                    <Activity className="w-3.5 h-3.5 text-[#A8C3A0]" />
                  </div>
                  <div className="font-display text-2xl font-bold text-[#F3EBDD]">42 ms</div>
                  <div className="text-[10px] text-[#A8C3A0] mt-1">Real-Time Scoring</div>
                </div>
              </div>

              {/* Visual simulated scoring chart */}
              <div className="p-4 rounded-xl bg-[#26382B] border border-[#C8FF3D]/15 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#F3EBDD] font-medium">Return Risk Probability Distribution</span>
                  <span className="font-mono text-[10px] text-[#A8C3A0]">Model V5.2</span>
                </div>
                <div className="flex items-end gap-1.5 h-16 pt-2">
                  {[35, 45, 60, 80, 50, 65, 40, 90, 75, 55, 30, 48].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-[#17231A] to-[#A8C3A0] rounded-t hover:to-[#C8FF3D] transition-colors"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[9px] font-mono text-[#A8C3A0] pt-1">
                  <span>Batch Ingestion</span>
                  <span>Feature Extraction</span>
                  <span>Scored Output</span>
                </div>
              </div>

              <div className="text-[11px] text-center text-[#A8C3A0] font-mono pt-1">
                Conceptual visual representation of PRIJSM predictive return risk scoring interface
              </div>
            </div>
          ) : (
            /* Starbucks Power BI Conceptual Analytics Dashboard Visual */
            <div className="rounded-2xl bg-[#17231A] border border-[#A8C3A0]/30 p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#A8C3A0]" />
                  <span className="font-mono text-xs text-[#A8C3A0] ml-1">starbucks_satisfaction_bi.pbix</span>
                </div>
                <span className="text-[10px] font-mono text-[#17231A] bg-[#A8C3A0] px-2 py-0.5 rounded font-bold flex items-center gap-1">
                  <BarChart2 className="w-3 h-3" /> POWER BI MODEL
                </span>
              </div>

              {/* Power BI KPI Metrics */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-[#26382B] border border-[#A8C3A0]/20 text-center">
                  <div className="text-[10px] font-mono text-[#A8C3A0]">Satisfaction</div>
                  <div className="font-display text-lg font-bold text-[#F3EBDD]">4.2 / 5</div>
                  <div className="text-[9px] text-[#39FF88]">High Index</div>
                </div>
                <div className="p-3 rounded-xl bg-[#26382B] border border-[#A8C3A0]/20 text-center">
                  <div className="text-[10px] font-mono text-[#A8C3A0]">Loyalty Rate</div>
                  <div className="font-display text-lg font-bold text-[#C8FF3D]">76.8%</div>
                  <div className="text-[9px] text-[#C7DFC5]">Repeat Cohort</div>
                </div>
                <div className="p-3 rounded-xl bg-[#26382B] border border-[#A8C3A0]/20 text-center">
                  <div className="text-[10px] font-mono text-[#A8C3A0]">Purchase Freq</div>
                  <div className="font-display text-lg font-bold text-[#F3EBDD]">3.4x / wk</div>
                  <div className="text-[9px] text-[#A8C3A0]">Core Regulars</div>
                </div>
              </div>

              {/* Power BI Conceptual Charts */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#26382B] border border-[#A8C3A0]/20 space-y-2">
                  <div className="text-[11px] font-semibold text-[#F3EBDD]">Customer Retention</div>
                  <div className="space-y-1.5">
                    <div>
                      <div className="flex justify-between text-[10px] text-[#C7DFC5] mb-0.5">
                        <span>Brand Promoters</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full bg-[#17231A] h-1.5 rounded-full overflow-hidden">
                        <div className="w-[68%] h-full bg-[#39FF88] rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-[#C7DFC5] mb-0.5">
                        <span>Passive Visitors</span>
                        <span>22%</span>
                      </div>
                      <div className="w-full bg-[#17231A] h-1.5 rounded-full overflow-hidden">
                        <div className="w-[22%] h-full bg-[#C8FF3D] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#26382B] border border-[#A8C3A0]/20 flex flex-col justify-between">
                  <div className="text-[11px] font-semibold text-[#F3EBDD]">Spending Patterns</div>
                  <div className="flex items-end gap-2 h-10 pt-1">
                    <div className="flex-1 bg-[#A8C3A0] rounded-t h-[40%]" />
                    <div className="flex-1 bg-[#A8C3A0] rounded-t h-[75%]" />
                    <div className="flex-1 bg-[#C8FF3D] rounded-t h-[95%]" />
                    <div className="flex-1 bg-[#A8C3A0] rounded-t h-[60%]" />
                  </div>
                  <div className="text-[9px] font-mono text-[#A8C3A0] text-center pt-1">
                    Beverage vs Food vs Merch
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-center text-[#A8C3A0] font-mono pt-1">
                Conceptual visual representation of Starbucks Power BI customer survey dashboard
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
