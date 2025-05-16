import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-premium' : 'bg-transparent'
    } py-4`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold text-white">NeoForge</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Button href="#contact" primary>Get a Free Quote</Button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* mobilni bomboklad */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect shadow-premium">
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="block text-gray-300 hover:text-white font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button href="#contact" primary fullWidth>Get a Free Quote</Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;