import React from 'react';
import HeroSection from './components/HeroSection';

const Page: React.FC = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
     
      <HeroSection />
    </main>
  );
};

export default Page;