import React from 'react';
import StyleGuild from '../components/StyleGuild';
import MenuImage from '../assets/image/resto2.jpg';
import MenuThumbnail from '../assets/image/Food2.jpg';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <StyleGuild activeButton="Our Menu" />
      <div className="item-center p-8 my-20 bg-white">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center">
            <img
              src={MenuImage}
              alt="Menu"
              className="w-1/2 h-auto"
              style={{
                height: '500px',
                width: '330px',
                marginLeft: '4rem'
              }}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div className="w-full flex flex-col space-y-4">
              <h2 className="font-bold mb-4" style={{ color: '#FF7517', fontSize: '40px' }}>Starters</h2>
              <div className="flex items-center">
                <img
                  src={MenuThumbnail}
                  alt="Dish"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">Dish Name</p>
                  <p className="text-gray-500">+-------------------------+</p>
                  <p className="text-gray-500">$12.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={MenuThumbnail}
                  alt="Dish"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">Dish Name</p>
                  <p className="text-gray-500">+-------------------------+</p>
                  <p className="text-gray-500">$12.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={MenuThumbnail}
                  alt="Dish"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">Dish Name</p>
                  <p className="text-gray-500">+-------------------------+</p>
                  <p className="text-gray-500">$12.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={MenuThumbnail}
                  alt="Dish"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">Dish Name</p>
                  <p className="text-gray-500">+-------------------------+</p>
                  <p className="text-gray-500">$12.99</p>
                </div>
              </div>
            </div>
            <Link to="/submit">
              <button
                className="text-black font-bold border-2 border-black bg-white mt-12"
                onClick={() => console.log('Subscribe clicked')}
                style={{ width: '200px', height: '40px' }}
              >
                See all dishes
              </button>
            </Link>  
          </div>
        </div>
      </div>

      <div className='bg-cover bg-center p-8' style={{ backgroundImage: `url(${MenuImage})`, height: '300px', backgroundPosition: 'center' }}> </div>
      <div className="flex justify-center p-8 my-20 bg-white">
        <div className="flex flex-col md:flex-row mb-8 w-full max-w-4xl">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <div className="w-full flex flex-col space-y-4">
              <h2 className="font-bold mb-4" style={{ color: '#FF7517', fontSize: '40px' }}>Starters</h2>
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="flex items-center">
                  <img
                    src={MenuThumbnail}
                    alt="Dish"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="flex items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">Dish Name</p>
                    <p className="text-gray-500">+-------------------------+</p>
                    <p className="text-gray-500">$12.99</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/submit">
              <button
                className="text-black font-bold border-2 border-black bg-white mt-12"
                onClick={() => console.log('Subscribe clicked')}
                style={{ width: '200px', height: '40px' }}
              >
                See all dishes
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center">
            <img
              src={MenuImage}
              alt="Menu"
              className="w-1/2 h-auto"
              style={{
                height: '500px',
                width: '330px',
              }}
            />
          </div>
        </div>
      </div>

      <div className='bg-cover bg-center p-8' style={{ backgroundImage: `url(${MenuImage})`, height: '300px', backgroundPosition: 'center' }}> </div>
      <div className="item-center p-8 my-20 bg-white">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center">
            <img
              src={MenuImage}
              alt="Menu"
              className="w-1/2 h-auto"
              style={{
                height: '500px',
                width: '330px',
                marginLeft: '4rem'
              }}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div className="w-full flex flex-col space-y-4">
              <h2 className="font-bold mb-4" style={{ color: '#FF7517', fontSize: '40px' }}>Starters</h2>
              <div className="flex items-center">
                <img
                  src={MenuThumbnail}
                  alt="Dish"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">Dish Name</p>
                  <p className="text-gray-500">+-------------------------+</p>
                  <p className="text-gray-500">$12.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={MenuThumbnail}
                  alt="Dish"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">Dish Name</p>
                  <p className="text-gray-500">+-------------------------+</p>
                  <p className="text-gray-500">$12.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={MenuThumbnail}
                  alt="Dish"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">Dish Name</p>
                  <p className="text-gray-500">+-------------------------+</p>
                  <p className="text-gray-500">$12.99</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={MenuThumbnail}
                  alt="Dish"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">Dish Name</p>
                  <p className="text-gray-500">+-------------------------+</p>
                  <p className="text-gray-500">$12.99</p>
                </div>
              </div>
            </div>
            <Link to="/submit">
              <button
                className="text-black font-bold border-2 border-black bg-white mt-12"
                onClick={() => console.log('Subscribe clicked')}
                style={{ width: '200px', height: '40px' }}
              >
                See all dishes
              </button>
            </Link>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
