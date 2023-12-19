"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
 import Image from "next/image"
const ServiceData = [
  {
    title: "Apple Watch Series 9 Solo loop",
    description: "Description for Product 1",
    price: "$100.00",
    image: "/admin ui/products/apple-watch-series-9-aluminum.png",
  },
  {
    title: "Apple TV 4K Wi-Fi",
    description: "Description for Product 2",
    price: "$150.00",
    image: "/admin ui/products/apple-tv-4k-wifi.png",
  },
  {
    title: "apple-iphone-15-pro-1tb-blue-titanium",
    description: "Description for Product 3",
    price: "$150.00",
    image: "/admin ui/products/apple-ipad-air-256gb-purple.png",
  },
  {
    title: "Apple Watch Series 9 Solo loop",
    description: "Description for Product 4",
    price: "$100.00",
    image: "/admin ui/products/apple-watch-series-9-aluminum.png",
  },
  {
    title: "Apple TV 4K Wi-Fi",
    description: "Description for Product 5",
    price: "$150.00",
    image: "/admin ui/products/apple-tv-4k-wifi.png",
  },
  {
    title: "apple-iphone-15-pro-1tb-blue-titanium",
    description: "Description for Product 6",
    price: "$150.00",
    image: "/admin ui/products/apple-ipad-air-256gb-purple.png",
  },
];

const Products = () => {
  const imageStyles = {
    '@media (min-width: 640px)': {
      height: '80px',
    },
    '@media (min-width: 768px)': {
      height: '120px',
    },
    '@media (min-width: 1024px)': {
      height: '200px',
    },
    '@media (min-width: 1280px)': {
      height: '300px',
    },
  };

  return (
    <div className="flex justify-center flex-col bg-gray-200 py-8 px-2">
      <h2 className="text-2xl mt-4 font-bold text-center">New Collections</h2>
      <p className="text-start px-2 text-lg">Showing 1 - 3 of 15 Products</p>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[80%] lg:max-w-[90%] mt-4"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-4 mb-8 bg-white items-center group relative shadow-lg text-gray-900 rounded-xl p-8 sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                width={300} // Set a suitable width
                height={200} // Set a suitable height
                layout="responsive"
                style={{ ...imageStyles, width: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div className="flex flex-col justify-centre flex-1 p-2 group-hover:opacity-50 text-center">
                <h1 className="text-lg sm:text-sm lg:text-lg font-bold">{item.title}</h1>
                <div className="font-bold">
                  <h1 className="text-base sm:text-base lg:text-xl">{item.price}</h1>
                  <p className="text-sm sm:text-base lg:text-lg">{item.description}</p>
                </div>
                <RxArrowTopRight className="absolute bottom-2 left-2 w-6 h-6 text-gray-800 group-hover:text-gray-800 group-hover:rotate-45 duration-100" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
