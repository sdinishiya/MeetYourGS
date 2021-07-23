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
              src='images/img-book.jpg'
              text='Schedule appoitnments according to your convenience with your GS'
              label='Appointments'
              path='/appointment'
            />
            <CardItem
              src='images/img-form.jpg'
              text='Download official forms online!'
              label='Forms'
              path='/forms/form2'
            />
            <CardItem
              src='images/img-donate.jpg'
              text='Make donations and become a donor!'
              label='Donations'
              path='/Donations/donate2'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-cons.jpg'
              text='View Past Projects, Current projects and Projects planned in the future  '
              label='Projects'
              path='/projects/grids/PresentProjects'
            />
            <CardItem
            src='images/img-forum.jpg'
            text='Questions? Get them answered'
            label='Forum Discussions'
            path='/public_viewforum'
          />
            <CardItem
              src='images/img-rec.jpg'
              text='Resource and material Distribution details'
              label='Resource'
              path='/resourcematerial/card'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
