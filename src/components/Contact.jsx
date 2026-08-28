import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger subtle celebratory confetti in neon lime and sage
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#C8FF3D', '#39FF88', '#A8C3A0']
    });

    const subject = encodeURIComponent(`Portfolio Contact — Sanjai R (from ${formData.name})`);
    const body = encodeURIComponent(
      `Hi Sanjai,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative bg-[#17231A] text-[#F3EBDD] overflow-hidden">
      {/* Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8FF3D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Inquiries"
          title="Let's Build Something Intelligent."
          subtitle="Have an opportunity, project, or idea? Let's connect."
          dark={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#26382B] border border-[#C8FF3D]/15 p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="font-display text-xl font-bold text-[#F3EBDD] mb-1">
                  Direct Channels
                </h3>
                <p className="text-xs text-[#C7DFC5]">
                  Reach out directly for internships, collaboration, or full-time opportunities.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#17231A] border border-white/[0.08] flex items-center justify-between group">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-[#26382B] text-[#C8FF3D]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-[#A8C3A0] font-mono">Email Address</div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#F3EBDD] hover:text-[#C8FF3D] transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-2 rounded-xl bg-[#26382B] text-[#C7DFC5] hover:text-[#C8FF3D] border border-white/[0.06] transition-all flex-shrink-0 ml-2"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-[#C8FF3D]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#17231A] border border-white/[0.08] flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#26382B] text-[#C8FF3D]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#A8C3A0] font-mono">Phone Number</div>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-xs sm:text-sm font-semibold text-[#F3EBDD] hover:text-[#C8FF3D] transition-colors font-mono"
                    >
                      +91 {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className="p-2 rounded-xl bg-[#26382B] text-[#C7DFC5] hover:text-[#C8FF3D] border border-white/[0.06] transition-all flex-shrink-0 ml-2"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-[#C8FF3D]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#17231A] border border-white/[0.08] flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#26382B] text-[#A8C3A0]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#A8C3A0] font-mono">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F3EBDD]">
                    {personal.location}
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A8C3A0] mb-3">
                  Profiles & Repositories
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-[#17231A] border border-white/[0.08] hover:border-[#C8FF3D] hover:text-[#C8FF3D] transition-all flex items-center gap-2.5 text-xs font-semibold text-[#F3EBDD]"
                  >
                    <GithubIcon className="w-4 h-4 text-[#C8FF3D]" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-[#17231A] border border-white/[0.08] hover:border-[#C8FF3D] hover:text-[#C8FF3D] transition-all flex items-center gap-2.5 text-xs font-semibold text-[#F3EBDD]"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#C8FF3D]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form with Large CTA */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#26382B] border border-[#C8FF3D]/15 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#17231A] text-[#C8FF3D]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#F3EBDD]">
                    Send a Direct Message
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#A8C3A0]">
                  mailto Direct Link
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#C7DFC5] mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3 rounded-2xl bg-[#17231A] border border-white/[0.1] text-[#F3EBDD] text-xs sm:text-sm placeholder-[#59645A] focus:outline-none focus:border-[#C8FF3D] focus:ring-1 focus:ring-[#C8FF3D] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C7DFC5] mb-1.5 font-mono">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#17231A] border border-white/[0.1] text-[#F3EBDD] text-xs sm:text-sm placeholder-[#59645A] focus:outline-none focus:border-[#C8FF3D] focus:ring-1 focus:ring-[#C8FF3D] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C7DFC5] mb-1.5 font-mono">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role, or proposal..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#17231A] border border-white/[0.1] text-[#F3EBDD] text-xs sm:text-sm placeholder-[#59645A] focus:outline-none focus:border-[#C8FF3D] focus:ring-1 focus:ring-[#C8FF3D] transition-all resize-none"
                  ></textarea>
                </div>

                {submitted && (
                  <div className="p-3.5 rounded-2xl bg-[#C8FF3D]/10 border border-[#C8FF3D]/30 text-[#C8FF3D] text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>Opening your email client with your pre-formatted message...</span>
                  </div>
                )}

                {/* Large Neon Lime CTA Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-[#17231A] bg-[#C8FF3D] hover:bg-[#39FF88] shadow-[0_0_25px_rgba(200,255,61,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>START A CONVERSATION →</span>
                </button>
                <div className="text-[11px] text-center text-[#A8C3A0] font-mono">
                  Clicking will automatically open your default email client with your message pre-filled to 09.sanjai.09@gmail.com.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
