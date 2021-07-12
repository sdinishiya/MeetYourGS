import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/gs3.jpg' />
      <h1>MEET YOUR GS</h1>
      <h3>UDAPALATHA GS WASAMA</h3>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
