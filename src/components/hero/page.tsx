import Link from 'next/link';
import React from 'react';
const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center text-black relative overflow-hidden">
       <img
        className="w-auto h-auto object-cover"
        src="\admin ui\hero\hero-2.png"
        alt="Hero Section Image"
      />
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Unleash Innovation in Every Byte.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Explore a World of Cutting-Edge Tech.
        </p>
        <Link href="\Categories">
        <button className="bg-black text-white px-6 py-2 rounded-full text-sm md:text-base lg:text-lg">
          Shop Now
        </button>
        </Link>
       
      </div>
    </div>
  );
};

export default HeroSection;
