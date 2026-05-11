import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  // Icons as inline SVGs
  const UsersIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const ServicesIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );

  const LeadsIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );

  const DeliveryIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const QuoteIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M10 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4Z" />
      <path d="M19 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4Z" />
      <path d="M9 15v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const stats = [
    { value: '8', label: 'Team members', icon: UsersIcon },
    { value: '4', label: 'Core services', icon: ServicesIcon },
    { value: '50+', label: 'Leads/day', icon: LeadsIcon },
    { value: '5', label: 'Day delivery', icon: DeliveryIcon },
  ];

  const values = [
    'Accountability',
    'Execution',
    'Transparency',
    'Excellence',
    'Growth',
    'Scale'
  ];

  const team = [
    { initials: 'MY', name: 'Mohammed Yousuf Junaid', role: 'Founder, CEO & Chairman', area: 'Executive Leadership' },
    { initials: 'RR', name: 'Rawahab Ruknuddin', role: 'Founding Growth & Research Lead', area: 'Market Intelligence' },
    { initials: 'IA', name: 'Ibrahim Abdullah', role: 'Founding Sales Lead', area: 'Inbound Sales' },
    { initials: 'FR', name: 'Faris Ruknuddin', role: 'Founding Sales Lead', area: 'Outbound & Partnerships' },
    { initials: 'MA', name: 'Mohammed Ainan Armar', role: 'Founding Backend Engineer', area: 'Tech Lead' },
    { initials: 'UH', name: 'Umme Hani Khanam', role: 'Founding Product Engineer', area: 'Experience Lead' },
    { initials: 'HS', name: 'Harmeen Safoora', role: 'Founding Database Engineer', area: 'Data & Infrastructure' },
    { initials: 'MS', name: 'Mohammed Samaan', role: 'Founding Market Research Lead', area: 'Lead Generation' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#080A0E]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              8 people.<br />One <span className="text-lime">mission</span>.
            </h1>
            <p className="text-xl text-gray-300 font-mono leading-relaxed">
              We are an AI automation and digital growth agency dedicated to helping businesses automate repetitive workflows, 
              build professional online presence, and dominate their markets through intelligent, scalable technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#11151B] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-[#11151B] rounded-lg border border-white/10"
              >
                <div className="text-lime mb-3 flex justify-center">
                  <stat.icon />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-lime mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Philosophy */}
      <section className="py-20 bg-[#080A0E] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Automation should be <span className="text-lime">accessible</span>, powerful, and results-driven.
              </h2>
              <p className="text-gray-300 text-lg font-mono leading-relaxed mb-8">
                Thousands of businesses such as gyms, clinics, restaurants, tutoring centres, and courier companies 
                have no website, dead social media, and manual processes wasting hours every day. Big agencies ignore them. 
                <span className="text-lime"> We don't.</span>
              </p>
              <p className="text-gray-300 text-lg font-mono leading-relaxed">
                We find them on Google Maps, reach out with a real solution to their exact problem, and deliver it 
                within 5 business days. Website, automation, marketing, whatever they need to stop losing ground to competitors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-[#11151B] border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-[#11151B] rounded-lg border-l-4 border-lime"
          >
            <div className="text-lime mb-4 flex justify-center">
              <QuoteIcon />
            </div>
            <p className="text-xl md:text-2xl font-display font-bold text-white mb-4">
              "We are not waiting to be discovered. We go out and find the clients ourselves."
            </p>
            <p className="text-lime font-mono">Mohammed Yousuf Junaid</p>
            <p className="text-gray-500 text-sm">Founder & CEO, Omnimate</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#080A0E] border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              What we <span className="text-lime">stand for</span>.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4 bg-[#11151B] rounded-lg border border-white/5"
              >
                <CheckIcon />
                <span className="font-mono font-semibold">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#11151B] border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              8 people. <span className="text-lime">All in.</span>
            </h2>
            <p className="text-gray-400 font-mono max-w-2xl mx-auto">
              Every founding member owns their role fully. Daily reports. No excuses. One mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#11151B] p-6 rounded-lg border border-white/10 hover:border-lime/30 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-lime/10 flex items-center justify-center mb-4 border border-lime/30">
                  <span className="text-lime font-mono font-bold text-xl">{member.initials}</span>
                </div>
                <h3 className="text-lg font-display font-bold mb-1">{member.name}</h3>
                <p className="text-lime text-sm font-mono mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.area}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#080A0E] border-t border-lime/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Want to work with us?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-mono">
              We are always looking for the right projects and the right clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn-primary">Start a Project <span aria-hidden="true">-&gt;</span></button>
              </Link>
              <Link to="/contact">
                <button className="btn-outline">Message us on WhatsApp</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
