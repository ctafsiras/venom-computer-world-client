import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <progress class="progress w-56"></progress>
    }
    if (!user) {
        return <Navigate to='/' />
    }
    return children;
};

export default RequireAuth;