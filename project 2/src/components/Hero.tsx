import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 lg:pt-28 pb-16 md:pb-24 overflow-hidden bg-premium-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              We Build Websites That Drive Results
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Custom web solutions crafted with cutting-edge technology and beautiful design to help your business stand out and succeed online.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button href="#contact" primary>Get a Free Quote</Button>
              <Button href="#services" secondary>Our Services</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="rounded-lg shadow-premium overflow-hidden bg-dark-800 p-2">
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Modern website design on devices" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-400 rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;