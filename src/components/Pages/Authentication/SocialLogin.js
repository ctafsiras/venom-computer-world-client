import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //handle social login
    const handleSignIn = async () => {
        await signInWithGoogle();
    };
    const [token] = useToken(user);
    if (token) {
        return <Navigate to='/' />
    }
    return (
        <div>
            <div className='divider'></div>
            {error && <p className='text-warning my-3'>{error.message}</p>}
            <button
                onClick={handleSignIn}
                type="button" className={loading ? 'btn btn-outline btn-secondary w-full loading' : 'btn btn-outline btn-secondary w-full'}>
                Continue With Google
            </button>
        </div>
    );
};

export default SocialLogin;