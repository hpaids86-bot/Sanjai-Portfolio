import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative bg-[#17231A] text-[#F3EBDD] overflow-hidden">
      {/* Subtle neon glow backdrops */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#C8FF3D]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#39FF88]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Implementations"
          title="Selected Projects"
          subtitle="Building practical solutions through data, AI and visualization."
          dark={true}
        />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
