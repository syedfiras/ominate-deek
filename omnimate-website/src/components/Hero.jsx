import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'We Build the Infrastructure That Runs Your Business.';

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080A0E] pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: ['-12%', '0%'] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className="absolute inset-y-0 left-0 w-[120%]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <motion.div
          animate={{ y: ['0%', '18%'], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className="absolute -right-24 top-10 h-80 w-80 rounded-full border border-white/10"
        />
        <motion.div
          animate={{ y: ['0%', '-16%'], opacity: [0.08, 0.22, 0.08] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          className="absolute -left-32 bottom-12 h-96 w-96 rounded-full border border-white/10"
        />
        <div className="absolute inset-0 bg-[#080A0E]/72" />
      </div>

      <div className="absolute inset-x-0 top-24 border-t border-white/10" />
      <div className="absolute inset-x-0 bottom-16 border-t border-white/10" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-normal text-gray-400">
            Omnimate | Automation Infrastructure
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-normal mb-6 text-white">
            {displayText}
            <span className="animate-pulse text-lime">_</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-mono leading-relaxed"
          >
            AI automation | Digital systems | Growth infrastructure, globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/work">
              <button className="btn-primary flex items-center gap-2">
                See Our Work <ArrowIcon />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-outline flex items-center gap-2">
                Book a Call <PhoneIcon />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
