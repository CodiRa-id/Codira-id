import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiDatabase, FiCreditCard, FiSmartphone, FiLayers, FiFigma, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb, SiStripe, SiAdobexd, SiNextdotjs, SiTailwindcss, SiExpress, SiPostgresql, SiFramer, SiJavascript, SiHtml5 } from 'react-icons/si';
import sumberbening from '../img/sumberbening.png';
import codingseru from '../img/codingseru.png';
import PortfolioCard from '../components/PortfolioCard';
import CarouselControls from '../components/CarouselControls';
import PortfolioHeader from '../components/PortfolioHeader';

const Portfolio = () => {
  const scrollContainer = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const header = {
    hidden: { opacity: 0, y: -20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };
  
  // Viewport options for animations
  const viewportOptions = {
    once: true,
    amount: 0.1,
    margin: '0px 0px -100px 0px'
  };

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

    // Tech icons mapping
  const techIcons = {
    // Framework & Libraries
    'React': <SiReact className="w-4 h-4" title="React" />,
    'Next.js': <SiNextdotjs className="w-4 h-4" title="Next.js" />,
    'Express': <SiExpress className="w-4 h-4" title="Express" />,
    
    // Styling
    'Tailwind': <SiTailwindcss className="w-4 h-4" title="Tailwind CSS" />,
    
    // Languages
    'JavaScript': <SiJavascript className="w-4 h-4" title="JavaScript" />,
    'HTML': <SiHtml5 className="w-4 h-4" title="HTML" />,
    
    // Design Tools
    'Figma': <FiFigma className="w-4 h-4" title="Figma" />,
    'Adobe XD': <SiAdobexd className="w-4 h-4" title="Adobe XD" />,
    
    // Database
    'MongoDB': <SiMongodb className="w-4 h-4" title="MongoDB" />,
    'PostgreSQL': <SiPostgresql className="w-4 h-4" title="PostgreSQL" />,
    
    // Payment
    'Stripe': <SiStripe className="w-4 h-4" title="Stripe" />,
    
    // Animation
    'Framer': <SiFramer className="w-4 h-4" title="Framer Motion" />,
    
    // General
    'UI/UX Design': <FiLayers className="w-4 h-4" title="UI/UX Design" />,
    'Mobile': <FiSmartphone className="w-4 h-4" title="Mobile" />,
    'Web': <FiCode className="w-4 h-4" title="Web" />,
    'Database': <FiDatabase className="w-4 h-4" title="Database" />,
    'Payment': <FiCreditCard className="w-4 h-4" title="Payment" />
  };

  const portfolioItems = [
    {
      title: "Website Bisnis",
      description: "Tingkatkan kredibilitas dan jangkauan bisnis Anda dengan website profesional yang dirancang modern serta responsif.",
      image: sumberbening,
      tags: ["HTML", "Tailwind", "JavaScript", "Figma"],
      demoUrl: "https://codira-id.github.io/sumberbening3/",
      codeUrl: "#"
    },
    {
      title: "Portofolio",
      description: "Bangun personal branding dan tingkatkan kredibilitas Anda melalui portofolio profesional dengan desain menarik yang optimal di semua perangkat.",
      image: codingseru,
      tags: ["React", "Tailwind", "Figma"],
      demoUrl: "https://codingseru.github.io/Codingseru/",
      codeUrl: "#"
    }
  ];

  // Add scroll event for active index
  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const handleScroll = () => {
      const items = container.querySelectorAll('[data-carousel-item]');
      let closestItem = { index: 0, distance: Infinity };
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        
        // Track which item is closest to center
        if (distance < closestItem.distance) {
          closestItem = { index, distance };
        }
      });
      
      // Update active index
      setActiveIndex(closestItem.index);
    };

    container.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to specific slide
  const scrollToSlide = (index) => {
    if (!scrollContainer.current) return;
    const container = scrollContainer.current;
    const items = container.querySelectorAll('[data-carousel-item]');
    if (index >= 0 && index < items.length) {
      items[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900 px-4 lg:px-8 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOptions}
          variants={header}
        >
          <PortfolioHeader />
        </motion.div>

        <div className="relative">
          {/* Desktop View - Grid */}
          <motion.div 
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewportOptions}
          >
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileInView="show"
                viewport={viewportOptions}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="relative"
              >
                <PortfolioCard item={item} techIcons={techIcons} />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile View - Horizontal Scroll */}
          <div className="md:hidden">
            <div 
              ref={scrollContainer}
              className="flex overflow-x-auto pb-6 -mx-4 px-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollbarColor: 'transparent transparent',
                '&::-webkit-scrollbar': { display: 'none' }
              }}
            >
              {portfolioItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-11/12 sm:w-9/12 px-2 snap-start"
                  data-carousel-item
                  style={{
                    scrollSnapAlign: 'start',
                    scrollSnapStop: 'always'
                  }}
                >
                  <div className="h-full">
                    <PortfolioCard item={item} techIcons={techIcons} />
                  </div>
                </div>
              ))}
              {/* Add padding to the end for the last item */}
              <div className="flex-shrink-0 w-4"></div>
            </div>
            
            {/* Navigation with Dots Between Arrows */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {/* Left Arrow */}
              <button 
                onClick={scrollLeft}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label="Scroll left"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dot Indicators */}
              <div className="flex items-center justify-center gap-1.5 mx-2">
                {portfolioItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-accent w-6 shadow-[0_0_10px_rgba(16,185,129,0.5)]' 
                        : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Right Arrow */}
              <button 
                onClick={scrollRight}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label="Scroll right"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;