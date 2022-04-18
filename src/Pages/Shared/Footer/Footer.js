import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5 bg-dark'>
            <div className='text-white d-flex justify-content-center'>
                <h3 className='me-4'>Facebook</h3>
                <h3 className='me-4'>Twitter</h3>
                <h3>LinkedIn</h3>
            </div>
            <p className='text-white'><small>Copyright &copy; {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;