import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Appcards() {
  return (
    <div className='cards'>
      <h1> Manage Appointments! </h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../images/img-book.jpg'
              text='Schedule appointment time slots that are available '
              label='Schedule Appointments'
              path='/Appointment/schedule'
            />
            <CardItem
              src='../images/gs2.jpg'
              text='Take a look at the new set of Appointments'
              label=' Appointment Requests '
              path='../tables/viewAppointment'
            />
            <CardItem
              src='../images/tick.jpg'
              text='Find out who has cancelled an Appointment'
              label='Confirmed Appointments'
              path='../tables/viewConfirmedAppointment'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Appcards;
