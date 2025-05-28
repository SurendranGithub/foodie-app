import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        toast.success('Logged out successfully!');
        setTimeout(() => {
            navigate('/', { replace: true });
        }, 0);
    };

    return (
        <div className="min-h-screen flex-center flex-col text-center p-8">
            <h1 className="text-3xl font-bold mb-4">👋 Welcome, {currentUser?.name || 'User'}!</h1>
            <p className="text-gray-600 mb-6">Email: {currentUser?.email}</p>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
};

export default Profile;
