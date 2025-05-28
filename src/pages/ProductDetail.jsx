import { useLocation, useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import React from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const product = state?.product;

    const navigate = useNavigate();

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.title} added to cart!`, {
            position: 'top-center',
        });
        toast.dismiss(5000); // Dismiss after 5 seconds
        navigate('/cart'); // Redirect to cart after adding
    };

    if (!product) return <p className="text-center mt-10 text-gray-600">Product not found</p>;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Image Section */}
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-md"
                />

                {/* Details Section */}
                <div className="space-y-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-red-600">{product.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <p className="bg-gray-100 px-3 py-1 rounded-full">⏱ {product.readyInMinutes} min</p>
                        <p className="bg-gray-100 px-3 py-1 rounded-full">🍽 {product.servings} servings</p>
                        <p className="bg-gray-100 px-3 py-1 rounded-full font-semibold text-red-500">
                            ₹{product.price}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Summary</h2>
                        <p
                            className="text-gray-600 leading-relaxed text-sm sm:text-base"
                            dangerouslySetInnerHTML={{ __html: product.summary }}
                        />
                    </div>

                    <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200 cursor-pointer" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
