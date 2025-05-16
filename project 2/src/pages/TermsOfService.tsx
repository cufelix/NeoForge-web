import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using this website, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p className="text-gray-300">
              Permission is granted to temporarily download one copy of the materials (information
              or software) on NeoForge's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p className="text-gray-300">
              The materials on NeoForge's website are provided on an 'as is' basis. NeoForge makes
              no warranties, expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;