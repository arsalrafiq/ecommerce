import Link from "next/link";
import React from "react";

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
  return (
    // <div className="w-[80%] mx-auto">
    //   <div className=" bg-red-300 justify- text-xl font-bold mb-6 mt-4">Shop by Categories <Link href={"/Categories"} className="px-20">Show All</Link></div>
    <div className="w-[80%] mx-auto">
      <div className="flex justify-between items-center text-xl font-bold mb-6 mt-4 p-4">
        <div>Shop by Categories</div>
        <Link href="/Categories" passHref>
          <span className="px-4 py-2  text-black rounded-md">Show All</span>
        </Link>
      </div>
      
      <div className=" w-[90%] grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-auto">
        {menu.map((item, index) => (
          <div
            key={index}
            className="border rounded-sm px-1 mt-4 mx-2 shadow-2xl text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover mb-4"
            />
            <p className=" bg-white rounded-lg font-bold text-xl">
              {item.title}
            </p>
            <p className="mt-2 text-gray-700">${item.price}</p>
            <p className="mt-2">
                 </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
