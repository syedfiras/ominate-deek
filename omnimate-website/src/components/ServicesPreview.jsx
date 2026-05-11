// src/components/ServicesPreview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Globe, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Automation',
    description: 'Workflows that run themselves. Reduce manual ops by 90%.',
    color: 'lime'
  },
  {
    icon: Globe,
    title: 'Web Infrastructure',
    description: 'Global-scale digital foundations. Fast, secure, resilient.',
    color: 'lime'
  },
  {
    icon: BarChart3,
    title: 'Growth Systems',
    description: 'Data-driven engines that scale revenue predictably.',
    color: 'lime'
  }
];

const ServicesPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Core <span className="text-lime">Infrastructure</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            We don't build websites. We build the systems that run your entire operation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-[#141414] p-8 rounded-lg border border-white/5 hover:border-lime/30 transition-all duration-300 hover-glow"
            >
              <service.icon className="text-lime mb-6" size={40} strokeWidth={1.5} />
              <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 font-mono text-sm">{service.description}</p>
              <Link to="/services" className="text-lime font-mono text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;