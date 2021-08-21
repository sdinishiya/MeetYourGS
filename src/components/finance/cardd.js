import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cardd() {
  return (
    <div className='cards'>
      <h1> Finance Details </h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/pettycash.png'
              text='Petty Cash'
              label='Finance'
              path='/finance/viewFinance'
            />
            <CardItem
              src='../images/project.jpg'
              text='Fund Allocation for Projects'
              label='Finance'
              path='/finance/projectfund'
            />
        
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default Cardd;
