import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(user);
    return (
        <div>
            <div className='divider'></div>
            {error && <p className='text-warning my-3'>{error.message}</p>}
            <button
                onClick={() => signInWithGoogle()}
                type="button" class={loading ? 'btn btn-outline btn-secondary w-full loading' : 'btn btn-outline btn-secondary w-full'}>
                Continue With Google
            </button>
        </div>
    );
};

export default SocialLogin;