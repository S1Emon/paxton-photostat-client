import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { name, details, img, price, id } = service;
    const navigate = useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <div className='service-img'>
                <img className='w-100' src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <h5>Price: <span className='text-warning'>${price}</span></h5>
            <p className='service-details'><small>{details}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-dark'>Book Now</button>
        </div>
    );
};

export default Service;