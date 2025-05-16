import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-8 shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-gray-800 group hover:-translate-y-1">
      <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900/40 transition-colors">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-5">{description}</p>
      <a 
        href="#contact" 
        className="text-blue-400 font-medium inline-flex items-center hover:text-blue-300 transition-colors"
      >
        Learn More
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export default ServiceCard;