import React from 'react';
const Cars = (props) => {
    const{picture,name,review,rating}=props.car
    return (
        <div className='cars'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p><small>{review}</small></p>
            <p><small>{rating}</small></p>
        </div>
    );
};

export default Cars;