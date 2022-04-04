import React from 'react';
import './Car.css'
const Cars = (props) => {
    const{picture,name,reviewer_name,review,rating}=props.car
    return (
        <div className='cars'>
            <img src={picture} alt="" />
            <h4>Car Model: {name}</h4>
            <p>Reviewer: {reviewer_name}</p>
            <p>Review: <small>{review}</small></p>
            <p><small>Rating: {rating}</small></p>
        </div>
    );
};

export default Cars;