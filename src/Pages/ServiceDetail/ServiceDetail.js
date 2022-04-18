import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h2 className='text-center my-3'>Welcome to service details: {serviceId} <br />

            </h2>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;