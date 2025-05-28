import React, { useState } from 'react';
import { Hamburger, Menu, X, User, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    // Get current user from AuthContext
    const { currentUser } = useContext(AuthContext);

    return (
        <nav className='md:mx-15 relative flex-between px-6 py-10'>
            {/* Logo */}
            <div className='flex-center gap-1'>
                <h3 className='text-3xl italic text-semibold text-gray-700'>foodie</h3>
                <span><Hamburger size={28} className='text-red-700' /></span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-6">
                <Link to="/" className='link'>Home</Link>
                <Link to="/products" className='link'>Menu</Link>
                <Link to="/services" className='link'>Services</Link>
                <Link to="/contact" className='link'>Contact</Link>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-4">
                {currentUser && (
                    <Link to="/cart">
                        <ShoppingCart className="text-red-500 hover:text-red-600" />
                    </Link>
                )}
                {currentUser ? (
                    <Link to="/profile">
                        <User className="text-red-500 hover:text-red-600" />
                    </Link>
                ) : (
                    <button className="btn hidden md:block">
                        <Link to="/login">Login</Link>
                    </button>
                )}
            </div>

            {/* Mobile menu icon */}
            <button className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white p-5 flex flex-col gap-4 shadow-lg md:hidden z-50">
                    <Link to="/" className="text-gray-700 text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/products" className="text-gray-700 text-lg" onClick={() => setMenuOpen(false)}>Menu</Link>
                    <Link to="/services" className="text-gray-700 text-lg" onClick={() => setMenuOpen(false)}>Booking</Link>
                    <Link to="/contact" className="text-gray-700 text-lg" onClick={() => setMenuOpen(false)}>Pricing</Link>
                    {currentUser && (
                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                navigate('/cart');
                            }}
                            className="flex items-center text-red-500 text-lg font-semibold gap-2"
                        >
                            <ShoppingCart className="w-5 h-5" /> Cart
                        </button>
                    )}
                    {currentUser ? (
                        <button
                            onClick={() => {
                                setMenuOpen(false);
                                navigate('/profile');
                            }}
                            className="flex items-center text-red-500 text-lg font-semibold gap-2"
                        >
                            <User className="w-5 h-5" /> Profile
                        </button>
                    ) : (
                        <Link to="/login" className="text-red-500 text-lg font-semibold" onClick={() => setMenuOpen(false)}>
                            Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

