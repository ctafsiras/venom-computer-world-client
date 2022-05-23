
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const menu = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>

        {user ?

            <>
                <li><NavLink to='/dashboard/profile'>Dashboard</NavLink></li>
                <h2 className='text-secondary font-bold my-auto'>{user.displayName}</h2>
                <button
                    onClick={() => signOut(auth)}
                    className='btn btn-outline'>Logout</button></>
            : <li><NavLink to='/login'>Login</NavLink></li>

        }
    </>
    return (
        <div className="navbar bg-base-100 lg:px-12">
            <div className="navbar-start">


                {
                    location.pathname.includes('dashboard') &&
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                }


                <a className="btn btn-ghost normal-case text-xl">Venom Computer World</a>

            </div>

            <div className="navbar-end">


                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-2">
                        {menu}
                    </ul>

                </div>


                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;