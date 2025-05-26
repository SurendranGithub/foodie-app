import React from 'react';
import {
    Timer,
    Leaf,
    ChefHat,
    Headphones,
} from 'lucide-react';

const features = [
    {
        icon: <Timer size={36} className="text-red-500" />,
        title: "Fast Delivery",
        desc: "Your order arrives hot & fresh within 30 minutes.",
    },
    {
        icon: <Leaf size={36} className="text-green-500" />,
        title: "Fresh Ingredients",
        desc: "We use locally-sourced, high-quality ingredients every day.",
    },
    {
        icon: <ChefHat size={36} className="text-yellow-500" />,
        title: "Expert Chefs",
        desc: "Dishes prepared by experienced, certified chefs.",
    },
    {
        icon: <Headphones size={36} className="text-blue-500" />,
        title: "24/7 Support",
        desc: "We’re here to help, anytime you need us.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-14 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-12">
                    Discover what makes us the go-to platform for delicious and reliable food delivery.
                </p>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  cursor-pointer">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
