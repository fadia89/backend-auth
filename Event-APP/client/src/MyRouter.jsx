import { Routes, Route } from 'react-router-dom'; 
import App from './App';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import React from 'react';
import Register from './pages/Register';

const MyRouter = () => {
    return (
        <>
            <NavBar /> 
            <Routes>
                <Route path="/" element={<App />} /> 
                <Route path="/profile" element={<Profile />} /> 
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
};

export default MyRouter;
