import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../components/logo';
import CustomButton from '../components/CustomButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fungsi untuk scroll ke elemen dengan smooth behavior
  const scrollToSection = (sectionId) => {
    // Tutup menu mobile jika terbuka
    setIsMenuOpen(false);
    
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

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-14 py-2">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Menu items centered */}
            <div className="flex items-center space-x-8 mx-auto">
              <Link 
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection();
                }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Beranda
              </Link>
              <Link 
                to="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Tentang
              </Link>
              <Link 
                to="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('portfolio');
                }}
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Portofolio
              </Link>
            </div>

            <div>
              <a 
                href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=codira85@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CustomButton className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  Mulai Sekarang
                </CustomButton>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16m-7 6h7" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center">
              <div className="flex justify-between w-full max-w-xs mb-4">
                <Link 
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection();
                  }}
                  className="flex-1 text-center text-white hover:text-gray-300 transition-colors duration-300 py-2 px-1 whitespace-nowrap"
                >
                  Beranda
                </Link>
                <Link 
                  to="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="flex-1 text-center text-white hover:text-gray-300 transition-colors duration-300 py-2 px-1 whitespace-nowrap"
                >
                  Tentang
                </Link>
                <Link 
                  to="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('portfolio');
                  }}
                  className="flex-1 text-center text-white hover:text-gray-300 transition-colors duration-300 py-2 px-1 whitespace-nowrap"
                >
                  Portofolio
                </Link>
              </div>
              <a 
                href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=codira85@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs"
              >
                <CustomButton className='w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'>
                  Mulai Sekarang
                </CustomButton>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
