import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodCard = ({ product }) => {

    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`, { state: { product } })}
        >
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-44 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold truncate">{product.title}</h3>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>⏱ {product.readyInMinutes} min</span>
                    <span>🍽 {product.servings} servings</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p className="text-yellow-500 font-bold text-md">₹{product.price}</p>
                    <button className="text-sm px-4 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 cursor-pointer transition-colors duration-200">
                        Add +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
