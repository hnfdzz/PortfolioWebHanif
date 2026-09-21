import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 relative">
        
        {/* Foto Profil dengan Scroll Fade & Hover Scale */}
        <motion.div 
          initial={{ opacity: 0, y: 60, scale: 0.9, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="relative flex justify-center group"
        >
          <div className="w-full max-w-md h-[450px] rounded-2xl overflow-hidden border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm p-2 shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:border-purple-400/60 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.35)] transition-all duration-500">
            <img 
              src="/profile.png" 
              alt={personalInfo.name} 
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Teks Deskripsi dengan Animation Scroll In/Out */}
        <motion.div 
          initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Creativity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              Is My Passion
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            {personalInfo.aboutText}
          </p>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://canva.link/emfgvz24edt20xp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all"
            >
              Resume 📄
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;