import React from 'react';
import ContactForm from './ContactForm';
import { Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-premium-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your project? Contact us today for a free consultation.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
          
          {/* Contact information */}
          <div className="w-full md:w-1/2">
            <div className="bg-dark-800 rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">Phone</p>
                    <p className="text-base">+420 737 400 971</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">Email</p>
                    <p className="text-base">info@NeoForge.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">Business Hours</p>
                    <p className="text-base">Monday - Friday: 9AM - 5PM</p>
                    <p className="text-base">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                    <a 
                      key={platform}
                      href={`#${platform}`}
                      className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5" aria-hidden="true">
                        {platform[0].toUpperCase()}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
