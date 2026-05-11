import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const ChatIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );

  const SocialIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );

  return (
    <>
      <section className="pt-32 pb-16 bg-[#080A0E]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Start a <span className="text-lime">Project</span>
            </h1>
            <p className="text-xl text-gray-300 font-mono">
              Global infrastructure for global operators. Tell us what you need.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#11151B]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Direct Access</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-lime"><ChatIcon /></div>
                  <div>
                    <p className="text-gray-400 text-sm">Prefer WhatsApp?</p>
                    <p>Message us directly. We respond fast.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-lime"><MailIcon /></div>
                  <div>
                    <p className="text-gray-400 text-sm">Email us</p>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:omnimate.work@gmail.com" className="hover:text-lime">omnimate.work@gmail.com</a>
                      <a href="mailto:omnimate.ai@gmail.com" className="hover:text-lime">omnimate.ai@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-lime"><SocialIcon /></div>
                  <div>
                    <p className="text-gray-400 text-sm">Follow us</p>
                    <div className="flex flex-col gap-1">
                      <a href="https://instagram.com/omnimate.ai" target="_blank" rel="noopener noreferrer" className="hover:text-lime">omnimate.ai</a>
                      <a href="https://linkedin.com/company/omnimateai" target="_blank" rel="noopener noreferrer" className="hover:text-lime">omnimateai</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#11151B] p-8 rounded-lg border border-white/10"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-mono mb-2">Name</label>
                  <input type="text" className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-mono mb-2">Company</label>
                  <input type="text" className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-mono mb-2">Email</label>
                  <input type="email" className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-mono mb-2">Project Overview</label>
                  <textarea rows={4} className="w-full bg-[#080A0E] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Send Brief <span aria-hidden="true">-&gt;</span></button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
