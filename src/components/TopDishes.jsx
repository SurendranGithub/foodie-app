import React from 'react';
import { Star } from 'lucide-react';

const dishes = [
    {
        id: 1,
        name: "Spicy Ramen",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748239230/ramen_iymqky.jpg",
        price: "₹199",
        rating: 4.5,
    },
    {
        id: 2,
        name: "Margherita Pizza",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748239327/pizzaaaa_idmlum.jpg",
        price: "₹249",
        rating: 4.7,
    },
    {
        id: 3,
        name: "Chicken Burger",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748239400/burger_nlggf5.jpg",
        price: "₹149",
        rating: 4.3,
    },
    {
        id: 4,
        name: "Chocolate Cake",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748239717/cake_gctkwl.jpg",
        price: "₹179",
        rating: 4.8,
    },
];

const TopDishes = () => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Top Dishes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                Our best-selling dishes loved by thousands of happy foodies.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {dishes.map((dish) => (
                    <div
                        key={dish.id}
                        className="bg-white rounded-2xl overflow-hidden hover:cursor-pointer scale-105 shadow-lg  transition"
                    >
                        <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-left">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{dish.name}</h3>
                            <div className="flex items-center text-yellow-500 mb-1">
                                <Star className="w-5 h-5 fill-yellow-400" />
                                <span className="ml-1 text-sm text-gray-700">{dish.rating}</span>
                            </div>
                            <p className="text-lg font-bold text-red-500">{dish.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopDishes;
