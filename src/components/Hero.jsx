import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone, Sparkles, Cpu, Database, Network, LineChart, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  const handleResumeClick = () => {
    fetch('/resume.pdf', { method: 'HEAD' })
      .then((res) => {
        if (!res.ok) {
          console.info('Place resume.pdf in public/resume.pdf.');
        }
      })
      .catch(() => {});
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#F3EBDD] subtle-organic-grid"
    >
      {/* Subtle Sage / Mint Ambient Blurs */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#A8C3A0]/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-[#C7DFC5]/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Label Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#CBD5C5] bg-[#FAF7EF] shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#C8FF3D] border border-[#17231A]/40 shadow-[0_0_8px_#C8FF3D] animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#17231A] font-mono">
                {personal.badge}
              </span>
            </motion.div>

            {/* Main Heading (Space Grotesk 72-96px) */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight text-[#17231A] leading-[1.04]"
            >
              Hi, I'm <span className="text-[#17231A] underline decoration-[#A8C3A0] decoration-wavy decoration-2 underline-offset-8">{personal.name}.</span>
            </motion.h1>

            {/* Sub-statement */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl sm:text-2xl font-medium text-[#17231A] leading-snug"
            >
              {personal.heroHeading}
            </motion.p>

            {/* Resume-Accurate Summary Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg text-[#59645A] max-w-xl leading-relaxed"
            >
              {personal.heroDescription}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#F3EBDD] bg-[#17231A] hover:bg-[#C8FF3D] hover:text-[#17231A] shadow-md hover:shadow-[0_0_25px_rgba(200,255,61,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Sanjai_R_Resume.pdf"
                onClick={handleResumeClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm text-[#17231A] bg-[#FAF7EF] hover:bg-[#E9E2D2] border border-[#CBD5C5] transition-all duration-200"
              >
                <Download className="w-4 h-4 text-[#59645A]" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>

            {/* Social Connection Bar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 pt-6 border-t border-[#CBD5C5] flex items-center gap-3.5 text-[#59645A]"
            >
              <span className="text-xs uppercase tracking-wider font-mono text-[#647066]">Connect:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#FAF7EF] border border-[#CBD5C5] text-[#17231A] hover:bg-[#C8FF3D] hover:border-[#17231A] transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#FAF7EF] border border-[#CBD5C5] text-[#17231A] hover:bg-[#C8FF3D] hover:border-[#17231A] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-[#FAF7EF] border border-[#CBD5C5] text-[#17231A] hover:bg-[#C8FF3D] hover:border-[#17231A] transition-all"
                aria-label="Email Sanjai"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="p-2 rounded-lg bg-[#FAF7EF] border border-[#CBD5C5] text-[#17231A] hover:bg-[#C8FF3D] hover:border-[#17231A] transition-all"
                aria-label="Call Sanjai"
              >
                <Phone className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Organic AI Editorial Portrait & Abstract Data Nodes */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[420px]"
            >
              {/* Organic Sage Glow Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#A8C3A0]/40 via-[#C7DFC5]/30 to-[#C8FF3D]/20 rounded-[2.5rem] blur-xl opacity-70 pointer-events-none" />

              {/* Editorial Frame Container */}
              <div className="relative rounded-[2rem] p-2.5 bg-[#FAF7EF] border border-[#CBD5C5] shadow-xl overflow-hidden group">
                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[3/4] bg-[#E9E2D2]">
                  <img
                    src="/images/profile.png"
                    alt="Sanjai R - AI & Data Science"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle editorial vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17231A]/70 via-transparent to-transparent" />

                  {/* Bottom Status Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#FAF7EF]/90 border border-[#CBD5C5] backdrop-blur-md flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C8FF3D] border border-[#17231A]/40 shadow-[0_0_6px_#C8FF3D] animate-pulse"></span>
                      <span className="text-xs font-semibold text-[#17231A]">
                        Open to Internships & Roles
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#17231A] bg-[#A8C3A0]/40 px-2 py-0.5 rounded">
                      May 2027
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Top Badge: AI / Data Science */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-[#FAF7EF] border border-[#CBD5C5] shadow-lg flex items-center gap-2.5 hidden sm:flex"
              >
                <div className="w-8 h-8 rounded-xl bg-[#A8C3A0]/30 flex items-center justify-center text-[#17231A]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-[#647066] font-semibold">Specialization</div>
                  <div className="text-xs font-bold text-[#17231A]">AI & Data Science</div>
                </div>
              </motion.div>

              {/* Floating Bottom Badge: Verified Metric */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 -right-4 sm:-right-6 p-3 rounded-2xl bg-[#FAF7EF] border border-[#CBD5C5] shadow-lg flex items-center gap-2.5 hidden sm:flex"
              >
                <div className="w-8 h-8 rounded-xl bg-[#C7DFC5]/40 flex items-center justify-center text-[#17231A]">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-[#647066] font-semibold">B.Tech CGPA</div>
                  <div className="text-xs font-bold text-[#17231A] font-mono">8.01 / 10</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
