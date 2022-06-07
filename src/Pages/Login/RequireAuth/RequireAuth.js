import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (!user.emailVerified) {
        return
        <div>
            <h3 className='text-danger'>Your Email is not Verified</h3>
            <h5 className='text-success'>Please verify your email</h5>
            <button className='btn btn-primary' onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
            }}>
                Send again
            </button>
        </div>
    }
    return children;
};

export default RequireAuth;