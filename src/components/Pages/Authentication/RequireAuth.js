import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';


//require auth function
const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <progress className="progress w-full"></progress>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;