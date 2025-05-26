// TopDishes.jsx
import React from 'react';
import { Star } from 'lucide-react';

const dishes = [
    {
        name: "Spicy Ramen",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748239230/ramen_iymqky.jpg",
        price: "₹199",
        rating: 4.5,
    },
    {
        name: "Margherita Pizza",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748239327/pizzaaaa_idmlum.jpg",
        price: "₹249",
        rating: 4.7,
    },
    {
        name: "Chicken Burger",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748239400/burger_nlggf5.jpg",
        price: "₹149",
        rating: 4.3,
    },
    {
        name: "Chocolate Cake",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748239717/cake_gctkwl.jpg",
        price: "₹179",
        rating: 4.8,
    },
];

const TopDishes = () => {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Top Dishes</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {dishes.map((dish, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-1">{dish.name}</h3>
                            <div className="flex items-center gap-2 text-yellow-500 mb-2">
                                <Star fill="currentColor" size={18} />
                                <span className="text-sm font-medium text-gray-700">{dish.rating}</span>
                            </div>
                            <p className="text-lg font-bold text-red-600">{dish.price}</p>
                            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition-color cursor-pointer">
                                Order Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopDishes;
