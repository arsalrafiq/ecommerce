// import Image from 'next/image'
// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='hero-section bg-cover bg-center text-black relative'>
//  <img className='w-full h-screen object-cover' src="\hero-1.png" alt="hero" />
//  <div className='absolute top-1/4 right-4 transform -translate-x-1/4 -translate-y-1/4 text-center'>
// <h1 className='font-bold text-4xl mx-4 '>Unleash Innovation in Every Byte.</h1>
// <p className='font-bold mb-6 '>Explore a World of Cutting-Edge Tech.</p>
// <button className=' bg-black rounded-lg justify-center text-white mt-4 px-2 py-2'>Show Now</button>

//  </div>
//     </div>
//   )
// }

// export default Hero

// components/HeroSection.js
import Link from 'next/link';
import React from 'react';
const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center text-black relative overflow-hidden">
      {/* Replace 'your-image.jpg' with the path to your image */}
      <img
        className="w-auto h-full object-cover"
        src="\admin ui\hero\hero-1.png"
        alt="Hero Section Image"
      />
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
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
