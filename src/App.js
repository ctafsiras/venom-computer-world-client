import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Pages/Authentication/Login';
import Register from './components/Pages/Authentication/Register';
import RequireAuth from './components/Pages/Authentication/RequireAuth';
import AddProduct from './components/Pages/Business/AddProduct';
import Purchase from './components/Pages/Business/Purchase';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/add' element={<AddProduct />}></Route>
        <Route path='/purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>}></Route>

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
