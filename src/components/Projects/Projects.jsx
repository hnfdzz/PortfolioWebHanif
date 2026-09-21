import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Judul Section dengan Efek Scroll Appear */}
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            I make <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Incredible Projects</span>
          </h2>
        </motion.div>

        {/* Grid Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 70, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl border border-purple-500/20 bg-purple-950/10 backdrop-blur-md overflow-hidden p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)]"
            >
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-purple-500/30 text-purple-300 text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-purple-400 font-bold text-xl">{project.id}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.techStack}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;