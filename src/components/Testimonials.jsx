import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Arjun R.',
        comment: 'Absolutely loved the biryani! Fast delivery & piping hot.',
        rating: 5,
    },
    {
        name: 'Megha S.',
        comment: 'Fresh, delicious and neatly packed. Great job!',
        rating: 4,
    },
    {
        name: 'Ravi T.',
        comment: 'One of the best food delivery services I’ve used.',
        rating: 5,
    },
];

const StarRating = ({ count }) => {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-500 fill-yellow-400" />
            ))}
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="py-14 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-12">
                    Hear from the foodies who’ve fallen in love with our flavors.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-shadow"
                        >
                            <StarRating count={item.rating} />
                            <p className="mt-4 text-gray-700 text-sm italic">"{item.comment}"</p>
                            <h4 className="mt-4 font-semibold text-gray-800">{item.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
