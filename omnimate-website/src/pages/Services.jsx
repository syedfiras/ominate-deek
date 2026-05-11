// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="2" x2="9" y2="4"></line>
          <line x1="15" y1="2" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="22"></line>
          <line x1="15" y1="20" x2="15" y2="22"></line>
          <line x1="20" y1="9" x2="22" y2="9"></line>
          <line x1="20" y1="14" x2="22" y2="14"></line>
          <line x1="2" y1="9" x2="4" y2="9"></line>
          <line x1="2" y1="14" x2="4" y2="14"></line>
        </svg>
      ),
      title: 'AI Automation',
      description: 'Custom AI agents and workflow automation that eliminate manual processes. Connect your CRM, email, data pipelines, and more.',
      features: ['Process Automation', 'AI Decision Engines', 'Data Extraction', 'Smart Notifications']
    },
    {
      icon: () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        </svg>
      ),
      title: 'Web Infrastructure',
      description: 'Global-scale digital foundations built for performance, security, and resilience. Serverless, edge-ready, and fully audited.',
      features: ['Edge Computing', 'CDN Integration', 'DDoS Protection', '99.99% Uptime SLA']
    },
    {
      icon: () => (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
        </svg>
      ),
      title: 'Growth Systems',
      description: 'Predictable revenue engines powered by real-time data. Marketing automation, analytics, and conversion infrastructure.',
      features: ['Multi-channel Attribution', 'Predictive Scoring', 'Automated Campaigns', 'Data Warehousing']
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
              Infrastructure <span className="text-lime">Services</span>
            </h1>
            <p className="text-xl text-gray-300 font-mono">
              We build the backbone of your digital operations. No fluff. No legacy constraints. Pure engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, idx) => (
        <section key={idx} className={`py-16 ${idx % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[#080808]'} border-t border-white/5`}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="text-lime mb-6">{service.icon()}</div>
                <h2 className="text-4xl font-display font-bold mb-4">{service.title}</h2>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, i) => (
                    <span key={i} className="bg-[#141414] px-3 py-1 rounded-full text-sm font-mono border border-white/10">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#141414] p-8 rounded-lg border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-lime/5 to-transparent rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lime text-6xl mb-4">⚡</div>
                    <p className="font-mono text-sm text-gray-400">Enterprise-grade infrastructure</p>
                    <p className="font-mono text-xs text-gray-500 mt-2">Deployed globally in hours, not months</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Services;