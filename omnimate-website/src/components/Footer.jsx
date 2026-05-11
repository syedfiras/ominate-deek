// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // SVG icons
  const TwitterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const MailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  return (
    <footer className="bg-[#11151B] border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              OMNIMATE<span className="text-lime">.</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Global automation infrastructure for growth-minded operators.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/omnimate.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime transition">
                <TwitterIcon />
              </a>
              <a href="https://linkedin.com/company/omnimateai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime transition">
                <LinkedinIcon />
              </a>
              <a href="https://github.com/omnimateai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime transition">
                <GithubIcon />
              </a>
              <a href="mailto:omnimate.work@gmail.com" className="text-gray-400 hover:text-lime transition">
                <MailIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4 text-lime">Navigate</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white text-sm">Services</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About</Link></li>
              <li><Link to="/work" className="text-gray-400 hover:text-white text-sm">Work</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4 text-lime">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">AI Automation</li>
              <li className="text-gray-400 text-sm">Web Infrastructure</li>
              <li className="text-gray-400 text-sm">Growth Systems</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono font-semibold mb-4 text-lime">Legal</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Privacy Policy</li>
              <li className="text-gray-400 text-sm">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; 2025 Omnimate - Global Automation Infrastructure. All systems operational.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
