import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies</h2>
            <p className="text-gray-300">
              Cookies are small text files that are placed on your computer by websites that you visit.
              They are widely used in order to make websites work, or work more efficiently, as well
              as to provide information to the owners of the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-300">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-300">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: To understand how visitors interact with our website</li>
              <li>Preference cookies: To remember your settings and preferences</li>
              <li>Marketing cookies: To deliver more relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Managing Cookies</h2>
            <p className="text-gray-300">
              Most web browsers allow you to control cookies through their settings preferences.
              However, if you limit the ability of websites to set cookies, you may worsen your
              overall user experience.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;