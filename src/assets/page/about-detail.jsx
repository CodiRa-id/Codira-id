import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../components/logo';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const viewportOptions = {
  once: true,
  amount: 0.1,
  margin: '0px 0px -100px 0px'
};

// Custom hook for fade-in-up animation
const useFadeInUp = (ref, delay = 0) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
  };
};

const AboutDetail = () => {
  const contentSectionRef = useRef(null);
  const heroRef = useRef(null);
  const historyRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const ctaRef = useRef(null);

  // Initialize animations
  const heroStyle = useFadeInUp(heroRef);
  const historyStyle = useFadeInUp(historyRef, 0.1);
  const visionStyle = useFadeInUp(visionRef, 0.2);
  const valuesStyle = useFadeInUp(valuesRef, 0.3);
  const ctaStyle = useFadeInUp(ctaRef, 0.4);

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Hero Section - 3/4 of viewport height */}
      <div className="relative h-[75vh] min-h-[500px] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-950/80 to-gray-950/70"></div>
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-transparent"></div>
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-cyan-500/20 rounded-full mix-blend-soft-light filter blur-3xl"></div>
        
        <div ref={heroRef} style={heroStyle} className="relative max-w-4xl mx-auto w-full text-center">
          <div className="inline-block px-5 py-1.5 mb-4 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/20">
            <span className="text-blue-300 text-sm font-medium">Tentang Kami</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 inline-block">
              Tentang <Logo className="inline-block align-middle text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400" />
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          CodiRa menyediakan jasa pembuatan website profesional yang responsif dan modern. Kami hadir sebagai solusi bagi UMKM, startup, dan individu yang ingin memiliki website berkualitas tanpa perlu keahlian coding. Dengan pendekatan mobile-first dan proses kerja yang transparan, kami memastikan website Anda tampil optimal di semua perangkat.
          </p>
          <div className="mt-8">
            <button 
              onClick={scrollToContent}
              className="animate-bounce-slow inline-flex flex-col items-center text-blue-300 hover:text-white transition-colors group"
              aria-label="Scroll ke bawah"
            >
              <FiChevronDown className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div ref={contentSectionRef} className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-18">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Sejarah Kami Section */}
            <div ref={historyRef} style={historyStyle} className="py-4">
              <h3 className="text-2xl font-bold mb-4">Sejarah <span className="text-accent">Kami</span></h3>
              <p className="text-gray-300 mb-6">
              CodiRa berawal dari sebuah pengamatan di tengah era digitalisasi yang semakin pesat. Pendirinya melihat bahwa banyak Usaha Mikro, Kecil, dan Menengah (UMKM) serta individu sangat membutuhkan website untuk memperkuat brand mereka. Namun, mereka seringkali menghadapi kendala berupa biaya yang tinggi atau hasil akhir yang tidak sesuai dengan harapan.
              </p>
              <p className="text-gray-300">
              Berangkat dari kompetensi dalam pengembangan web modern dan pemahaman akan kebutuhan pasar, CodiRa didirikan untuk menjadi solusi yang menjembatani kesenjangan tersebut.

Dengan mengusung nilai utama transparansi dan kualitas, CodiRa berkomitmen untuk menyediakan layanan yang tidak hanya menghasilkan produk akhir yang memuaskan, tetapi juga memastikan proses pengerjaannya terasa menyenangkan bagi setiap klien.
              </p>
            </div>
            
            {/* Visi & Misi Section */}
            <div ref={visionRef} style={visionStyle} className="bg-gray-900/50 p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">Visi</h4>
                  <p className="text-gray-300">
                  Menjadi penyedia jasa pembuatan website freelance terpercaya bagi UMKM, kreator digital, dan personal brand di seluruh dunia.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">Misi</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Menyediakan layanan pembuatan website yang cepat dan responsive</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Membantu klien membangun identitas digital profesional.</span>
                    </li>
                    <li className="flex items-start">
                      <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Memberikan proses pengerjaan yang transparan dan terbuka untuk revisi.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nilai - Nilai Section */}
      <div ref={valuesRef} style={valuesStyle} className="py-20 bg-gray-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-16 bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6 }}
          >
            Nilai - Nilai
          </motion.h2>
          
          <motion.div 
            className="relative w-full max-w-6xl mx-auto py-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewportOptions}
          >
            {/* Top Row - Three Items (Integritas - Logo - Kualitas) */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 md:mb-16">
              {/* Left Value - Integritas */}
              <motion.div 
                className="w-full md:w-1/4 order-2 md:order-1"
                variants={item}
              >
                <motion.div 
                  className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-accent/30 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiCheckCircle className="text-accent text-xl" />
                  </motion.div>
                  <h4 className="font-semibold text-lg mb-1 text-center">Transparansi</h4>
                  <p className="text-sm text-gray-300 text-center">Memberikan proses pengerjaan yang sangat transparan</p>
                </motion.div>
              </motion.div>
              
              {/* Center Logo - Top on mobile, center on desktop */}
              <motion.div 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mx-auto md:mx-4 order-1 md:order-2 mb-8 md:mb-0"
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 5, 0],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Logo className="text-4xl md:text-5xl text-accent" />
                </motion.div>
              </motion.div>
              
              {/* Right Value - Kualitas */}
              <motion.div 
                className="w-full md:w-1/4 order-3"
                variants={item}
              >
                <motion.div 
                  className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-accent/30 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiCheckCircle className="text-accent text-xl" />
                  </motion.div>
                  <h4 className="font-semibold text-lg mb-1 text-center">Kualitas</h4>
                  <p className="text-sm text-gray-300 text-center">Memberikan kualitas terbaik untuk kepuasan pelanggan</p>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Bottom Row - Two Items (Inovasi - Pelayanan) */}
            <motion.div 
              className="flex flex-col md:flex-row justify-center gap-4 md:gap-8"
              variants={container}
            >
              <motion.div 
                className="w-full md:w-1/3"
                variants={item}
              >
                <motion.div 
                  className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-accent/30 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiCheckCircle className="text-accent text-xl" />
                  </motion.div>
                  <h4 className="font-semibold text-lg mb-1 text-center">Inovasi</h4>
                  <p className="text-sm text-gray-300 text-center">Terus berinovasi untuk memberikan solusi terbaik</p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/3"
                variants={item}
              >
                <motion.div 
                  className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-accent/30 transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiCheckCircle className="text-accent text-xl" />
                  </motion.div>
                  <h4 className="font-semibold text-lg mb-1 text-center">Pelayanan</h4>
                  <p className="text-sm text-gray-300 text-center">Memberikan pelayanan terbaik untuk kepuasan pelanggan</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} style={ctaStyle} className="bg-gradient-to-r from-accent/10 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Bekerja Sama?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Hubungi kami sekarang dan diskusikan proyek Anda dengan tim ahli kami.
          </p>
          <a 
            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=codira85@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
};

// Add global styles for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }
  
  /* Ensure smooth scrolling for anchor links */
  html {
    scroll-behavior: smooth;
  }
  
  /* Animation for value items */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default AboutDetail;
