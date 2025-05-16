import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TechFeatures from './components/TechFeatures';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService.tsx';
import CookiePolicy from './pages/CookiePolicy';
import ScrollToTop from './components/ScrollToTop';


function App() {
  useEffect(() => {
    // Set page title
    document.title = 'NeoForge - Professional Web Development';
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

 return (
  <Router>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <TechFeatures />
          <Services />
          <Portfolio />
          <SocialProof />
          <Contact />
        </>
      } />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
    </Routes>
    <Footer />
  </Router>
);

}

export default App;