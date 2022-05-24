import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    //protecting from other user for admin
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (loading) {
        return <progress className="progress w-full"></progress>
    }
    if (adminLoading) {
        return <progress className="progress w-full"></progress>
    }


    if (!admin) {
        return <Navigate to="/" />
    }
    return children;
};

export default RequireAdmin;