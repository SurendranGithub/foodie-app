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
import Cart from './pages/Cart'
import Services from './pages/Services'
import Contact from './pages/Contact'

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
                    <Route
                        path="/cart"
                        element={
                            <ProtectedRoute>
                                <Cart />
                            </ProtectedRoute>
                        }
                    />
                </Route>

                {/* Routes without Navbar */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App
