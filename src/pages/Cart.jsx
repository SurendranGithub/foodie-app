import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-gray-600 text-base sm:text-lg">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex-1">
                                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() => decrementQuantity(item.id)}
                                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                                    >
                                        -
                                    </button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button
                                        onClick={() => incrementQuantity(item.id)}
                                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-base sm:text-lg font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
                                <button
                                    className="text-red-500 text-sm sm:text-base mt-2 hover:underline cursor-pointer"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>

                    ))}

                    <div className="text-right mt-6">
                        <h4 className="text-xl sm:text-2xl font-bold">Total: ₹{totalPrice.toFixed(2)}</h4>
                        <button
                            className="mt-4 bg-red-500 hover:bg-red-600 text-white cursor-pointer px-4 py-2 rounded-xl transition"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
