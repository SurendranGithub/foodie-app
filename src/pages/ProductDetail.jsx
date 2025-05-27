import { useLocation, useParams } from 'react-router-dom';
import React from 'react';

const ProductDetail = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const product = state?.product;

    if (!product) return <p className="text-center mt-10 text-gray-600">Product not found</p>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded-2xl shadow-lg" />

            <div className="mt-6 space-y-4">
                <h1 className="text-3xl font-bold text-red-600">{product.title}</h1>
                <div className="flex gap-6 text-sm text-gray-500">
                    <p>⏱ {product.readyInMinutes} min</p>
                    <p>🍽 {product.servings} servings</p>
                </div>
                <p className="text-lg font-medium text-gray-700">₹{product.price}</p>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Summary</h2>
                    <p
                        className="text-gray-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: product.summary }}
                    />
                </div>

                <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200 cursor-pointer">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
