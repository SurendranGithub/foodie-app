import React from 'react';
import { ThumbsUp, Clock, ShieldCheck, Truck } from 'lucide-react';

const features = [
    {
        icon: <ThumbsUp className="w-8 h-8 text-white" />,
        title: 'Quality Food',
        desc: 'We ensure high-quality ingredients and hygienic cooking methods in every dish.',
        bg: 'bg-green-500',
    },
    {
        icon: <Clock className="w-8 h-8 text-white" />,
        title: 'Quick Delivery',
        desc: 'Get your favorite meals delivered to your doorstep in no time.',
        bg: 'bg-yellow-500',
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        title: 'Secure Payment',
        desc: 'Your transactions are safe and encrypted using industry-standard security.',
        bg: 'bg-blue-500',
    },
    {
        icon: <Truck className="w-8 h-8 text-white" />,
        title: 'Wide Coverage',
        desc: 'Our delivery services cover a wide area to reach more food lovers.',
        bg: 'bg-red-500',
    },
];

const WhyChooseUs = () => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                We bring taste and trust together with unbeatable service.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition hover:shadow-xl scale-105 cursor-pointer"
                    >
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg} mb-4`}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
