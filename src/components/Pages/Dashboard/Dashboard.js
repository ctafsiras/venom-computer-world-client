import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <h2 className='text-2xl text-primary'>Welcome to Dashboard</h2>
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='profile'>My Profile</NavLink></li>
                    <li><NavLink to='orders'>My Orders</NavLink></li>
                    <li><NavLink to='add-review'>Add A Review</NavLink></li>
                    <li><NavLink to='add-product'>Add Product</NavLink></li>
                    <li><NavLink to='make-admin'>Make Admin</NavLink></li>
                    <li><NavLink to='manage-product'>Manage Products</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;