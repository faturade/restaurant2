import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="bg-gray-800 text-white p-8 flex flex-col md:flex-row justify-between px-4 mx-auto">
        <div>
          <Link
            to="https://www.instagram.com/"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-xl"
            />
          </Link>
          <Link
            to="https://www.facebook.com/"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-white text-xl" />
          </Link>
          <Link
            to="https://web.whatsapp.com/"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl" />
          </Link>
          <a
            href="https://x.com/"
            className="mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
          </a>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-8 flex flex-col md:flex-row justify-around px-4 mx-auto">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
          <p className="text-sm">Jl. Tarutung Desa Purbatua</p>
          <p className="text-sm">0821-6772-9018</p>
        </div>
        {/* Newsletter Subscription */}
        <div className="md:w-1/3 w-full flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="mb-4 text-sm">Get the latest updates and offers.</p>
          <form className="flex items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-700 text-white mr-2 w-full"
            />
            <Link to="/submit" className="text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => console.log("Subscribe clicked")}
              >
                Submit
              </button>
            </Link>
          </form>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-bold mb-4">Jam Buka</h3>
          <p className="text-sm">Senin - Minggu 9:00 AM - 9:00 PM</p>
        </div>
      </div>
      <div className="container mx-auto text-center text-white mt-4">
        &copy; 2024 My Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
