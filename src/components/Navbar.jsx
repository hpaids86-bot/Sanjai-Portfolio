import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { personal, navLinks } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'about', 'journey', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F3EBDD]/90 backdrop-blur-md border-b border-[#CBD5C5] py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-[#17231A] flex items-center justify-center text-[#C8FF3D] font-display font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              SR
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-[#17231A] text-lg leading-tight group-hover:text-[#59645A] transition-colors">
                {personal.name.toUpperCase()}
              </span>
              <span className="text-[10px] text-[#59645A] uppercase tracking-wider font-mono">
                AI & Data Science
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#E9E2D2]/80 border border-[#CBD5C5] rounded-full px-3.5 py-1.5 backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#17231A] font-semibold bg-[#FAF7EF] shadow-sm'
                      : 'text-[#59645A] hover:text-[#17231A] hover:bg-[#FAF7EF]/60'
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D] border border-[#17231A]/40 shadow-[0_0_6px_#C8FF3D]"></span>
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#F3EBDD] bg-[#17231A] hover:bg-[#C8FF3D] hover:text-[#17231A] hover:shadow-[0_0_20px_rgba(200,255,61,0.25)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#E9E2D2] border border-[#CBD5C5] text-[#17231A] hover:bg-[#FAF7EF] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 p-4 lg:hidden"
          >
            <div className="bg-[#FAF7EF] border border-[#CBD5C5] rounded-2xl p-5 shadow-xl backdrop-blur-xl">
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#E9E2D2] text-[#17231A] font-semibold border border-[#CBD5C5]'
                          : 'text-[#59645A] hover:text-[#17231A] hover:bg-[#E9E2D2]/50'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#C8FF3D] border border-[#17231A]/30"></span>
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-4 pt-4 border-t border-[#CBD5C5]">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#F3EBDD] bg-[#17231A] hover:bg-[#C8FF3D] hover:text-[#17231A]"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
