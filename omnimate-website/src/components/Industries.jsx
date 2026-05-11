// src/components/Industries.jsx
import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  'E-commerce', 'Healthcare', 'Finance', 'SaaS', 'Agencies', 'Real Estate',
  'E-commerce', 'Healthcare', 'Finance', 'SaaS', 'Agencies', 'Real Estate'
];

const Industries = () => {
  return (
    <section className="section bg-[#0A0A0A] overflow-hidden">
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

        <div className="relative">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 py-4">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 bg-[#141414] px-8 py-4 rounded-full border border-white/10 hover:border-lime/50 transition-all"
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