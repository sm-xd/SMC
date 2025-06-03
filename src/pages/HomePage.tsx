import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import FeatureSection from '../components/home/FeatureSection';
import StatsSection from '../components/home/StatsSection';
import PackagesSection from '../components/home/PackagesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeatureSection />
      <StatsSection />
      <PackagesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;