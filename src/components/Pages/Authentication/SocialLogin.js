import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import axios from 'axios';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleSignIn = async () => {
        await signInWithGoogle();
        const newUser = {
            email: user.email,
            userName: user.name,
        }
        console.log('user ', user);
        console.log('newuser ', newUser);
        axios.put(`http://localhost:4000/add-user/${user.email}`, newUser)
            .then(res => {
                console.log("token ", res.data?.token);
                localStorage.setItem('token', res.data?.token);
            })

    };
    return (
        <div>
            <div className='divider'></div>
            {error && <p className='text-warning my-3'>{error.message}</p>}
            <button
                onClick={handleSignIn}
                type="button" class={loading ? 'btn btn-outline btn-secondary w-full loading' : 'btn btn-outline btn-secondary w-full'}>
                Continue With Google
            </button>
        </div>
    );
};

export default SocialLogin;