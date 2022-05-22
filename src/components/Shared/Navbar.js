import autoprefixer from 'autoprefixer';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const menu = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        {user ?
            <button
                onClick={() => signOut(auth)}
                className='btn btn-outline'>Logout</button>
            : <li><NavLink to='/login'>Login</NavLink></li>

        }
    </>
    return (
        <div class="navbar bg-base-100 lg:px-12">
            <div class="navbar-start">
                <a class="btn btn-ghost normal-case text-xl">Venom Computer World</a>

            </div>

            <div class="navbar-end">


                <div class="hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 gap-2">
                        {menu}
                    </ul>

                </div>


                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;