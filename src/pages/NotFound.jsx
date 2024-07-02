import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../src/assets/image/Food2.jpg';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center space-x-6 mb-8">
        <p className="text-8xl font-bold text-custom-orange">4</p>
        <img src={NotFoundImage} alt="Not Found" className="w-32 h-32 mx-4 rounded-full object-cover" />
        <p className="text-8xl font-bold text-custom-orange">4</p>
      </div>

      <div className="text-center mt-6">
        <h4 className="text-2xl font-bold text-gray-700">Whoops, Nothing delicious to find here!</h4>
        <p className="text-gray-500 mt-2">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-block mt-4">
          <button className="bg-black text-white font-bold py-2 px-4 rounded border-2 border-black hover:bg-white hover:text-black transition duration-300">Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
