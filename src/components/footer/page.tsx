import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white  p-4 text-center mt-0">
      <h2 className="text-2xl font-bold mb-1">Q-Datasoft</h2>
      <p className="text-sm">
        © Copyright {currentYear} - Developed by Q-Datasoft. All rights
        reserved.
      </p>
      <div>
        <ul className="flex justify-center p-2 space-x-10">
          <li>
            <AiFillInstagram className="text-3xl" />
          </li>
          <li>
            <AiFillFacebook className="text-3xl" />
          </li>
          <li>
            <AiFillTwitterCircle className="text-3xl" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
