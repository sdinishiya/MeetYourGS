import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function GSFooter() {
  return (
   
    <div className='gsfooter-container'>
      <div class='footer-links'>
        <div class='footer-link-items'>
            <Link to='/GS_home'>MYGS © 2021</Link>
          </div>
        </div>
      </div>
    
  );
}

export default GSFooter;
