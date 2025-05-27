import React, { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';

const Products = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then((res) => res.json())
            .then((data) => {
                setMeals(data.meals || []); // fallback if null
            })
            .catch((error) => console.error('Failed to fetch meals:', error));
    }, []);

    return (
        <section className="px-10 py-8 m-3">
            <h2 className="text-2xl font-bold text-center mb-10 text-red-500">Explore Our Menu 🍽️</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {meals.map((meal) => (
                    <FoodCard key={meal.idMeal} product={meal} />
                ))}
            </div>
        </section>
    );
};

export default Products;
