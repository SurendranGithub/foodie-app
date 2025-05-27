import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Aarav Patel',
        quote:
            "Absolutely delicious! The food was fresh, flavorful, and delivered right on time. Will definitely order again!",
        title: 'Food Blogger',
    },
    {
        name: 'Meera Sharma',
        quote:
            "I love the variety and the easy-to-use interface. It's my go-to app whenever I’m hungry!",
        title: 'Marketing Executive',
    },
    {
        name: 'Ravi Kumar',
        quote:
            "Highly recommended! Great service, timely delivery, and meals that taste just like home.",
        title: 'Software Engineer',
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-10">
                    Hear from the people who love our food and service.
                </p>

                <div className="grid gap-8 md:grid-cols-3 text-left">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md hover:shadow-lg transition cursor-pointer scale-105 rounded-2xl p-6 relative"
                        >
                            <Quote className="w-6 h-6 text-yellow-500 absolute top-4 right-4" />
                            <p className="text-gray-700 mb-6 text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <p className="text-gray-500 text-xs">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
