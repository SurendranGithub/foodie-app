import React from 'react';

const FoodCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            <img
                src={product.strMealThumb}
                alt={product.strMeal}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{product.strMeal}</h3>
                <p className="text-gray-500">{product.strCategory}</p>
                <p className="mt-1 font-bold text-yellow-500">₹{Math.floor(Math.random() * 300 + 100)}</p>
                <button className="mt-2 bg-red-500 text-white w-[150px] py-2 rounded-full hover:bg-red-600 cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
