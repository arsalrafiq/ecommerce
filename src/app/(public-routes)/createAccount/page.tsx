// export default LoginForm;
import React from 'react';
import Image from 'next/image';

const LoginForm: React.FC = () => {
  const imageUrl = "/assets/images/image-2.svg"; // Adjust the image path based on your project structure

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Half - Image */}
      <div className="md:w-1/2 bg-cover bg-center hidden md:block relative">
        <Image
          src={imageUrl}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Right Half - Create Account Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-4xl font-bold mb-4 text-black">Create Account</h2>
          <h3 className="text-2xl font-semibold mb-8 text-black">Please enter details</h3>

          <form>
            <div className="mb-4">
              <label htmlFor="fullname" className="text-black">Full Name</label>
              <input type="fullname" id="fullname" className="mt-2 p-2 w-full border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-black">Email Address</label>
              <input type="email" id="email" className="mt-2 p-2 w-full border rounded-lg" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="text-black">Password</label>
              <input type="password" id="password" className="mt-2 p-2 w-full border rounded-lg" />
            </div>
            <div className="mb-8">
              <label htmlFor="confirmpassword" className="text-black">Confirm Password</label>
              <input type="confirmpassword" id="confirmpassword" className="mt-2 p-2 w-full border rounded-lg" />
            </div>
            <button type="submit" className="bg-black text-white py-2 px-4 rounded-lg w-full border focus:outline-none">
              Sign Up
            </button>
          </form>

          <p className="mt-8 text-black">
            Already have an account? Login <a href="#">here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;


