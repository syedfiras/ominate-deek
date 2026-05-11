// src/components/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Audit', desc: 'We analyze your current ops and identify automation opportunities.' },
  { number: '02', title: 'Architect', desc: 'Design custom infrastructure tailored to your growth trajectory.' },
  { number: '03', title: 'Automate', desc: 'Deploy AI agents and workflows that eliminate repetitive tasks.' },
  { number: '04', title: 'Scale', desc: 'Continuous optimization as your business expands globally.' }
];

const HowItWorks = () => {
  return (
    <section className="section bg-[#080808]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How We <span className="text-lime">Build</span>
          </h2>
          <p className="text-gray-400 font-mono">Direct. Systematic. Repeatable.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-6 bg-[#141414] rounded-lg border-l-4 border-lime"
            >
              <span className="text-lime font-mono text-sm">{step.number}</span>
              <h3 className="text-xl font-display font-bold mt-2 mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
              {idx < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-lime text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;