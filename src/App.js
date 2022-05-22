import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Pages/Authentication/Login';
import Register from './components/Pages/Authentication/Register';
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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
