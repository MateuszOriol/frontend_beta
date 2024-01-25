import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('loginToken');
    setUser(null);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-lg font-bold">
          Shop
        </a>

        <div className="space-x-4">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>

          <a href="/cart" className="text-white hover:text-gray-300">
            Cart
          </a>
          {!user && (
          <a href="/login" className="text-white hover:text-gray-300">
            Login
          </a>
          )}
          {!user && (
          <a href="/signup" className="text-white hover:text-gray-300">
            Signup
          </a>
          )}
          {user && (
          <div className='navButton'>
            <button onClick={handleLogout}>Wyloguj</button>
          </div>
          )}
                  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
