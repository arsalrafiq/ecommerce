// 'use client'
// import React from "react";
// import Slider from "react-slick";

// const products = [
//     {
//         title: "Apple Watch Series 9 Solo loop",
//         description: "Description for Product 1",
//         price: "$100.00",
//         image: "/admin ui/products/apple-watch-series-9-aluminum.png",
//       },
//       {
//         title: "Apple TV 4K Wi-Fi",
//         description: "Description for Product 2",
//         price: "$150.00",
//         image: "/admin ui/products/apple-tv-4k-wifi.png",
//       },
//       {
//         title: "apple-iphone-15-pro-1tb-blue-titanium",
//         description: "Description for Product 3",
//         price: "$150.00",
//         image: "/admin ui/products/apple-iphone-15-pro-1tb-blue-titanium.png",
//       },
//       {
//         title: "Apple Watch Series 9 Solo loop",
//         description: "Description for Product 4",
//         price: "$100.00",
//         image: "/admin ui/products/apple-watch-series-9-aluminum.png",
//       },
//       {
//         title: "Apple TV 4K Wi-Fi",
//         description: "Description for Product 5",
//         price: "$150.00",
//         image: "/admin ui/products/apple-tv-4k-wifi.png",
//       },
//       {
//         title: "apple-iphone-15-pro-1tb-blue-titanium",
//         description: "Description for Product62",
//         price: "$150.00",
//         image: "/admin ui/products/apple-iphone-15-pro-1tb-blue-titanium.png",
//       },
// ];

// const ProductSlider = () => {
//   const SampleNextArrow = (props: { onClick: () => void }) => {
//     const { onClick } = props;
//     return (
//       <div className="slick-arrow slick-next" onClick={onClick}>
//         Next
//       </div>
//     );
//   };

//   const SamplePrevArrow = (props: { onClick: () => void }) => {
//     const { onClick } = props;
//     return (
//       <div className="slick-arrow slick-prev" onClick={onClick}>
//         Prev
//       </div>
//     );
//   };

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Set the number of products to show in the slider
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow onClick={function (): void {
//         throw new Error("Function not implemented.");
//     } } />,
//     prevArrow: <SamplePrevArrow onClick={function (): void {
//         throw new Error("Function not implemented.");
//     } } />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="bg-gray-100 w-[90%] mx-auto">
//       <div className="text-xl text-center font-bold mb-6 mt-4">New Collections</div>

//       {/* Display at least three products outside the slider */}
//       {/* <div className="bg-gray-100 w-[100%] h-full grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 object-cover mx-auto">
//         {products.slice(0, 3).map((product, index) => (
//           <div key={index} className="items-center px-20 order rounded-sm mt-4 shadow-2xl text-center">
//             <img src={product.image} alt={product.title} className="w-auto h-auto object-cover mb-4" />
//             <p className="bg-white w-auto h-auto rounded-lg font-bold text-xl">{product.title}</p>
//             <p className="w-auto h-auto">{product.description} </p>
//             <p className="mt-2 text-gray-700">{product.price}</p>
//           </div>
//         ))}
//       </div> */}

//       {/* Use Slider for the remaining products */}
//       <div className="bg-red-400 w-[100%] h-full grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 object-cover mx-auto mt-8">
//         <Slider {...sliderSettings}>
//           {products.slice(3).map((product, index) => (
//             <div key={index} className="px-4">
//               <img src={product.image} alt={product.title} className="w-48 h-auto object-cover mb-4" />
//               <p className="bg-white rounded-lg font-bold text-xl">{product.title}</p>
//               <p>{product.description}</p>
//               <p className="mt-2 text-gray-700">{product.price}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default ProductSlider;
