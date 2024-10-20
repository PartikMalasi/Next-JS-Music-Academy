import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedCoureses from './components/FeaturedCoureses';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import UpcomingSeminar from './components/UpcomingSeminar';
import Instructor from './components/Instructor';
import Footer from './components/Footer';

const Page: React.FC = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
     
      <HeroSection />
      <FeaturedCoureses />
      <WhyChooseUs />
      <Testimonials />
      <UpcomingSeminar />
      <Instructor />
      
    </main>
  );
};

export default Page;