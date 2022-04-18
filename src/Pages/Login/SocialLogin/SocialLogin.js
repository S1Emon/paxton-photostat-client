import React from 'react';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import facebook from '../../../images/facebook.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-between'>

                <button onClick={() => signInWithGoogle()} className='btn btn-info'>
                    <img className='me-2' style={{ width: '35px' }} src={google} alt="" />
                    With Google
                </button>
                <button className='btn btn-info'>
                    <img className='me-2' style={{ width: '35px' }} src={facebook} alt="" />
                    With Facebook
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-info'>
                    <img className='me-2' style={{ width: '35px' }} src={github} alt="" />
                    With Github
                </button>


            </div>
        </div>
    );
};

export default SocialLogin;