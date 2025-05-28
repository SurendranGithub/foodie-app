import React, { createContext, useEffect, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage for current user
    useEffect(() => {
        if (currentUser) {
            const storedCart = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`)) || [];
            setCartItems(storedCart);
        }
    }, [currentUser]);

    // Save cart to localStorage on change
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cartItems));
        }
    }, [cartItems, currentUser]);

    const addToCart = (item) => {
        setCartItems(prev => {
            const exists = prev.find(cartItem => cartItem.id === item.id);
            if (exists) {
                return prev.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
        toast.success('Item removed from cart!', {
            position: 'top-center',
        });
    };

    const clearCart = () => {
        setCartItems([]);
        toast.success('Cart cleared successfully!', {
            position: 'top-center',
        });
    };

    const incrementQuantity = (id) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementQuantity = (id) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.id === id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0) // optional: remove if quantity hits 0
        );
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
