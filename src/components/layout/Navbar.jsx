import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-orange p-3 relative md:border md:border-black border-transparent">
      <div className="container flex justify-around items-center">
        {/* Navbar links for desktop */}
        <ul className="hidden md:flex md:items-center space-x-8 md:space-x-12 mt-4 md:mt-0">
          <li>
            <Link to="/" className="text-black hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-black hover:text-gray-700">
              Tentang
            </Link>
          </li>
          <li>
            <Link to="/menu" className="text-black hover:text-gray-700">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservation" className="text-black hover:text-gray-700">
              Reservasi
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black hover:text-gray-700">
              Kontak
            </Link>
          </li>
        </ul>

        {/* Social media icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Hamburger menu icon */}
        <div className="md:hidden p-4 inset-0 flex justify-end w-full h-fit fixed before:content-normal z-50 before:w-screen before:h-full before:bg-orange-700 before:absolute before:inset-0 before:opacity-90">
          <button
            onClick={toggleMenu}
            className="text-black bg-white p-2 rounded focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}

      <div
        className={`fixed inset-0 z-50 w-3/4 h-screen bg-white p-6 flex flex-col space-y-4 ${
          isOpen ? "animate-slide-in" : "animate-slide-out"
        }`}
      >
        <Link to="/" className="text-black hover:text-gray-700">
          Home
        </Link>
        <Link to="/about" className="text-black hover:text-gray-700">
          About
        </Link>
        <Link to="/menu" className="text-black hover:text-gray-700">
          Menu
        </Link>
        <Link to="/reservation" className="text-black hover:text-gray-700">
          Reservation
        </Link>
        <Link to="/contact" className="text-black hover:text-gray-700">
          Contact
        </Link>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
