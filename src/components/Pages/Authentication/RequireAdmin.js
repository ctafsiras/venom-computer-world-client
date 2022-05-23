import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAdmin = ({ children }) => {
    const [user] = useAuthState(auth);
    //protecting from other user for admin
    const { data: currentUser, isLoading } = useQuery(['get-user-email', user], () => fetch(`http://localhost:4000/get-user/${user.email}`).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }

    const admin = currentUser.role === 'admin';

    if (!admin) {
        return <Navigate to="/" />
    }
    return children;
};

export default RequireAdmin;