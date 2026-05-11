// src/components/Results.jsx
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10x', label: 'Faster Workflows' },
  { value: '80%', label: 'Cost Reduction' },
  { value: '200+', label: 'Businesses Automated' }
];

const testimonials = [
  {
    text: "Omnimate rebuilt our entire digital infrastructure. We cut operational costs by 70% in 3 months.",
    author: "Alex Chen",
    role: "CTO, FinScale"
  },
  {
    text: "The automation systems they built save us 40 hours per week. It's like hiring a team of engineers.",
    author: "Sarah Jones",
    role: "CEO, GrowthStack"
  },
  {
    text: "Finally a partner that thinks like an infrastructure company, not a design agency. Game changer.",
    author: "Marcus Wright",
    role: "COO, CloudPulse"
  }
];

const Results = () => {
  return (
    <section className="section bg-[#080A0E]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Measurable <span className="text-lime">Outcomes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 border border-white/10 rounded-lg bg-[#11151B]"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-lime mb-2">{stat.value}</div>
              <div className="text-gray-300 font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#11151B] p-6 rounded-lg border border-white/5"
            >
              <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-mono font-bold text-lime">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;