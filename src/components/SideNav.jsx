import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import 'daisyui/dist/full.css';

const SideNav = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login'); 
  };

  return (
    <div className="h-screen w-64 bg-base-200 p-4 flex flex-col items-start">
      <Link to="/profile" className="btn btn-ghost w-full mb-2">Profile</Link>
      <button onClick={handleLogout} className="btn btn-error w-full">Logout</button>
    </div>
  );
};

export default SideNav;
