import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiMail, FiPhone, FiInstagram } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import Logo from '../components/logo';

// Custom hook for fade-in-up animation
const useFadeInUp = (ref) => {
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
};

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const companyRef = useRef(null);
  const linksRef = useRef(null);
  const contactRef = useRef(null);
  const copyrightRef = useRef(null);

  // Initialize fade-in-up animations
  useFadeInUp(companyRef);
  useFadeInUp(linksRef);
  useFadeInUp(contactRef);
  useFadeInUp(copyrightRef);

  // Fungsi untuk scroll ke elemen dengan smooth behavior
  const scrollToSection = (sectionId) => {
    // Jika tidak di halaman beranda, arahkan ke beranda dulu
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    
    // Jika sectionId kosong (beranda), scroll ke atas
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Scroll ke section yang dituju
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const currentYear = new Date().getFullYear();

  // Animation styles
  const fadeInUpStyle = {
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Company Info */}
          <div ref={companyRef} className="space-y-4" style={fadeInUpStyle}>
            <div className="flex justify-center md:justify-start">
              <Logo className="text-3xl" />
            </div>
            <p className="text-gray-400">
              Menghadirkan solusi teknologi inovatif untuk bisnis Anda. Berkualitas, handal, dan sesuai kebutuhan.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <a href="https://www.instagram.com/codira85/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors" aria-label="Instagram">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@CodiRa-z9h" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition-colors" aria-label="YouTube">
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div ref={linksRef} className="md:mx-auto" style={{ ...fadeInUpStyle, transitionDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-gray-500">
              <li><button onClick={() => scrollToSection('')} className="hover:text-accent transition-colors">Beranda</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">Tentang Kami</button></li>
              <li><button onClick={() => scrollToSection('layanan')} className="hover:text-accent transition-colors">Layanan</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-accent transition-colors">Portofolio</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">Kontak</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-accent transition-colors">FAQ</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div ref={contactRef} className="md:mx-auto" style={{ ...fadeInUpStyle, transitionDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex flex-col items-center md:items-start space-y-1">
                <div className="flex items-center space-x-2">
                  <FiMail className="w-5 h-5 text-accent" />
                  <span>codira85@gmail.com</span>
                </div>
              </li>
              <li className="flex flex-col items-center md:items-start space-y-1">
                <div className="flex items-center space-x-2">
                  <FiPhone className="w-5 h-5 text-accent" />
                  <span>+62 858-8901-7586</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div ref={copyrightRef} className="border-t border-gray-900 pt-8 text-center" style={{ ...fadeInUpStyle, transitionDelay: '0.6s' }}>
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} CodiRa. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Add global styles for the animation */}
      <style jsx global>{`
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
      `}</style>
    </footer>
  );
};

export default Footer;