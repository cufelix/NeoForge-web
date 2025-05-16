import React from 'react';

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, imageUrl }) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-premium group hover:shadow-premium-hover transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <p className="text-sm text-blue-400 mb-1">{category}</p>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "E-commerce Store",
      category: "Web Development",
      imageUrl: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Financial Services Portal",
      category: "Web Application",
      imageUrl: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Health & Wellness Blog",
      category: "Content Management",
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Restaurant Booking System",
      category: "Web Application",
      imageUrl: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem 
              key={index}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#portfolio"
            className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
          >
            View All Projects
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
      </div>
    </section>
  );
};

export default Portfolio;