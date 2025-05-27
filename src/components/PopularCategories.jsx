import React from 'react';
import { UtensilsCrossed, Pizza, CakeSlice, Drumstick } from 'lucide-react';

const categories = [
    {
        icon: <UtensilsCrossed className="w-8 h-8 text-red-500" />,
        title: 'South Indian',
        description: 'Enjoy traditional flavors of dosa, idli & more.',
    },
    {
        icon: <Pizza className="w-8 h-8 text-red-500" />,
        title: 'Italian',
        description: 'Pizza, pasta, and cheesy indulgence at its best.',
    },
    {
        icon: <CakeSlice className="w-8 h-8 text-red-500" />,
        title: 'Desserts',
        description: 'Satisfy your sweet tooth with cakes & pastries.',
    },
    {
        icon: <Drumstick className="w-8 h-8 text-red-500" />,
        title: 'Non-Veg',
        description: 'Juicy chicken, spicy kebabs, and more delights.',
    },
];

const PopularCategories = () => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
                Popular Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                Discover your favorite food categories. We've got something delicious for everyone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition border border-transparent hover:border-red-500 cursor-pointer"
                    >
                        <div className="flex items-center justify-center mb-4">
                            {cat.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{cat.title}</h3>
                        <p className="text-gray-500 text-sm">{cat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCategories;
