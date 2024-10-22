import React from "react";

const Login = () => {
  return (
    <footer className="bg-black text-white h-screen w-screen">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Login
        </h2>

        <form className="space-y-8 mx-10">
          <div>
            <label htmlFor="Your Email">Your Email</label>
            <input
              type="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            />
          </div>

          <button
            type="submit"
            class="bg py-3 px-5  text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Login;
