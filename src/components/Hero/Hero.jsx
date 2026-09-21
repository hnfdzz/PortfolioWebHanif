import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Efek paralaks & fade out otomatis saat elemen di-scroll ke bawah
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.88]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -80]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 15;
    const moveY = (clientY - window.innerHeight / 2) / 15;
    setMousePosition({ x: moveX, y: moveY });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden cursor-default select-none"
    >
      {/* Kontainer Utama dengan Efek Scroll Dynamic Fade & Scale */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full max-w-6xl container mx-auto grid grid-cols-1 lg:grid-cols-3 items-center z-10 gap-8"
      >
        
        {/* Teks Kiri - Scroll In/Out Animation */}
        <motion.div 
          initial={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-left"
        >
          <motion.span 
            whileHover={{ x: 5, color: '#d8b4fe' }}
            className="text-lg text-gray-400 block mb-2 cursor-pointer transition-colors"
          >
            Hello, I'm
          </motion.span>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            <motion.span 
              whileHover={{ scale: 1.02, x: 5 }}
              className="text-white block mb-1 cursor-default transition-all duration-300"
            >
              {personalInfo.name.split(" ")[0]}
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.03, x: 5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 block cursor-default transition-all duration-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </motion.span>
          </h1>
        </motion.div>

        {/* Foto Tengah - Interactive Floating & Glow Cursor */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.7, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          className="relative flex justify-center cursor-pointer group"
        >
          {/* Ambient Glow Mengikuti Kursor Mouse */}
          <motion.div 
            animate={{ x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="absolute w-80 h-80 rounded-full bg-purple-600/30 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:bg-purple-500/50 transition-colors duration-500" 
          />
          
          <img 
            src="/profile.png" 
            alt="Profile" 
            className="relative z-10 w-full max-w-sm h-auto object-cover rounded-3xl filter drop-shadow-[0_10px_25px_rgba(168,85,247,0.35)] group-hover:drop-shadow-[0_20px_40px_rgba(168,85,247,0.7)] transition-all duration-500"
          />
        </motion.div>

        {/* Teks Kanan - Scroll In/Out Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-left lg:text-left"
        >
          <motion.span 
            whileHover={{ x: 5, color: '#c084fc' }}
            className="text-lg text-purple-400 font-semibold block mb-2 cursor-pointer transition-colors"
          >
            {personalInfo.titlePrefix}
          </motion.span>

          <motion.h2 
            whileHover={{ scale: 1.02 }}
            className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 leading-tight cursor-default"
          >
            {personalInfo.titleSuffix}
          </motion.h2>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;