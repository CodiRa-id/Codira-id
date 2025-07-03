import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomButton from '../components/CustomButton';
import { FiCheckCircle, FiArrowRight, FiStar, FiCode, FiLayers } from 'react-icons/fi';

// Variabel animasi
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const viewportOptions = {
  once: true,
  margin: '0px 0px -100px 0px'
};

// Add floating animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(5px, 5px) rotate(1deg); }
    50% { transform: translate(0, 10px) rotate(0deg); }
    75% { transform: translate(-5px, 5px) rotate(-1deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }
  .floating-element {
    animation: float 8s ease-in-out infinite;
  }
  .floating-element-2 {
    animation: float 10s ease-in-out infinite reverse;
    animation-delay: 1s;
  }
`;
document.head.appendChild(style);

const Hero = () => {
  const location = useLocation();

  // Function to scroll to a section with smooth behavior
  const scrollToSection = (sectionId) => {
    // If not on the home page, navigate to home with the section hash
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If sectionId is empty (home), scroll to top
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Scroll to the target section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="top-0 relative bg-dark-900 text-white min-h-screen flex items-center justify-center z-0 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        
        {/* Decorative elements with floating animation */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-soft-light filter blur-3xl floating-element"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-soft-light filter blur-3xl floating-element-2"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

<div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 mt-[-70px]"
            variants={fadeInUp}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
              Website
            </span>{' '}
            Impian, Jadi Nyata
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Ubah ide Anda menjadi website fungsional untuk membangun brand profesional.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={staggerContainer}
          >
            <motion.div 
              className="relative group w-full sm:w-auto"
              variants={fadeInUp}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition-all duration-200 group-hover:duration-200 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"></div>
              <a 
                href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=codira85@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <CustomButton className="w-full relative bg-gradient-to-r from-blue-500 to-cyan-500 border-none text-white hover:from-blue-600 hover:to-cyan-600 px-8 py-3 text-lg flex gap-2 group-hover:scale-105 transition-all duration-200 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] items-center justify-center">
                  Mulai Sekarang <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </CustomButton>
              </a>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CustomButton 
                variant="outline"
                onClick={() => scrollToSection('portfolio')}
                className="w-full !border-gray-600 text-white hover:!border-accent hover:bg-accent/10 hover:text-accent px-8 py-3 text-lg flex gap-2 group transition-all duration-200 items-center justify-center"
              >
                <FiCode /> Lihat Portfolio
              </CustomButton>
            </motion.div>
          </motion.div>
          
          {/* Trusted section */}
          <motion.div 
            className="mt-12 pt-6 border-t border-gray-800 w-full max-w-md"
            variants={fadeInUp}
          >
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-6"
              variants={staggerContainer}
            >
              {[
                { icon: <FiCheckCircle className="text-green-400" />, text: 'Gratis Revisi' },
                { icon: <FiStar className="text-yellow-400" />, text: 'Kualitas Premium' },
                { icon: <FiLayers className="text-blue-400" />, text: 'Responsive' }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  variants={fadeInUp}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;