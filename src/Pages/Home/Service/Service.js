import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, details, img, price } = service;
    return (
        <div className='service'>
            <div className='service-img'>
                <img className='w-100' src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p className='service-details'><small>Description: {details}</small></p>
            <button className='btn btn-dark'>Book Now</button>
        </div>
    );
};

export default Service;