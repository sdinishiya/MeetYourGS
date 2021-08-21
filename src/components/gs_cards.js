import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards_gs() {
  return (
    <div className='cards'>
      <h1> Hi GS! Welcome </h1>
      <h3> Udapalatha GS wasama under the Kandy Division Secretariate, looks forward to serve public through this platform </h3>

      {/* <h1> Our Services </h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-form.jpg'
              text='Download official forms online!'
              label='Forms'
              path='/forms/form2'
            />
            <CardItem
              src='images/img-cons.jpg'
              text='View Past Projects, Current projects and Projects planned in the future  '
              label='Projects'
              path='/projects/grids/PresentProjects'
            />
            <CardItem
              src='images/img-rec.png'
              text='Resource and material Distribution details'
              label='Resource'
              path='/resourcematerial/card1'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards_gs;
