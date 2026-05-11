// src/components/Industries.jsx
import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  'E-commerce', 'Healthcare', 'Finance', 'SaaS', 'Agencies', 'Real Estate',
  'Education', 'Clinics', 'Restaurants', 'NGOs', 'Local Services', 'Startups'
];

const Industries = () => {
  return (
    <section className="section bg-[#11151B] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Deployed Across <span className="text-lime">Sectors</span>
          </h2>
          <p className="text-gray-400 font-mono">Global infrastructure for growth-minded operators</p>
        </motion.div>

        <div className="relative overflow-hidden marquee-mask py-4">
          <div className="marquee-track flex w-max gap-4">
            {[...industries, ...industries].map((industry, idx) => (
              <motion.div
                key={`${industry}-${idx}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 bg-[#11151B] px-8 py-4 rounded-full border border-white/10 hover:border-lime/50 transition-all"
              >
                <span className="font-mono font-semibold">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
