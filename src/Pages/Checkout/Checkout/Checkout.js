import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className='container w-50'>
            <h1 className='text-primary my-4'>Please Checkout your booking</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Address</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                </Form.Group>

                <Link className='btn btn-primary' to='/checkoutmsg'>Submit</Link>

            </Form>
        </div>
    );
};

export default Checkout;