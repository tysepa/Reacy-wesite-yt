import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpeg'
              text='Explore the hidden waterfall deep inside the Rwanda Park'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='Gallery of Womens Opportunity Center in Rwanda '
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Kigali Full Day City Tour| Join Up Safaris Ikaze Iwacu Mu Rwanda'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='Hotel and Accommodation Booking at 100s of Thousands Destinations Worldwide. Get the Best Rate for Your Next Hotel Stay'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-1.jpeg'
              text='The city features a resort on the shores of Lake Kivu, with several hotels and three sandy beaches'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;