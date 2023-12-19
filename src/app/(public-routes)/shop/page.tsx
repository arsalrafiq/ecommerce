import Link from "next/link";
import React from "react";
import Image from 'next/image';

const menu = [
  {
    title: "Watches",
    price: 500,
    image: "/admin ui/categories/watches-category.png",
  },
  {
    title: "TV & Home",
    price: 700,
    image: "/admin ui/categories/tv-home-category.png",
  },
  {
    title: "Ipads",
    price: 800,
    image: "/admin ui/categories/laptops-category.png",
  },
  {
    title: "Accessories",
    price: 1000,
    image: "/admin ui/categories/accessories-category.png",
  },
  {
    title: "Laptops",
    price: 1000,
    image: "/admin ui/categories/laptops-category.png",
  },
  {
    title: "Phones",
    price: 1000,
    image: "/admin ui/categories/phones-category.png",
  },
];

const Home = () => {
  const imageStyles = {
    '@media (min-width: 640px)': {
      height: '120px',
    },
    '@media (min-width: 768px)': {
      height: '160px',
    },
    '@media (min-width: 1024px)': {
      height: '200px',
    },
    '@media (min-width: 1280px)': {
      height: '240px',
    },
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-between items-center text-xl font-bold mb-6 mt-4 p-4">
        <div>Shop by Categories</div>
        <Link href="/Categories" passHref>
          <span className="px-4 py-2  text-black rounded-md">Show All</span>
        </Link>
      </div>
      
      <div className="w-[100%] grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto">
        {menu.map((item, index) => (
          <div key={index} className="border rounded-sm px-1 mt-2 mx-1 shadow-xl text-center">
            <Image
              src={item.image}
              alt={item.title}
              width={300} // Set a suitable width
              height={200} // Set a suitable height
              layout="responsive"
              style={{ ...imageStyles, width: '100%', objectFit: 'cover', borderRadius: '8px' }}
            />
            <p className="bg-white rounded-lg font-bold text-xl">{item.title}</p>
            <p className="mt-2 text-gray-700">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
