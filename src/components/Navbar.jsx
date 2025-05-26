import React, { useState } from 'react'
import { Hamburger, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='m-3 relative flex-between py-5 px-10'>
            {/* Logo */}
            <div className='flex-center gap-1'>
                <h3 className='text-3xl italic text-semibold text-gray-700'>foodie</h3>
                <span><Hamburger size={28} className='text-red-700 ' /></span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-6">
                <a href="/" className='link'>Home</a>
                <a href="/menu" className='link'>Menu</a>
                <a href="/booking" className='link'>Services</a>
                <a href="/pricing" className='link'>Contact</a>
            </div>

            {/* Desktop Login Button */}
            <button className="btn hidden md:block"><Link to="/login">Login</Link></button>

            {/* Mobile menu icon */}
            <button className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white p-5 flex flex-col gap-4 shadow-lg md:hidden z-50">
                    <a href="/" className="text-gray-700 text-lg">Home</a>
                    <a href="/menu" className="text-gray-700 text-lg">Menu</a>
                    <a href="/booking" className="text-gray-700 text-lg">Booking</a>
                    <a href="/pricing" className="text-gray-700 text-lg">Pricing</a>
                    <a href="/login" className="text-red-500 text-lg font-semibold">Login</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
