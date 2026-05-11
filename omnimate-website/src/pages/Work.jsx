// src/pages/Work.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Work = () => {
  const ArrowRightIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  const projects = [
    {
      title: 'FinScale',
      category: 'Financial Automation',
      result: '70% cost reduction',
      image: '🏦'
    },
    {
      title: 'GrowthStack',
      category: 'Marketing Infrastructure',
      result: '40hrs/week saved',
      image: '📈'
    },
    {
      title: 'CloudPulse',
      category: 'Web Ops',
      result: '99.99% uptime',
      image: '☁️'
    }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-[#080808]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Client <span className="text-lime">Results</span>
            </h1>
            <p className="text-xl text-gray-300 font-mono">
              Real outcomes from real infrastructure builds. No vanity metrics.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#141414] rounded-lg overflow-hidden border border-white/10 hover:border-lime/30 transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800 to-[#080808] flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <span className="text-lime text-sm font-mono">{project.category}</span>
                  <h3 className="text-2xl font-display font-bold mt-2 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.result}</p>
                  <Link to="/contact" className="text-lime font-mono text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Case study → <ArrowRightIcon />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#141414] p-8 rounded-lg border border-lime/20 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-lime">200+</div>
                <div className="text-gray-400 mt-2">Businesses automated</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-lime">$0</div>
                <div className="text-gray-400 mt-2">Unused licenses</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-lime">24/7</div>
                <div className="text-gray-400 mt-2">Global support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;