import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Chat from './components/Chat';
import Profile from './components/Profile';

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/login" />;
};

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<PrivateRoute element={<Chat />} />} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);

export default AppRouter;
