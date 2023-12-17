// components/LoginForm.tsx
import React from 'react';

const LoginForm: React.FC = () => {
  const imageUrl = "/assets/images/image-1.svg"; // Adjust the image path based on your project structure

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Half - Image */}
      <div className="md:w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Add your image path in the 'url()' */}
      </div>

      {/* Right Half - Login Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
        <h2 className="text-4xl font-bold mb-4 text-black">Welcome</h2>
          <h3 className="text-2xl font-semibold mb-8 text-black">Please login here</h3>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="text-black">Email Address</label>
              <input type="email" id="email" className="mt-2 p-2 w-full border rounded" />
            </div>

            <div className="mb-8">
              <label htmlFor="password" className="text-black">Password</label>
              <input type="password" id="password" className="mt-2 p-2 w-full border rounded" />
            </div>

            <button type="submit" className="bg-black text-white py-2 px-4 w-full border rounded-lg focus:outline-none">
              Login
            </button>

            <p className="mt-4 text-black">
              <a href="#">Forgot password?</a>
            </p>
          </form>

          <p className="mt-8 text-black">
            Don't have an account? <a href="#">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
