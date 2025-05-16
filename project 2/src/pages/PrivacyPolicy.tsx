import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300">
              We collect information that you provide directly to us, including when you:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-300">
              <li>Fill out forms on our website</li>
              <li>Create an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-300">
              <li>Provide and maintain our services</li>
              <li>Send you updates and marketing communications</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
            <p className="text-gray-300">
              We do not sell or rent your personal information to third parties. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-300">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;