import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LayoutWithNavbar from './components/LayoutWithNavbar'

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Layout Routes with Navbar */}
                <Route element={<LayoutWithNavbar />}>
                    <Route path="/" element={<Home />} />
                    {/* Add more routes like /menu, /pricing here */}
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default App
