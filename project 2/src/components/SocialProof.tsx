import React from 'react';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Businesses</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've helped companies of all sizes achieve their online goals.
          </p>
        </div>
        
        {/* Client logos */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {['Company A', 'Company B', 'Company C', 'Company D'].map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="py-3 px-6 bg-dark-800 rounded-lg text-gray-300 font-medium border border-gray-800">
                {company}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
       <div className="max-w-3xl mx-auto bg-dark-800 rounded-lg p-8 mb-16 shadow-premium border border-gray-800">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
            ))}
          </div>
          <blockquote className="text-lg md:text-xl text-gray-300 mb-6">
            "NeoForge transformed our online presence completely. Their team delivered a beautiful, high-performing website 
            that's easy to manage and has significantly increased our leads. The entire process was smooth and professional."
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-400 font-medium">AP</span>
            </div>
            <div>
              <p className="font-medium text-white">Jane Doe</p>
              <p className="text-gray-400 text-sm">CEO, Example Company</p>
            </div>
          </div>
        </div>
        
        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {[
            { number: '100+', label: 'Websites Delivered' },
            { number: '95%', label: 'Client Satisfaction' },
            { number: '10+', label: 'Years Experience' }
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{metric.number}</p>
              <p className="text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;