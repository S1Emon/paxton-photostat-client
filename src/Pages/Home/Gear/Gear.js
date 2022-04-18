import React from 'react';

const Gear = ({ gear }) => {
    const { name, img, details } = gear;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "20rem" }}>
                <img className='img-fluid' src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <button className='btn btn-dark'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Gear;