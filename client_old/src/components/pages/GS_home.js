import React from 'react';
import '../../App.css';
import Cards_gs from '../gs_cards';
import HeroSection from '../HeroSection';
import GSFooter from '../GSFooter';
import GSNavbar from '../gs_navbar';

function GSHome() {
  return (
    <React.Fragment>
      <GSNavbar />
      <HeroSection />
      <Cards_gs />
      <GSFooter />
    </React.Fragment>
  );
}

export default GSHome;
