import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> Hi there! Welcome to MeetYourGS </h1>
      <h3> We are the Udapalatha GS wasama under the Kandy Division Secretariate. We look forward to serve you more through this platform.</h3>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Schedule appoitnments according to your convenience with your GS'
              label='Appointments'
              path='/appointment'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Questions? Get them answered'
              label='Forum'
              path='/forum'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Download official forms online!'
              label='Forms'
              path='/forms'
            />
            <CardItem
              src='images/img-4.jpg'
              text='View Past Projects, Current projects and Projects planned in the future  '
              label='Projects'
              path='/projects'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Make donations and become a donor!'
              label='Donations'
              path='/donations'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
