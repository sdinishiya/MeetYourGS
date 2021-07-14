import React from 'react';
import Footer from '../Footer';

import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
