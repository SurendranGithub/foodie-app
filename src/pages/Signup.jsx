import React from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { signupValidate } from '../helper/validate';

const Signup = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validate: signupValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            console.log('Login values:', values);
        }
    });

    return (
        <section className="min-h-screen flex-center px-4">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-red-500">Create Your Account 🍔</h2>

                <form className="space-y-5" onSubmit={formik.handleSubmit}>
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            {...formik.getFieldProps('name')}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="example@foodie.com"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            {...formik.getFieldProps('email')}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            {...formik.getFieldProps('password')}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
                    >
                        Signup
                    </button>
                </form>

                <p className="mt-4 text-sm text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-red-500 hover:underline font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Signup;
