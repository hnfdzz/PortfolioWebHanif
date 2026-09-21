import React from 'react';
import { motion } from 'framer-motion';
import { offersData } from '../../data/portfolioData';

// Koleksi Ikon SVG Modern
const offerIcons = [
  // 1. Full-Stack Software Engineering
  <svg className="w-7 h-7 text-purple-400 group-hover:text-purple-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>,
  // 2. AI & LLM Integration
  <svg className="w-7 h-7 text-purple-400 group-hover:text-purple-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // 3. Data Analytics & Insights
  <svg className="w-7 h-7 text-purple-400 group-hover:text-purple-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  // 4. Futuristic UI/UX Architecture
  <svg className="w-7 h-7 text-purple-400 group-hover:text-purple-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
];

const Offers = () => {
  return (
    <section id="services" className="relative py-28 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Section dengan Animasi Scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive digital solutions engineered with technical precision, high performance, and cutting-edge innovations.
          </p>
        </motion.div>

        {/* Grid Card Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offersData.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-3xl border border-purple-500/20 bg-purple-950/10 backdrop-blur-md transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_10px_35px_rgba(168,85,247,0.25)] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Background Glow Interaktif */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-500/25 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Box Icon */}
                <div className="w-14 h-14 rounded-2xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600/30 group-hover:border-purple-400 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  {offerIcons[index % offerIcons.length]}
                </div>

                {/* Judul & Deskripsi */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {offer.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-base">
                  {offer.description}
                </p>
              </div>

              {/* Indicator Arrow Accent */}
              <div className="mt-8 pt-4 border-t border-purple-500/10 flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                <span>Explore capability</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Offers;