import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    const { serviceId } = useParams();
    // const { name, id, price, details, img } = service;

    return (
        <div>
            <h2 className='text-center my-3'>Welcome to service details</h2>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;