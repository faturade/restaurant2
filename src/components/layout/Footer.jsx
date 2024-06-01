import React from 'react';
import Button from '../Button';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="bg-gray-800 text-white p-8 flex flex-col md:flex-row justify-between md:px-20">
        {/* Contact Information */}
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Email: contact@restaurant.com</p>
          <p className="text-sm">Address: 123 Main Street, Anytown, USA</p>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:w-1/3 w-full mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
          <p className="mb-4 text-sm">Get the latest updates and offers.</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-700 text-white mr-2"
            />
            <Button
              label="Submit"
              onClick={() => console.log('Subscribe clicked')}
            />
          </form>
        </div>

        {/* Opening Hours */}
        <div className="md:w-1/3 w-full">
          <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
          <p className="text-sm">Monday - Friday: 9:00 AM - 9:00 PM</p>
          <p className="text-sm">Saturday: 10:00 AM - 8:00 PM</p>
          <p className="text-sm">Sunday: Closed</p>
        </div>
      </div>

      <div className="container mx-auto text-center text-white mt-4">
        &copy; 2024 My Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
