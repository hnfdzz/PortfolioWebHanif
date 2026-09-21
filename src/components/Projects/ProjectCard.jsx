import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card rounded-3xl p-6 flex flex-col justify-between h-[420px] relative overflow-hidden group">
      {/* Top Header Card */}
      <div className="flex justify-between items-start mb-4">
        <span className="text-4xl font-extrabold text-gray-500/80 tracking-wider">
          {project.id}
        </span>
        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-purple-300 border border-purple-500/30">
          {project.category}
        </span>
      </div>

      {/* Judul & Tech stack */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neonPurple transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 font-medium">Techstack used</p>
        <p className="text-sm text-gray-300 line-clamp-2 mt-1">{project.techStack}</p>
      </div>

      {/* Frame Preview Gambar & Link */}
      <div className="relative rounded-2xl overflow-hidden mt-2 h-44 border border-white/10 bg-black/40">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer"
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-purple-600/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;