import React from 'react';
import { Brain, Sparkles, Gauge, Lock } from 'lucide-react';

const TechFeatures: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Leveraging cutting-edge artificial intelligence for smarter, more intuitive user experiences and automated content optimization.'
    },
    {
      icon: Sparkles,
      title: 'Smooth Animations',
      description: 'Carefully crafted micro-interactions and transitions using the latest animation techniques for a polished, engaging interface.'
    },
    {
      icon: Gauge,
      title: 'Lightning Fast',
      description: 'Optimized performance with next-gen technologies ensuring your website loads in milliseconds, not seconds.'
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures and best practices to keep your data and users protected at all times.'
    }
  ];

  return (
    <section className="py-16 bg-premium-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powered by Latest Technology
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine cutting-edge technologies with proven methodologies to deliver exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-gray-800"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechFeatures;