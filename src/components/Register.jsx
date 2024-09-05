import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'daisyui/dist/full.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://chatify-api.up.railway.app/auth/register', {
        username,
        password,
      });
      alert('Registration successful!');
      navigate('/');
    } catch (error) {
      console.error('Username or email already exists');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <form onSubmit={handleRegister} className="bg-base-100 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="input input-bordered w-full mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input input-bordered w-full mb-4"
        />
        <button className="w-full btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
