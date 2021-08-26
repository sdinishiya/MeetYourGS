import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Card1() {
  return (
    <div className='cards'>
      <h1> Available Resource Materials </h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/Constmaterials.jpg'
              text='Construction Materials'
              label='Construction'
              path='/resourcematerial/const.materials1'
            />
            <CardItem
              src='../images/img-Agri.jpg'
              text='Agriculture Materials'
              label='Agriculture'
              path='/resourcematerial/agri.materials1'
            />
            <CardItem
              src='../images/othermaterials.jpg'
              text='Other Materials'
              label='Dry Rations'
              path='/resourcematerial/othermaterials1'
            />
          </ul>
        
        </div>
      </div>
    </div>
  );
}

export default Card1;
