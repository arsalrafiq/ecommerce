"use client";
import React, { useState } from "react";
import Link from "next/link";

// Sample data for demonstration purposes
const products = [
  {
    id: 1,
    name: "Watch 1",
    category: "Watches",
    date: "2023-12-01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$199.99",
    imageUrl: "/admin ui/products/apple-watch-ultra-2.png",
  },
  {
    id: 2,
    name: "Phone 1",
    category: "Phones",
    date: "2023-12-05",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$699.99",
    imageUrl: "/admin ui/products/apple-ipad-air-256gb-purple.png",
  },
  {
    id: 3,
    name: "iPad 1",
    category: "Ipads",
    date: "2023-12-07",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$499.99",
    imageUrl: "/admin ui/products/airpods-max.png",
  },
  {
    id: 4,
    name: "Headphones 1",
    category: "Accessories",
    date: "2023-12-09",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$99.99",
    imageUrl: "/admin ui/products/11-inch-ipad-pro-512gb-space-gray.png",
  },
  {
    id: 5,
    name: "Laptop 1",
    category: "Laptops",
    date: "2023-12-11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$799.99",
    imageUrl:
      "/admin ui/products/apple-iphone-15-pro-max-256gb-natural-titanium.png",
  },
  {
    id: 6,
    name: "Smart TV 1",
    category: "TV & Home",
    date: "2023-12-12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$399.99",
    imageUrl: "/admin ui/products/13-inch-macbokk-air-256gb-space-gray.png",
  },
  {
    id: 7,
    name: "Watch 2",
    category: "Watches",
    date: "2023-12-13",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$249.99",
    imageUrl: "/admin ui/products/apple-watch-series-9-aluminum.png",
  },
  {
    id: 8,
    name: "Phone 2",
    category: "Phones",
    date: "2023-12-15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$899.99",
    imageUrl: "/admin ui/products/apple-iphone-14-128gb-blue.png",
  },
  {
    id: 9,
    name: "Phone 3",
    category: "Phones",
    date: "2023-12-18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$999.99",
    imageUrl: "/admin ui/products/15-inch-macbook-air-2tb-midnight.png",
  },
];

const categories = [
  "Watches",
  "TV & Home",
  "Ipads",
  "Accessories",
  "Laptops",
  "Phones",
];

const ProductView: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("latest");

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
    )
    .sort((a, b) =>
      sortBy === "latest"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((c) => c !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  return (
    <div className="justify-between flex font-bold flex-wrap mb-8 p-8">
      {/* Product Categories */}
      <div className="border flex flex-col md:flex-row md:justify-between md:items-center px-4 w-full md:w-auto mb-4">
        <label className="mr-2">Product Categories:</label>
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <div key={category} className="flex items-center mb-2 md:mb-0 mr-4">
              <input
                type="checkbox"
                id={category}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2 h-6 w-6 border rounded focus:outline-none focus:ring focus:border-black"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="border flex flex-col md:flex-row md:justify-between md:items-center px-4 w-full md:w-auto mb-4">
        <label className="mr-2">Sort By:</label>
        {/* Radio buttons for sorting */}
        <div className="flex items-center space-x-4">
          <div>
            <input
              type="radio"
              id="latest"
              value="latest"
              checked={sortBy === "latest"}
              onChange={() => setSortBy("latest")}
              className="mr-2 w-4 h-4"
            />
            <label htmlFor="latest">Latest</label>
          </div>
          <div>
            <input
              type="radio"
              id="oldest"
              value="oldest"
              checked={sortBy === "oldest"}
              onChange={() => setSortBy("oldest")}
              className="mr-2 w-4 h-4"
            />
            <label htmlFor="oldest">Oldest</label>
          </div>
        </div>
      </div>

      {/* Selected Categories */}
      <div className="mb-4">
        {selectedCategories.length > 0 && (
          <div>
            <strong>Selected Categories:</strong>
            {selectedCategories.map((category) => (
              <span
                key={category}
                className="ml-2 bg-gray-900 text-white p-1 rounded"
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-auto h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-800 mb-2">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
            <Link href={`/product/${product.id}`}>
              <span className="text-gray-800">View Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
