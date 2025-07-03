import React, { useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

// Import komponen halaman
import Hero from './assets/page/hero';
import About from './assets/page/about';
import AboutDetail from './assets/page/about-detail';
import Layanan from './assets/page/layanan';
import Portfolio from './assets/page/portofolio';
import Faq from './assets/page/faq';
import Nav from './assets/page/nav';
import Footer from './assets/page/footer';
import Contact from './assets/page/contact';

function Home() {
  const aboutRef = useRef(null);
  const layananRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <Hero scrollToAbout={() => scrollToRef(aboutRef)} />
      
      <section ref={aboutRef} id="about" className="section">
        <About />
      </section>
      
      <section ref={layananRef} id="layanan" className="section">
        <Layanan />
      </section>
      
      <section ref={portfolioRef} id="portfolio" className="section">
        <Portfolio />
      </section>

      <section ref={contactRef} id="contact" className="section">
        <Contact />
      </section>
      
      <section ref={faqRef} id="faq" className="section">
        <Faq />
      </section>
    </div>
  );
}

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-detail" element={<AboutDetail />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
