import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

        // toto jsou nase klice ale public ale stejne jestli je nekomu das tak te vykastruji adame
        const serviceID = 'service_94p9iec';
        const templateID = 'template_kzc77ei';
        const userID = 'FO1ZNGYE1T_4TpmrQ';

        emailjs.send(serviceID, templateID, formData, userID)
            .then(() => {
                alert('Thanks for your message! We');
                setFormData({ name: '', email: '', message: '' });
                console.log(formData);
                console.log("funguje");
            })
            .catch((error) => {
                console.error('Email sending error:', error);
                console.log("problem pico");
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto md:mx-0">
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-5">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    required
                ></textarea>
            </div>

            <Button type="submit" primary fullWidth>Send Message</Button>
        </form>
    );
};

export default ContactForm;
