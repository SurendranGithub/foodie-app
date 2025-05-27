import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signupValidate } from '../helper/validate';

const Signup = () => {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

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
            console.log('Signup values:', values);

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const isExistingUser = users.find((user) => user.email === values.email);

            if (isExistingUser) {
                toast.error('User already exists with this email.');
                return;
            }

            const updatedUsers = [...users, values];

            localStorage.setItem('users', JSON.stringify(updatedUsers));

            login(values)

            toast.success('Signup successful!');

            navigate('/products')
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
