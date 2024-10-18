import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedCoureses from './components/FeaturedCoureses';

const Page: React.FC = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
     
      <HeroSection />
      <FeaturedCoureses />
    </main>
  );
};

export default Page;