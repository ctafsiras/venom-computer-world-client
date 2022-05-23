import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';

const Dashboard = () => {


    const [user, loading] = useAuthState(auth);
    // if (loading) {
    //     return <progress className="progress w-full"></progress>
    // }
    const { data: currentUser, isLoading } = useQuery(['get-user-email', user], () => fetch(`http://localhost:4000/get-user/${user.email}`).then(res => res.json()));
    if (isLoading) {
        return <progress className="progress w-full"></progress>
    }

    const admin = currentUser.role === 'admin';

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-primary'>Welcome to Dashboard</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='profile'>My Profile</NavLink></li>
                    {!admin &&
                        <>
                            <li><NavLink to='orders'>My Orders</NavLink></li>
                            <li><NavLink to='add-review'>Add A Review</NavLink></li>
                        </>}
                    {
                        admin && <>
                            <li><NavLink to='add-product'>Add Product</NavLink></li>
                            <li><NavLink to='make-admin'>Make Admin</NavLink></li>
                            <li><NavLink to='manage-product'>Manage Products</NavLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;