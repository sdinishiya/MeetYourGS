import React from 'react';
// import Navbar from './components/Navbar';
import '../../App.css';
import Cards from '../Cards';
import Cards1 from '../Notice';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      {/* <Cards1 /> */}
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
