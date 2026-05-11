// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#080808]">
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

      <section className="py-16 bg-[#0A0A0A]">
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
                  <Mail className="text-lime" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:hello@omnimate.org" className="hover:text-lime">hello@omnimate.org</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-lime" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Signal / Telegram</p>
                    <a href="tel:+1234567890" className="hover:text-lime">+1 (234) 567-890</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-lime" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Global HQ</p>
                    <p>Remote-first · SF · NYC · LDN · SG</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="text-lime" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Book directly</p>
                    <a href="#" className="hover:text-lime">cal.com/omnimate</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141414] p-8 rounded-lg border border-white/10"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-mono mb-2">Name</label>
                  <input type="text" className="w-full bg-[#080808] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-mono mb-2">Company</label>
                  <input type="text" className="w-full bg-[#080808] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-mono mb-2">Email</label>
                  <input type="email" className="w-full bg-[#080808] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-mono mb-2">Project Overview</label>
                  <textarea rows={4} className="w-full bg-[#080808] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Send Brief →</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;