import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const LayoutWithNavbar = () => (
    <>
        <Navbar />
        <Outlet />
    </>
);

export default LayoutWithNavbar;