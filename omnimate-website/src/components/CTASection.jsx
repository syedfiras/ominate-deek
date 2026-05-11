// src/components/CTASection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const ArrowRightIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  return (
    <section className="py-20 bg-[#0A0A0A] border-t border-b border-lime/20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Ready to <span className="text-lime">Automate?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto font-mono">
            Stop managing systems. Start scaling operations.
          </p>
          <Link to="/contact">
            <button className="btn-primary text-lg px-8 py-4 flex items-center gap-2 mx-auto">
              Let's Build → <ArrowRightIcon />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;