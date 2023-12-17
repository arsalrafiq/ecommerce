"use client";
// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Iprop = {
  pageName: string;
  message?: string;
};

export const Navbar = (props: Iprop) => {
  console.log(props.pageName);
  let isloggin = false;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // This effect is only run once after the initial render
    // It is safe to use useState here
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Pass an empty dependency array to run this effect only once

  return (
    <div className="flex justify-between bg-gray-100 text-white text-bold text-xl p-2">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20">
            <Image
              src="/qdata-logo.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Link href="/">
            <div className="text-black font-serif-bold text-xl">Q-Datasoft</div>
          </Link>
        </div>

        {/* Responsive Sidebar Button for Small Screens */}
        <div className="lg:hidden flex  ">
          <button className="text-black" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Sidebar for Small Screens */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="flex justify-end p-3">
            <button className="text-white" onClick={toggleSidebar}>
              Close
            </button>
          </div>
          <ul className="bg-black hover:bg-slate-500 flex flex-col items-center space-y-4 p-4 rounded-lg">
            <Link href="/">
              <li className="hover:text-gray-400">Home</li>
            </Link>
            <Link href="/shop">
              <li className="hover:text-gray-400">Shop</li>
            </Link>
            <Link href="/login">
              <li className="hover:text-gray-400">Login</li>
            </Link>
            <Link href="/createAccount">
              <li className="hover:text-gray-400">create Account</li>
            </Link>
          </ul>
        </div>
      )}

      <div className="hidden lg:flex lg:items-center lg:space-x-8 justify-between">
        <ul className="bg-black hover:bg-slate-500 flex items-center space-x-4 p-2 rounded-lg">
          <Link href="/">
            <li className="hover:text-gray-400">Home</li>
          </Link>
          <Link href="/shop">
            <li className="hover:text-gray-400">Shop</li>
          </Link>
          <Link href="/login">
            <li className="hover:text-gray-400">Login</li>
          </Link>
        </ul>

        <Link href="/createAccount">
          <button className="bg-black text-white rounded-lg p-2 hover:bg-slate-500 ">
            CreateAccount
          </button>
        </Link>
      </div>
    </div>
  );
};
