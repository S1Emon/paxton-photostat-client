import React from 'react';
import not from '../../../images/not.png'

const NotFound = () => {
    return (
        <div className='text-center my-auto'>
            <img src={not} alt="" />
            <h3>Page Not Found</h3>
        </div>
    );
};

export default NotFound;