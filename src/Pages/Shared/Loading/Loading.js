import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '420px' }} className='w-100 d-flex justify-content-center align-item-center'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;