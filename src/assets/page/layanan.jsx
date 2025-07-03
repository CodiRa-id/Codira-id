import React, { useRef, useEffect, useState } from 'react';
import { FiShoppingBag, FiUser, FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { BsShop } from 'react-icons/bs';
import { FaArrowTrendUp } from 'react-icons/fa6';

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
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
      transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
    }
  };
};
const Layanan = () => {
  const scrollContainer = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const gridRef = useRef(null);
  
  // Initialize animations
  const sectionAnimation = useScrollAnimation(sectionRef, 0.1);
  const headingAnimation = useScrollAnimation(headingRef, 0.2);
  const descriptionAnimation = useScrollAnimation(descriptionRef, 0.3);
  const gridAnimation = useScrollAnimation(gridRef, 0.4);
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
  const features = [
    {
      icon: <FaArrowTrendUp className="w-8 h-8 text-accent" />,
      title: "Website Landing Page",
      description: "Layanan ini berfokus pada pembuatan halaman web tunggal yang efektif untuk tujuan pemasaran.",
      items: [
        "Meningkatkan Jangkauan Bisnis",
        "Performa Cepat dan Responsif",
        "Fokus pada Pengalaman Pengguna"
      ]
    },
    {
      icon: <FiUser className="w-8 h-8 text-accent" />,
      title: "Website Portofolio",
      description: "Layanan yang ditujukan bagi para profesional kreatif dan individu yang ingin menampilkan karya dan membangun citra diri.",
      items: [
        "Membangun Personal Branding",
        "Meningkatkan Kredibilitas Profesional",
        "Desain Menarik dan Profesional"
      ]
    },
    {
      icon: <BsShop className="w-8 h-8 text-accent" />,
      title: "Website Marketing",
      description: "Situs web komprehensif yang dirancang untuk menjadi pusat kehadiran digital bagi sebuah bisnis.",
      items: [
        "Membangun Identitas Digital Profesional",
        "Meningkatkan Kredibilitas dan Jangkauan",
        "Dibangun dengan Teknologi Modern"
      ]
    }
  ];

  // Add scroll event for scaling effect and active index
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
        const maxDistance = containerRect.width / 2;
        const scale = 0.9 + (0.1 * (1 - Math.min(distance / maxDistance, 1)));
        
        item.style.transform = `scale(${scale})`;
        item.style.opacity = 0.5 + (0.5 * (1 - Math.min(distance / maxDistance, 1)));
        
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

  return (
    <section 
      ref={sectionRef} 
      {...sectionAnimation}
      id="layanan" 
      className="py-20 bg-white dark:bg-gray-900 px-4 lg:px-8 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 
            ref={headingRef} 
            {...headingAnimation}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Layanan <span className="text-accent">Kami</span>
          </h2>
          <p 
            ref={descriptionRef} 
            {...descriptionAnimation}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            website terbaik yang cocok untuk kebutuhan Anda
          </p>
        </div>

        <div ref={gridRef} {...gridAnimation} className="relative">
          {/* Desktop View - Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                style={{
                  transition: `transform 0.3s ease-out ${index * 0.1}s, opacity 0.3s ease-out ${index * 0.1}s`
                }}
              >
                <ServiceCard feature={feature} />
              </div>
            ))}
          </div>

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
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none'
              }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-10/12 sm:w-8/12 px-2 snap-start"
                  data-carousel-item
                  style={{
                    scrollSnapAlign: 'start',
                    scrollSnapStop: 'always'
                  }}
                >
                  <div className="h-full">
                    <ServiceCard feature={feature} />
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
                {features.map((_, index) => (
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

// Service Card Component
const ServiceCard = ({ feature }) => {
  const cardRef = useRef(null);
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

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col border border-gray-700 mx-1 p-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div className="h-full flex flex-col">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          {feature.description}
        </p>
        <ul className="space-y-3 mb-6">
          {feature.items.map((item, i) => (
            <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
              <FiCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Layanan;