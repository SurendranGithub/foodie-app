import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

import { loginValidate } from '../helper/validate';

const Login = () => {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: loginValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            console.log('Login values:', values);

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const isValidUser = users.find((user) => user.email === values.email && user.password === values.password);

            if (!isValidUser) {
                toast.error('Invalid crendentials.');
                return;
            }

            //save current user session
            login(isValidUser)

            toast.success('Login successful!');

            //Navigate to products page
            setTimeout(() => {
                navigate('/products');
            }, 1000);
        }
    });

    return (
        <section className="min-h-screen flex-center px-4">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-red-500">Welcome Back 👋</h2>

                <form className="space-y-5" onSubmit={formik.handleSubmit}>
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
                        className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-sm text-center">
                    Don’t have an account?{' '}
                    <Link to="/signup" className="text-red-500 hover:underline font-semibold">
                        Signup
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
