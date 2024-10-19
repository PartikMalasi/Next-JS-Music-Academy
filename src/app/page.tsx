import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedCoureses from './components/FeaturedCoureses';
import WhyChooseUs from './components/WhyChooseUs';

const Page: React.FC = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
     
      <HeroSection />
      <FeaturedCoureses />
      <WhyChooseUs />
    </main>
  );
};

export default Page;