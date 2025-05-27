import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';

const Products = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        maxMinutes: 60,
        minServings: 1,
    });
    const [sortBy, setSortBy] = useState('');

    const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const res = await fetch(
                    `https://api.spoonacular.com/recipes/random?number=20&apiKey=${API_KEY}`
                );
                const data = await res.json();

                console.log(data)

                // Add a fake price to each meal for sorting
                const mealsWithPrice = data.recipes.map((meal) => ({
                    ...meal,
                    price: Math.floor(Math.random() * 300 + 100),
                }));

                setMeals(mealsWithPrice || []);
            } catch (error) {
                console.error('Failed to fetch recipes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, []);

    // Apply filters and search
    let filteredMeals = meals.filter((meal) => {
        const matchesSearch = meal.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTime = meal.readyInMinutes <= filters.maxMinutes;
        const matchesServings = meal.servings >= filters.minServings;
        return matchesSearch && matchesTime && matchesServings;
    });

    // Apply sorting
    if (sortBy === 'time') {
        filteredMeals.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
    } else if (sortBy === 'price-low') {
        filteredMeals.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredMeals.sort((a, b) => b.price - a.price);
    }

    return (
        <section className="px-10 py-8 m-3">
            <h2 className="text-2xl font-bold text-center mb-10 text-red-500">
                Explore Our Menu 🍽️
            </h2>

            {/* Search + Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm">
                {/* Search */}
                <input
                    type="text"
                    placeholder="🔍 Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />

                {/* Max Time */}
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <label className="font-medium text-sm">Max Time:</label>
                    <input
                        type="number"
                        min="1"
                        value={filters.maxMinutes}
                        onChange={(e) =>
                            setFilters({ ...filters, maxMinutes: parseInt(e.target.value) || 0 })
                        }
                        className="border border-gray-300 rounded px-3 py-1 w-[80px]"
                    />
                </div>

                {/* Min Servings */}
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <label className="font-medium text-sm">Min Servings:</label>
                    <input
                        type="number"
                        min="1"
                        value={filters.minServings}
                        onChange={(e) =>
                            setFilters({ ...filters, minServings: parseInt(e.target.value) || 1 })
                        }
                        className="border border-gray-300 rounded px-3 py-1 w-[80px]"
                    />
                </div>

                {/* Sort */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2"
                >
                    <option value="">Sort</option>
                    <option value="time">Time ↑</option>
                    <option value="price-low">Price ↑</option>
                    <option value="price-high">Price ↓</option>
                </select>
            </div>

            {/* Meals Grid */}
            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : filteredMeals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredMeals.map((meal) => (
                        <FoodCard key={meal.id} product={meal} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No meals found.</p>
            )}
        </section>
    );
};

export default Products;
