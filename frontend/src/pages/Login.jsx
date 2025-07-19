import React from 'react';

const Login = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md">
        {/* Logo Placeholder */}
        <div className="bg-blue-50 p-6 flex justify-center">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center text-blue-400">
            {/* Replace this div with your actual logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
        </div>

        <div className="p-8">
          {/* Company Name and Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-950">Viaa...</h1>
            <h2 className="text-xl text-gray-600 mt-2">
              Welcome back! Please login to your account
            </h2>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;