// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import HowItWorks from '../components/HowItWorks';
import Industries from '../components/Industries';
import Results from '../components/Results';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <HowItWorks />
      <Industries />
      <Results />
      <CTASection />
    </>
  );
};

export default Home;