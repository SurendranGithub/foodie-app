import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';

const LayoutWithNavbar = () => (
    <>
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <Outlet />
    </>
);

export default LayoutWithNavbar;