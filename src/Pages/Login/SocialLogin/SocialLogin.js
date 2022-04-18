import React from 'react';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import facebook from '../../../images/facebook.png';


const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div className='d-flex justify-content-between'>

                <button className='btn btn-info'>
                    <img className='me-2' style={{ width: '35px' }} src={google} alt="" />
                    With Google
                </button>
                <button className='btn btn-info'>
                    <img className='me-2' style={{ width: '35px' }} src={facebook} alt="" />
                    With Facebook
                </button>

                <button className='btn btn-info'>
                    <img className='me-2' style={{ width: '35px' }} src={github} alt="" />
                    With Github
                </button>


            </div>
        </div>
    );
};

export default SocialLogin;