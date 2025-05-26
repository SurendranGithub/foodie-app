import React from 'react';

const categories = [
    {
        name: "Breakfast",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748237552/pexels-janetrangdoan-769969_ouizef.jpg", // Unsplash
    },
    {
        name: "Lunch",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748237889/lunch_oqn9ss.jpg",
    },
    {
        name: "Desserts",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748237979/pexels-ash-craig-122861-376464_upfdtm.jpg",
    },
    {
        name: "Drinks",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748238067/drinks_omywqx.jpg",
    },
    {
        name: "Snacks",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748238156/snacks_f7dlee.jpg",
    },
    {
        name: "Pizza",
        image: "https://res.cloudinary.com/dkks5xf5v/image/upload/v1748238270/pizza_drao8o.jpg",
    },
];

const PopularCategories = () => {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Categories</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="rounded-xl overflow-hidden shadow hover:scale-105 cursor-pointer transition-transform bg-white"
                    >
                        <img src={cat.image} alt={cat.name} className="h-48 w-full object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold">{cat.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCategories;
