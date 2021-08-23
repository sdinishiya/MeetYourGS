import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Services() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
      <h1 className='services'>Services</h1>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Services;
