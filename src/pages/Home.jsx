import React from 'react';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faFilePen } from '@fortawesome/free-solid-svg-icons';
import Resto from '../../src/assets/image/resto2.jpg';
import MenuImage from '../../src/assets/image/Food1.jpg';
import MenuThumbnail from '../../src/assets/image/Food2.jpg';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-custom-orange">
      {/* Bagian atas */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 pt-20 mt-auto">
        <div className="md:w-1/2 w-full mb-8 md:mb-8 px-8 relative" style={{ right: '-5rem' }}>
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to</h1>
          <h1 className="text-6xl font-bold text-white mb-4">Restaurant</h1>
          <p className="text-white mb-6" style={{ position: 'relative', marginTop: '10px', fontWeight: '200' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
            eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.lorem21
            eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.lorem21
          </p>
          <Button
            label="Learn More"
            onClick={() => console.log('Learn More clicked')}
          />
        </div>

        <div className="md:w-1/2 w-full flex justify-center items-center relative">
          <img
            src={Resto}
            alt="Restaurant"
            className="object-cover rounded-t-full"
            style={{
              height: '350px',
              position: 'absolute',
              marginLeft: '10rem',
              marginTop: '8rem',
              boxShadow: '0px 0px 15px 15px rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      </div>

      {/* Bagian bawah dengan ikon */}
      <div className="p-8 flex justify-around items-center mt-auto" style={{ paddingTop: '6rem', background: '#F6F4F4' }}>
        <div className="flex items-center space-x-4">
          <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full" style={{ width: '3rem', height: '3rem' }}>
            <FontAwesomeIcon icon={faLocationDot} className="text-white text-lg" />
          </div>
          <div>
            <p className="text-md font-semibold" style={{ color: '#FF7517' }}>Location Us</p>
            <p className="text-gray-500 text-sm">Riverside 25, San Francisco, California</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full" style={{ width: '3rem', height: '3rem' }}>
            <FontAwesomeIcon icon={faClock} className="text-white text-lg" />
          </div>
          <div>
            <p className="text-md font-semibold" style={{ color: '#FF7517' }}>Open</p>
            <p className="text-gray-500 text-sm">Mon To Fri 9:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full" style={{ width: '3rem', height: '3rem' }}>
            <FontAwesomeIcon icon={faFilePen} className="text-white text-lg" />
          </div>
          <div>
            <p className="text-md font-semibold" style={{ color: '#FF7517' }}>Reservation</p>
            <p className="text-gray-500 text-sm">lorem23@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bagian cerita */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 pt-20 mt-auto" style={{ background: '#F6F4F4' }}>
        <div className="md:w-1/2 w-full flex justify-center items-center relative">
          <img
            src={Resto}
            alt="Restaurant"
            style={{
              height: '350px',
              marginLeft: '-4rem',
            }}
          />
        </div>
        <div className="md:w-1/2 w-full mb-8 md:mb-8 px-8 relative" style={{marginRight: '6rem'}}>
          <h4 className="text-4xl font-bold text-dark mb-4">The Story</h4>
          <p className="text-dark mb-6" style={{ position: 'relative', marginTop: '10px', fontWeight: '200'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
            eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.lorem21
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-4">
              <h4 className="text-4xl font-bold text-dark mb-4">The Story</h4>
              <p className="text-dark mb-6" style={{ position: 'relative', marginTop: '10px', fontWeight: '200' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
                eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.lorem21
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-4xl font-bold text-dark mb-4">The Story</h4>
              <p className="text-dark mb-6" style={{ position: 'relative', marginTop: '10px', fontWeight: '200' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
                eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.lorem21
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Daftar menu */}
      <div className="bg-white p-8">
        <h2 className="text-3xl font-bold mb-8">Menu</h2>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Delicious Dish</h3>
            <p className="text-dark mb-6" style={{ position: 'relative', marginTop: '10px', fontWeight: '200' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
                eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.lorem21
              </p>
            <img
              src={MenuImage}
              alt="Menu"
              className="w-full h-auto mb-4"
              style={{
                marginLeft: '9rem',
                height: '400px',
                width: '250px'
              }}
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col space-y-4">
            <h2 className="text-3xl font-bold mb-8">Menu</h2>
            <div className="flex items-center">
              <img
                src={MenuThumbnail}
                alt="Dish"
                className="w-16 h-16 rounded-full mr-4"
              />
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Dish Name</p>
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
               <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Dish Name</p>
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
               <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">Dish Name</p>
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
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Dish Name</p>
                <p className="text-gray-500">+-------------------------+</p>
                <p className="text-gray-500">$12.99</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-8">Menu</h2>
            <div className="flex items-center">
              <img
                src={MenuThumbnail}
                alt="Dish"
                className="w-16 h-16 rounded-full mr-4"
              />
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Dish Name</p>
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
               <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Dish Name</p>
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
               <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">Dish Name</p>
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
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Dish Name</p>
                <p className="text-gray-500">+-------------------------+</p>
                <p className="text-gray-500">$12.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
