import { Link } from 'react-router-dom';
import React from 'react';
import { Code } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <Code className="h-7 w-7 text-blue-400 mr-2" />
              <span className="text-xl font-bold">NeoForge</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              We build beautiful, functional websites that help businesses grow online.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a 
                  key={platform}
                  href={`#${platform}`}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  <div className="w-5 h-5" aria-hidden="true">
                    {/*social icons*/}
                    {platform[0].toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Careers', 'Our Team', 'Blog'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                {['Web Design', 'Web Development', 'E-commerce', 'SEO', 'Maintenance'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
  <h4 className="text-lg font-medium mb-4">Legal</h4>
  <ul className="space-y-2">
    <li>
      <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
        Privacy Policy
      </Link>
    </li>
    <li>
      <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
        Terms of Service
      </Link>
    </li>
    <li>
      <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
        Cookie Policy
      </Link>
    </li>
  </ul>
</div>

            
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500">
            &copy; {currentYear} NeoForge. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2 md:mt-0">
            Designed with ❤️ for better web experiences
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;