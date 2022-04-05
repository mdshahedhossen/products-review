import React from 'react';
import './Car.css'
const Cars = (props) => {
    const{picture,name,reviewr_img,reviewer_name,review,rating}=props.car
    return (
        <div className='cars'>
            <img src={picture} alt="" />
            <div className='car-elements'>
                <h4>Car Model: {name}</h4>
                <div className='reviewer-container'>
                    <div className='reviewer-img'>
                        <img src={reviewr_img} alt="" />
                    </div>
                    <div className='reviewer-name'>
                        <p className='reviewer'>{reviewer_name}</p>
                    </div>
                </div>
                <p><small className='review'>{review}</small></p>
                <p><small className='rating'>Rating: {rating}</small></p>
            </div>
        </div>
    );
};

export default Cars;