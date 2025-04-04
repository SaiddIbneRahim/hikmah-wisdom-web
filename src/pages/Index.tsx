
import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import FeatureSection from '../components/home/FeatureSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsSection from '../components/home/NewsSection';
import CampusSection from '../components/home/CampusSection';
import CallToAction from '../components/home/CallToAction';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Al-Hikmah Senior Secondary School | Excellence in Education</title>
        <meta name="description" content="Al-Hikmah Senior Secondary School provides quality education that balances academic excellence with moral values. Join our community today!" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <FeatureSection />
        <CampusSection />
        <TestimonialsSection />
        <NewsSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Index;
