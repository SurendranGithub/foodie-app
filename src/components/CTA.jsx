import React from 'react';

const CTA = () => {
    return (
        <section className="bg-red-500 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    Ready to satisfy your cravings?
                </h2>
                <p className="text-lg md:text-xl mb-8">
                    Join Foodie now and get 20% off your first order!
                </p>
                <a
                    href="/signup"
                    className="inline-block bg-white text-red-500 font-semibold text-lg px-8 py-3 rounded-full hover:bg-gray-100 transition"
                >
                    Join Now
                </a>
            </div>
        </section>
    );
};

export default CTA;
