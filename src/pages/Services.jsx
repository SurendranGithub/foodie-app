import React from 'react';

const services = [
    {
        title: 'Fast Delivery',
        description: 'Get your favorite meals delivered to your doorstep within 30 minutes.',
        icon: '🚚',
    },
    {
        title: 'Fresh Ingredients',
        description: 'We use only the freshest and highest quality ingredients.',
        icon: '🥦',
    },
    {
        title: '24/7 Support',
        description: 'Need help? We’re always here for you, day or night.',
        icon: '📞',
    },
];

const Services = () => {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
                <p className="text-gray-600 mb-10">Explore the services we offer to make your food experience amazing.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
