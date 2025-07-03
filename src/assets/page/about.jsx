import React, { useState, useEffect, useRef } from 'react';
import { FiUsers, FiArrowRight, FiStar } from 'react-icons/fi';
import { TbLayersIntersect } from "react-icons/tb";
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

// Custom hook for scroll animations
const useScrollAnimation = (ref, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

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
    'data-visible': isVisible,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
    }
  };
};

const About = () => {
  const [shinyIndex, setShinyIndex] = useState(0);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const badgesRef = useRef(null);
  const buttonRef = useRef(null);

  // Initialize animations
  const imageAnimation = useScrollAnimation(imageRef, 0.1);
  const titleAnimation = useScrollAnimation(titleRef, 0.2);
  const contentAnimation = useScrollAnimation(contentRef, 0.3);
  const badgesAnimation = useScrollAnimation(badgesRef, 0.4);
  const buttonAnimation = useScrollAnimation(buttonRef, 0.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setShinyIndex(prev => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="about" className="py-20 px-8 lg:px-8 bg-dark-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900"></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes shine {
              0% { transform: translateX(-100%) rotate(10deg); opacity: 0; }
              20% { opacity: 1; }
              100% { transform: translateX(100%) rotate(10deg); opacity: 0; }
            }
            .animate-shine {
              animation: shine 1s ease-in-out;
            }
            
            /* Ensure smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
            
            /* Add some animation for the image */
            .image-container {
              transform-style: preserve-3d;
              transition: transform 0.3s ease-out;
            }
            
            .image-container:hover {
              transform: translateY(-5px) rotateX(5deg);
            }
            
            /* Add subtle hover effect for badges */
            .badge-hover {
              transition: all 0.3s ease;
            }
            
            .badge-hover:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
          `
        }} />
      </div>

      <div className="container lg:mx-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div ref={imageRef} {...imageAnimation} className="lg:w-1/3">
            <div className="image-container rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]">
              <img 
                src="./public/Codira.webp" 
                alt="Tim kami" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 text-white lg:mx-8">
            <h2 ref={titleRef} {...titleAnimation} className="text-3xl md:text-4xl font-bold mb-6">Tentang <span className="text-accent">Kami?</span></h2>
            <p ref={contentRef} {...contentAnimation} className="text-gray-300 text-lg mb-8 leading-relaxed">
            CodiRa adalah usaha jasa pembuatan website yang berfokus pada pengembangan website responsif dengan menggunakan teknologi modern seperti Tailwind CSS dan React.js. Kami hadir untuk memenuhi kebutuhan UMKM, startup, desainer grafis, digital marketer, dan individu yang membutuhkan kehadiran online profesional namun tidak memiliki kemampuan coding.
            </p>
            
            <div ref={badgesRef} {...badgesAnimation} className="flex flex-wrap gap-4 mb-8">
              <div className={`badge-hover flex items-center gap-3 bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-500 ${shinyIndex === 0 ? 'shadow-[0_0_20px_rgba(16,185,129,0.5)]' : ''}`}>
                <div className="p-2 bg-accent/10 rounded-full text-accent relative overflow-hidden">
                  <TbLayersIntersect size={20} className="relative z-10" />
                  {shinyIndex === 0 && <div className="absolute inset-0 bg-accent/20 animate-shine"></div>}
                </div>
                <span className="text-gray-200">Transparan</span>
              </div>
              <div className={`badge-hover flex items-center gap-3 bg-gray-800/50 px-4 py-2 rounded-lg transition-all duration-500 ${shinyIndex === 1 ? 'shadow-[0_0_20px_rgba(16,185,129,0.5)]' : ''}`}>
                <div className="p-2 bg-accent/10 rounded-full text-accent relative overflow-hidden">
                  <FiStar size={20} className="relative z-10" />
                  {shinyIndex === 1 && <div className="absolute inset-0 bg-accent/20 animate-shine"></div>}
                </div>
                <span className="text-gray-200">Kualitas</span>
              </div>
            </div>

            <div ref={buttonRef} {...buttonAnimation}>
            <Link to="/about-detail" className="inline-block">
              <CustomButton className="bg-accent text-white hover:bg-accent/90 px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 group">
                Baca Selengkapnya
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </CustomButton>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;