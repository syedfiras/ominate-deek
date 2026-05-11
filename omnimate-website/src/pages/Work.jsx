import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Work = () => {
  const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const ExternalIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );

  const projects = [
    {
      year: '2024',
      type: 'Enactus MLNC Website',
      title: 'Student entrepreneurship hub. Zero dead ends.',
      url: 'enactus-mlnc-website.vercel.app',
      href: 'https://enactus-mlnc-website.vercel.app',
      tags: ['Web Design', 'Development', 'Mobile-First'],
      stats: [
        { value: '6', label: 'Pages' },
        { value: '98', label: 'Mobile Score' },
        { value: '0.8s', label: 'Load Time' },
      ],
      preview: 'impact',
    },
    {
      year: '2024',
      type: 'Internal',
      title: 'Omnimate Internal Platform',
      description: 'Lead management, job tracking, and analytics.',
      url: 'omnimate.org',
      tags: ['Web App', 'SaaS', 'React'],
      stats: [
        { value: '12+', label: 'Routes' },
        { value: '3', label: 'Lead Sources' },
        { value: '8', label: 'Users' },
      ],
      preview: 'platform',
      internal: true,
    },
    {
      year: '2024',
      type: 'Internal',
      title: 'LeadScout Dashboard',
      description: 'Lead discovery, scoring, and export for sales teams.',
      url: 'LeadScout - Live Results',
      tags: ['Web App', 'Dashboard', 'Lead Gen'],
      stats: [
        { value: '3', label: 'Sources' },
        { value: '50+', label: 'Leads/Day' },
        { value: 'CSV', label: 'Export' },
      ],
      preview: 'leadscout',
      internal: true,
    },
  ];

  const ImpactPreview = () => (
    <div className="min-h-[360px] bg-[#080A0E] p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4 text-xs text-gray-400">
        <span>enactus-mlnc-website.vercel.app</span>
        <span className="rounded-full border border-lime/30 px-3 py-1 text-lime">Live</span>
      </div>

      <div className="rounded-lg border border-white/10 bg-[#11151B] p-6">
        <p className="mb-2 text-sm text-lime">Creating Impact Since 2014</p>
        <h3 className="mb-5 max-w-sm text-4xl font-display font-bold leading-tight">
          Empowering <span className="text-lime">Communities</span>
        </h3>
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-lime/10 px-3 py-1 text-lime">Social Entrepreneurship</span>
          <span className="flex items-center gap-2 text-gray-200">See Our Impact <ArrowRightIcon /></span>
        </div>
        <div className="border-t border-white/10 pt-5">
          <p className="mb-4 text-xs font-semibold uppercase text-gray-500">Our Impact</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ['10K+', 'Lives'],
              ['INR 10L+', 'Revenue'],
              ['4', 'Projects'],
              ['200+', 'People'],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-display font-bold text-lime">{value}</div>
                <div className="text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const PlatformPreview = () => (
    <div className="min-h-[360px] bg-[#080A0E] p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between text-xs text-gray-400">
        <span>omnimate.org</span>
        <span>Global Automation Infrastructure</span>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-white/10 bg-[#11151B] p-6">
          <p className="mb-4 text-sm text-gray-400">The central intelligence</p>
          <h3 className="mb-8 text-4xl font-display font-bold leading-tight">
            for businesses <span className="text-lime">at scale.</span>
          </h3>
          <div className="flex h-24 items-center justify-center rounded-lg border border-lime/20 bg-lime/5 text-4xl font-display font-bold text-lime">OM</div>
        </div>
        <div className="space-y-3">
          {['Lead inbox', 'Job tracker', 'Analytics'].map((item, index) => (
            <div key={item} className="rounded-lg border border-white/10 bg-[#11151B] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold">{item}</span>
                <span className="text-xs text-lime">0{index + 1}</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-lime" style={{ width: `${72 - index * 14}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const LeadScoutPreview = () => (
    <div className="min-h-[360px] bg-[#080A0E] p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm font-semibold text-lime">LeadScout - Live Results</p>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">Search</span>
      </div>
      <div className="mb-4 rounded-lg border border-white/10 bg-[#11151B] px-4 py-3 text-gray-200">
        dental clinics in Mumbai
      </div>
      <div className="space-y-3">
        {[
          ['Smile Dental Clinic', 'High Intent'],
          ['Pearl Orthodontics', 'Qualified'],
          ['Bright Smile Centre', 'Ready'],
        ].map(([name, status]) => (
          <div key={name} className="flex items-center justify-between rounded-lg border border-white/10 bg-[#11151B] p-4">
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-xs text-gray-500">Mumbai, Maharashtra</p>
            </div>
            <span className="rounded-full bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPreview = (preview) => {
    if (preview === 'impact') return <ImpactPreview />;
    if (preview === 'platform') return <PlatformPreview />;
    return <LeadScoutPreview />;
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-[#080A0E]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Work that <span className="text-lime">delivers.</span>
            </h1>
            <p className="text-xl text-gray-300 font-mono leading-relaxed">
              A few of the projects we've built. From student hubs to enterprise-grade dashboards, designed, shipped, and still running.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#11151B]">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#11151B]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr]">
                  <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
                    {renderPreview(project.preview)}
                  </div>

                  <div className="flex flex-col p-6 md:p-8">
                    <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
                      <span className="rounded-full border border-lime/30 px-3 py-1 text-lime">{project.year}</span>
                      <span className="text-gray-400">{project.type}</span>
                    </div>

                    <h2 className="mb-3 text-3xl font-display font-bold">{project.title}</h2>
                    {project.description && (
                      <p className="mb-6 text-gray-300">{project.description}</p>
                    )}

                    <div className="mb-6 grid grid-cols-3 gap-3">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="rounded-lg border border-white/10 bg-[#080A0E] p-4">
                          <div className="text-2xl font-display font-bold text-lime">{stat.value}</div>
                          <div className="mt-1 text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      {project.internal ? (
                        <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-lime hover:gap-3">
                          Internal tool - get in touch <ArrowRightIcon />
                        </Link>
                      ) : (
                        <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-lime hover:gap-3">
                          View Project <ExternalIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-lg border border-lime/20 bg-[#080A0E] p-8 text-center md:p-12"
          >
            <h2 className="mb-4 text-4xl md:text-5xl font-display font-bold">
              Your project <span className="text-lime">could be here.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              We take on 2-3 new projects per month. If you've got something worth building, let's talk.
            </p>
            <Link to="/contact">
              <button className="btn-primary mx-auto">
                Start a Project <ArrowRightIcon />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Work;
