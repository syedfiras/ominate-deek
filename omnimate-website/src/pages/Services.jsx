import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const services = [
    {
      number: '01',
      nav: 'Web Design & Development',
      title: 'Web Design & Development',
      headline: 'Your website is your first salesperson.',
      description:
        'We build custom websites that are fast, mobile-first, and designed to convert visitors into clients. Every site we deliver is SEO-optimised, performance-tested, and handed to you with full ownership, with no lock-in, ever.',
      stats: [
        { value: '<2s', label: 'Load time' },
        { value: '5', label: 'Day delivery' },
        { value: '100%', label: 'You own the code' },
      ],
      get: [
        'Custom UI/UX design in Figma',
        'React + Vite development',
        'Mobile-first on every breakpoint',
        'SEO setup and Google Business optimisation',
        'Page speed under 2 seconds on 4G',
        'Deployed on Vercel with cache headers',
        'Full code handoff, you own everything',
      ],
      audience: [
        'Local businesses with no website',
        'Businesses with outdated sites losing clients',
        'Startups needing a credible launch presence',
        'Colleges, clinics, NGOs needing clean digital presence',
      ],
    },
    {
      number: '02',
      nav: 'AI Automation',
      title: 'AI Automation',
      headline: 'Stop doing manually what machines can do instantly.',
      description:
        "We automate the repetitive workflows that are draining your team's time every day. Bookings, invoices, customer follow-ups, inventory management, reports, built using n8n, Make, or custom AI scripts. Saves hours from week one.",
      stats: [
        { value: '10+', label: 'Hours saved/week' },
        { value: 'Week 1', label: 'Results from' },
        { value: 'Unlimited', label: 'Scalable' },
      ],
      get: [
        'Booking and appointment automation',
        'Invoice generation and follow-up sequences',
        'Customer communication workflows',
        'Inventory tracking and alerts',
        'Automated reporting dashboards',
        'CRM integration and lead routing',
        'Custom AI scripts for your specific workflow',
      ],
      audience: [
        'Restaurants taking bookings by phone',
        'Clinics managing appointments manually',
        'Retail shops tracking inventory in spreadsheets',
        'Any business with repetitive daily tasks',
      ],
    },
    {
      number: '03',
      nav: 'Marketing & SEO',
      title: 'Marketing & SEO',
      headline: 'Invisible businesses lose clients every day.',
      description:
        'We turn businesses that nobody can find into ones that appear first when their customers are searching. Social media templates, content calendars, Google Ads setup, SEO audits, and keyword strategy, all done for you.',
      stats: [
        { value: '#1', label: 'Goal: rank first' },
        { value: 'Monthly', label: 'Retainer option' },
        { value: '30 Days', label: 'First results' },
      ],
      get: [
        'Full SEO audit and keyword research',
        'Google Business Profile optimisation',
        'Social media content templates',
        'Monthly content calendar',
        'Google Ads setup and management',
        'Competitor analysis and positioning',
        'Monthly performance reporting',
      ],
      audience: [
        'Businesses with dead or inactive social media',
        'Local services not showing on Google Maps',
        'Companies spending on ads with no strategy',
        'Any business that wants more inbound leads',
      ],
    },
    {
      number: '04',
      nav: 'SaaS Products',
      title: 'SaaS Products',
      headline: 'Turn your recurring needs into recurring revenue.',
      description:
        'For clients with ongoing operational needs, we package solutions into subscription software products. You get a tool tailored to your business. We generate monthly recurring revenue. Both sides win long term.',
      stats: [
        { value: 'MRR', label: 'Revenue model' },
        { value: 'Custom', label: 'Built for you' },
        { value: 'Long-term', label: 'Partnership' },
      ],
      get: [
        'Custom SaaS product scoping and design',
        'Full-stack development and deployment',
        'Subscription billing integration',
        'User authentication and role management',
        'Dashboard and analytics built in',
        'Ongoing maintenance and updates',
        'Revenue share or flat monthly model',
      ],
      audience: [
        'Businesses with a problem no tool solves well',
        'Operations needing a custom internal platform',
        'Companies ready to productise their workflow',
        'Clients wanting LeadScout-style tools for their niche',
      ],
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery call',
      description: 'We understand your business, your problem, and what success looks like. 30 minutes. No pressure.',
    },
    {
      number: '02',
      title: 'Proposal & scope',
      description: 'We send a clear scope of work, timeline, and pricing within 24 hours. No surprises.',
    },
    {
      number: '03',
      title: 'Design & build',
      description: 'We design first, you approve, then we build. You see it before we ship it.',
    },
    {
      number: '04',
      title: 'Deliver & hand off',
      description: 'Deployed, tested, and handed to you within 5 business days. Full ownership. Full support.',
    },
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-[#080A0E]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Four services.<br />
              One team that <span className="text-lime">delivers.</span>
            </h1>
            <p className="text-xl text-gray-300 font-mono leading-relaxed">
              Web design, AI automation, marketing, and SaaS products, all under one roof. We find the clients, scope the work, and deliver within 5 business days.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.number}
                href={`#service-${service.number}`}
                className="group rounded-lg border border-white/10 bg-[#11151B] p-4 transition hover:border-lime/40 hover:bg-[#1A2029]"
              >
                <span className="mb-2 block text-sm font-semibold text-lime">{service.number}</span>
                <span className="text-sm font-semibold text-gray-200 group-hover:text-white">{service.nav}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, idx) => (
        <section
          key={service.number}
          id={`service-${service.number}`}
          className={`py-20 ${idx % 2 === 0 ? 'bg-[#11151B]' : 'bg-[#080A0E]'} border-t border-white/5 scroll-mt-24`}
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div>
                <span className="mb-4 inline-flex rounded-full border border-lime/30 px-4 py-2 text-sm font-semibold text-lime">
                  {service.number}
                </span>
                <h2 className="mb-4 text-4xl md:text-5xl font-display font-bold">{service.title}</h2>
                <p className="mb-5 text-2xl font-display font-bold text-gray-100">{service.headline}</p>
                <p className="text-lg leading-relaxed text-gray-300">{service.description}</p>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {service.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-white/10 bg-[#11151B] p-4">
                      <div className="text-2xl font-display font-bold text-lime">{stat.value}</div>
                      <div className="mt-1 text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-[#11151B] p-6">
                  <h3 className="mb-5 text-xl font-display font-bold">What you get</h3>
                  <ul className="space-y-3">
                    {service.get.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-gray-300">
                        <span className="mt-0.5 shrink-0 text-lime"><CheckIcon /></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg border border-white/10 bg-[#11151B] p-6">
                  <h3 className="mb-5 text-xl font-display font-bold">Who this is for</h3>
                  <ul className="space-y-3">
                    {service.audience.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-gray-300">
                        <span className="mt-0.5 shrink-0 text-lime"><CheckIcon /></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-[#11151B] border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-4xl"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-5">
              Discovery to delivery.<br />
              In days, <span className="text-lime">not months.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-lg border border-white/10 bg-[#11151B] p-6"
              >
                <span className="mb-5 block text-sm font-semibold text-lime">{step.number}</span>
                <h3 className="mb-3 text-xl font-display font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#080A0E] border-t border-lime/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-5 text-4xl md:text-6xl font-display font-bold">Ready to get started?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Tell us which service you need. We'll respond within 24 hours with a clear plan.
            </p>
            <Link to="/contact">
              <button className="btn-primary mx-auto text-lg">
                Start a Project <ArrowRightIcon />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
