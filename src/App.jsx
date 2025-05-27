import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LayoutWithNavbar from './components/LayoutWithNavbar'
import Products from './pages/Products'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import ProductDetail from './pages/ProductDetail'

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Layout Routes with Navbar */}
                <Route element={<LayoutWithNavbar />}>
                    <Route path="/" element={<Home />} />

                    {/* ✅ Wrap only protected routes */}
                    <Route
                        path="/products"
                        element={
                            <ProtectedRoute>
                                <Products />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/products/:id"
                        element={
                            <ProtectedRoute>
                                <ProductDetail />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                </Route>

                {/* Routes without Navbar */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default App
