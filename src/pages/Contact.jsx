import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
                <p className="text-gray-600 text-center mb-10">Have questions or feedback? We'd love to hear from you!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="text-gray-700 space-y-4">
                        <h3 className="text-xl font-semibold">Reach Us At</h3>
                        <p><strong>📍 Address:</strong> 123 Food Street, Bangalore, India</p>
                        <p><strong>📞 Phone:</strong> +91 98765 43210</p>
                        <p><strong>📧 Email:</strong> support@foodhub.com</p>
                        <p><strong>🕒 Working Hours:</strong> Mon - Sun: 9 AM - 11 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
