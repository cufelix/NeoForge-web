import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message (in a real app, you'd want to use a toast or alert component)
    alert('Thanks for your message! We\'ll get back to you soon.');
  };

return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto md:mx-0">
      <div className="mb-5">
        <label htmlFor="name" className="block text-sm font-medium text-gray-250 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      
      <div className="mb-5">
        <label htmlFor="email" className="block text-sm font-medium text-gray-250 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      
      <div className="mb-5">
        <label htmlFor="message" className="block text-sm font-medium text-gray-250 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          required
        ></textarea>
      </div>
      
      <Button type="submit" primary fullWidth>Send Message</Button>
    </form>
  );
};

export default ContactForm;