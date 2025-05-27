import React from 'react';

const Hero = () => {
    return (
        <section className="px-6 py-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <div className="space-y-6">
                <div className="space-y-1">
                    <h1 className="text-3xl sm:text-7xl font-extrabold text-gray-800 leading-tight">
                        Savor the flavor
                    </h1>
                    <h1 className="text-3xl italic sm:text-6xl font-extrabold text-red-500 leading-tight">
                        Your Ultimate Food
                    </h1>
                    <h1 className="text-3xl sm:text-7xl font-extrabold text-gray-800 leading-tight">
                        Destination!
                    </h1>
                </div>

                <p className="text-gray-600 text-base sm:text-lg max-w-lg">
                    Great choice! The Feed conveys a sense of movement and change—perfect for a food experience
                    that’s always exciting. Ready to explore more?
                </p>

                <div className="flex gap-4 flex-wrap">
                    <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition">
                        Order Now
                    </button>
                    <button className="border border-red-500 text-red-500 px-6 py-3 rounded-full text-lg font-medium hover:bg-red-500 hover:text-white transition">
                        Book a Table
                    </button>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-6 max-w-md">
                    <div className="bg-white p-5 rounded-xl shadow hover:border hover:border-red-500 transition">
                        <h2 className="text-xl font-semibold">40+ Breakfasts</h2>
                        <p className="text-gray-500">Most delicious</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow border border-red-500 hover:border-none transition">
                        <h2 className="text-xl font-semibold">Home Delivery</h2>
                        <p className="text-gray-500">In town only</p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="hidden md:flex justify-center md:justify-end">
                <img
                    src="https://res.cloudinary.com/dkks5xf5v/image/upload/v1747842301/pasta1_hdyzcw.jpg"
                    alt="hero-image"
                    className="w-full h-[550px] max-w-md rounded-xl shadow-lg object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
