import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Pages/Authentication/Login';
import Register from './components/Pages/Authentication/Register';
import RequireAdmin from './components/Pages/Authentication/RequireAdmin';
import RequireAuth from './components/Pages/Authentication/RequireAuth';
import Blogs from './components/Pages/Blogs';
import AddProduct from './components/Pages/Business/AddProduct';
import Payment from './components/Pages/Business/Payment';
import Purchase from './components/Pages/Business/Purchase';
import AddReview from './components/Pages/Dashboard/AddReview';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MakeAdmin from './components/Pages/Dashboard/MakeAdmin';
import ManageAllOrders from './components/Pages/Dashboard/ManageAllOrders';
import ManageProducts from './components/Pages/Dashboard/ManageProducts';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import MyProfile from './components/Pages/Dashboard/MyProfile';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path='orders' element={<MyOrders />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='add-review' element={<AddReview />}></Route>
          <Route path='make-admin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
          <Route path='manage-product' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          <Route path='manage-orders' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
          <Route path='add-product' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
        </Route>
        <Route path='/add' element={<AddProduct />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
