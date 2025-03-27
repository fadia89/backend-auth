import { Routes, Route } from 'react-router-dom'; 
import App from './App';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import React from 'react';
import Register from './pages/Register';
import Login from './pages/login';

const MyRouter = () => {
    return (
        <>
            <NavBar /> 
            <Routes>
                <Route path="/" element={<App />} /> 
                <Route path="/profile" element={<Profile />} /> 
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<p>404 not found</p>} /> 
            </Routes>
        </>
    );
};

export default MyRouter;
