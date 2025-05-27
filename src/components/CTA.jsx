import { Link } from 'react-router-dom';
import React from 'react';

const CTA = () => {
    return (
        <section className="bg-red-500 py-16 px-6">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Ready to Satisfy Your Cravings?
                </h2>
                <p className="text-gray-500 max-w-xl">
                    Discover mouth-watering dishes delivered right to your doorstep. Start your food journey with us today!
                </p>
                <button className="bg-white text-red-500 text-base px-6 py-2 rounded-xl transition duration-200">
                    <Link to="/signup">Browse Menu</Link>
                </button>
            </div>
        </section>
    );
};

export default CTA;
