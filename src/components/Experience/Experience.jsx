import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Organizational <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ x: 6, backgroundColor: "rgba(88, 28, 135, 0.2)" }}
              className="p-8 rounded-2xl border border-purple-500/20 bg-purple-950/10 backdrop-blur-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <span className="text-purple-400 text-sm font-semibold px-3 py-1 bg-purple-900/40 rounded-full border border-purple-500/30 self-start md:self-auto">
                  {exp.period}
                </span>
              </div>
              <p className="text-purple-300 font-medium mb-3">{exp.company}</p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{exp.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;