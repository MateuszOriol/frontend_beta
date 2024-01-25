import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/login/Signup';
import Login from './components/login/Login';
import { UserProvider } from './components/context/UserContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <UserProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
