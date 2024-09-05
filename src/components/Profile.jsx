import React, { useState } from 'react';
import axios from 'axios';
import 'daisyui/dist/full.css';

function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.put('https://chatify-api.up.railway.app/user', { username, email, avatar }, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <div className="flex flex-col items-center bg-base-100 p-6 rounded-lg shadow-md">
      <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full mb-4" />
      <form onSubmit={handleUpdateProfile} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-base-content text-sm font-bold mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base-content text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base-content text-sm font-bold mb-2">Avatar URL</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
