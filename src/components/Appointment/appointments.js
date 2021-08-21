import React from 'react';
import '../../App.css';
import Appcards from './app_cards';
import GSFooter from '../GSFooter';
import GSNavbar from '../gs_navbar';


function Appoint() {
  return (
    <div>
       <GSNavbar />
      <div> 
      <Appcards />
      </div>
      <GSFooter />
    </div>

  );
}

export default Appoint;
