import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return <section>
    <div className='title'>
      <h2>Our Tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((tour)=>{
        return <Tour {...tour} key={tour.id} removeTour={removeTour} />
      })}
    </div>
  </section>;
};

export default Tours;
