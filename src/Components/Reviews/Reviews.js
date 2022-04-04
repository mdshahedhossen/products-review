import React from 'react';
import useCars from '../../hooks/UsesCar';
import Cars from '../Cars/Cars';
import './Reviews.css'

const Reviews = () => {
    const[cars,setCars]=useCars()
    return (
        <div className='reviews-container'>
            <h1 className='say-text'>What Our Customers Say!!</h1>
            <div className='custom-reviews'>
                {
                     cars.map(car=><Cars 
                        key={car.id}
                        car={car}
                    ></Cars>)
                }
            </div>
        </div>
    );
};

export default Reviews;