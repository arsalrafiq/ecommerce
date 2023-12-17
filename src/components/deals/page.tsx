// pages/deals-of-the-month.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
const DealsOfTheMonth = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0);

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (timeDifference === 0) {
        clearInterval(timerInterval);
        // You can add code here to handle what happens when the target date is reached.
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval); // Cleanup the interval when the component unmounts.
    };
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="textBox">
          <h3 className="text-3xl font-bold mb-4 title">Deals of the Month</h3>
          <p className="text-lg">
            Get ready for a shopping experience like never before with our Deals of the Month! Every
            purchase comes with exclusive perks and offers, making this month a celebration of savvy
            choices and amazing deals. Don't miss out!🎁🛒
          </p>
          <ul className="flex justify-center space-x-8 mt-20">
            <StatBox label="Days" value={time.days} />
            <StatBox label="Hours" value={time.hours} />
            <StatBox label="Minutes" value={time.minutes} />
            <StatBox label="Seconds" value={time.seconds} />
          </ul>
        </div>
         <div
  className="w-auto h-auto sm:h-96 md:h-128 mt-4 px-8 object-cover bg-cover bg-center"
  style={{
    backgroundImage: `url('/assets/images/image-4.svg')`, // Replace with your image path
  }}
></div>

        <Link href="/Categories">
          <button className="bg-black text-white py-2 px-4 rounded focus:outline-none items-center">
            View All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className="w-96 h-auto text-center statBox border border-solid border-gray-300 rounded p-4">
    <h4 className="text-3xl font-bold">{value}</h4>
    <p className="text-sm">{label}</p>
  </li>
);

export default DealsOfTheMonth;



