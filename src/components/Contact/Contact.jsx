import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-16 rounded-3xl border border-purple-500/30 bg-purple-950/10 backdrop-blur-md text-center shadow-[0_0_50px_rgba(168,85,247,0.15)]"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Together</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Have a project in mind or want to explore collaboration? Feel free to reach out!
          </p>

          <a 
            href="mailto:abdurrahmanhaniff39@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold text-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Say Hello</span>
            <span className="text-sm"></span>
          </a>

          <div className="mt-16 pt-8 border-t border-gray-800/80 text-gray-500 text-sm">
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;