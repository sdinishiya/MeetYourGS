import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Card1() {
  return (
    <div className='cards'>
      <h1> Available Stock Details </h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-const.jpg'
              text='Construction Materials'
              label='Resource'
              path='/resourcematerial/const.materials1'
            />
            <CardItem
              src='../images/img-Agri.jpg'
              text='Agriculture Materials'
              label='Resource'
              path='/resourcematerial/agri.materials1'
            />
            <CardItem
              src='../images/img-others.jpg'
              text='Other Materials'
              label='Resource'
              path='/resourcematerial/othermaterials1'
            />
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default Card1;
