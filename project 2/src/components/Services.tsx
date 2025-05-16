import React from 'react';
import ServiceCard from './ServiceCard';
import { Palette, Code2, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Professional and modern designs that captivate your audience and reflect your brand identity.',
      icon: Palette
    },
    {
      title: 'Web Development',
      description: 'Custom, responsive websites built with the latest technologies to ensure fast load times and seamless functionality.',
      icon: Code2
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support to keep your website secure, optimized, and up-to-date.',
      icon: Settings
    }
  ];

  return (
    <section id="services" className="py-20 bg-premium-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide end-to-end web solutions to help your business establish a powerful online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services