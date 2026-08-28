import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0F1812] border-t border-white/[0.08] text-[#F3EBDD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Animated Dot */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 font-display text-lg font-bold text-[#F3EBDD]">
              <span className="w-2 h-2 rounded-full bg-[#C8FF3D] shadow-[0_0_8px_#C8FF3D] animate-pulse"></span>
              <span>{personal.name.toUpperCase()}</span>
            </div>
            <p className="text-xs text-[#A8C3A0] mt-1 font-mono">
              AI & Data Science Student · Tamil Nadu, India
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#17231A] border border-white/[0.08] text-[#F3EBDD] hover:text-[#C8FF3D] hover:border-[#C8FF3D]/40 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#17231A] border border-white/[0.08] text-[#F3EBDD] hover:text-[#C8FF3D] hover:border-[#C8FF3D]/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-[#17231A] border border-white/[0.08] text-[#F3EBDD] hover:text-[#C8FF3D] hover:border-[#C8FF3D]/40 transition-all"
              aria-label="Email Sanjai"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#26382B] border border-white/[0.1] text-[#F3EBDD] hover:text-[#C8FF3D] hover:border-[#C8FF3D]/40 transition-all ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#C8FF3D]" />
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8C3A0] gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D]"></span>
            <span>© 2026 {personal.name}. All rights reserved.</span>
          </div>
          <div className="font-mono text-[11px] text-[#647066]">
            Organic Intelligence Design · Vite + React + Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
