import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cards_gs from '../gs_cards';
import HeroSection from '../HeroSection';
import GSFooter from '../GSFooter';
import GSNavbar from '../gs_navbar';

function GSHome() {
  return (
    <>
      <GSNavbar />
      <HeroSection />
      <Cards_gs />
      <GSFooter />
    </>
  );
}

export default GSHome;
