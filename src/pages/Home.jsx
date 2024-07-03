import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faFilePen } from '@fortawesome/free-solid-svg-icons';
import Resto from '../../src/assets/image/resto2.jpg';
import MenuImage from '../../src/assets/image/Food1.jpg';
import SignatureImage from '../assets/image/td.webp';
import { Link } from 'react-router-dom';

const Home = () => {
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      const API_URL = 'https://dt6rn7p5-3000.asse.devtunnels.ms/client/menu/list-menu?kategori=makanan&sort_by=harga&sort_key=asc&nama_menu=';

      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        if (Array.isArray(data.data.list)) {
          setMenuData(data.data.list);
        } else {
          setMenuData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error.message);
      }
    };

    fetchMenuData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Bagian atas */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 pt-20 mt-auto bg-custom-orange">
        <div className="md:w-1/2 w-full mb-8 md:mb-8 px-8 relative" style={{ right: '-5rem', marginLeft: '3.5rem' }}>
          <h1 className="text-6xl text-white mb-4">Welcome to</h1>
          <h1 className="text-6xl text-white mb-4">Restaurante</h1>
          <p className="text-white mb-6" style={{ position: 'relative', marginTop: '10px', fontWeight: '200' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
            eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.lorem21
            eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.lorem21
          </p>
          <Link to="/reservation">
            <Button text="Reservation" onClick={() => console.log('Reservation clicked')} />
          </Link>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center relative">
          <img
            src={Resto}
            alt="Restaurant"
            className="object-cover rounded-t-full"
            style={{
              height: '400px',
              position: 'absolute',
              marginLeft: '5rem',
              marginTop: '4rem',
              boxShadow: '0px 0px 15px 15px rgba(0, 0, 0, 0.2)'
            }}
          />
        </div>
      </div>

      <div className='mb-8'>
        {/* Bagian Informasi */}
        <div className="p-12 flex justify-evenly items-center" style={{ paddingTop: '6rem', background: '#F6F4F4' }}>
          <div className="flex items-center space-x-2">
            <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full" style={{ width: '3rem', height: '3rem' }}>
              <FontAwesomeIcon icon={faLocationDot} className="text-white text-lg" />
            </div>
            <div>
              <p className="text-md font-semibold" style={{ color: '#FF7517' }}>Location Us</p>
              <p className="text-gray-500 text-sm">Riverside 25, San Francisco, California</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full" style={{ width: '3rem', height: '3rem' }}>
              <FontAwesomeIcon icon={faClock} className="text-white text-lg" />
            </div>
            <div>
              <p className="text-md font-semibold" style={{ color: '#FF7517' }}>Open</p>
              <p className="text-gray-500 text-sm">Mon To Fri 9:00 AM - 9:00 PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full" style={{ width: '3rem', height: '3rem' }}>
              <FontAwesomeIcon icon={faFilePen} className="text-white text-lg" />
            </div>
            <div>
              <p className="text-md font-semibold" style={{ color: '#FF7517' }}>Reservation</p>
              <p className="text-gray-500 text-sm">Loremsdsadfas23@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bagian Cerita */}
        <div className="flex flex-col md:flex-row justify-between items-center p-8 mt-auto" style={{ background: '#F6F4F4' }}>
          <div className="md:w-1/2 w-full flex justify-center items-center relative">
            <img
              src={Resto}
              alt="Restaurant"
              style={{
                height: '350px',
                width: '320px',
                marginLeft: '5rem'
              }}
            />
          </div>
          <div className="hidden md:block h-96 w-px bg-gray-400 mx-4"></div>
          <div className="md:w-1/2 w-full mb-8 md:mb-8 px-8 relative" style={{ marginRight: '6rem' }}>
            <h4 className="text-4xl font-bold text-custom-orange mb-2">The Story</h4>
            <p className="text-dark mb-6" style={{ position: 'relative', marginTop: '10px', fontWeight: '200' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
              eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.lorem21
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col space-y-4">
                <h4 className="text-4xl font-bold text-custom-orange mb-2">The Story</h4>
                <p className="text-dark mb-6" style={{ position: 'relative', marginTop: '10px', fontWeight: '200' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="text-4xl font-bold text-custom-orange mb-2">The Story</h4>
                <p className="text-dark mb-6" style={{ position: 'relative', marginTop: '10px', fontWeight: '200' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
                </p>
              </div>
            </div>
            <div className="flex justify-start flex-col mt-8">
              <h2 className='mb-4 text-xl text-custom-orange'>Signature</h2>
              <img
                src={SignatureImage}
                alt="Signature"
                className="h-12 w-24"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Daftar menu */}
      <div className="p-8 my-8 bg-white">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center">
            <div className="w-full max-w-xs text-center mb-4">
              <h2 className="text-3xl font-bold mb-8 border-t border-b border-gray-800 inline-block text-custom-orange">Menu</h2>
              <h3 className="text-2xl font-bold mb-4 text-custom-orange">Delicious Dish</h3>
              <p className="text-dark mb-6 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
                eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
              </p>
            </div>
            <img
              src={MenuImage}
              alt="Menu"
              className="w-64 h-auto"
              style={{
                height: '400px'
              }}
            />
            <Link to="/submit" className="text-center">
              <button
                className="border border-custom-orange w-48 h-12 text-black py-2 px-4 hover:bg-custom-orange hover:text-white mt-8"
                onClick={() => console.log('Subscribe clicked')}
              >
                See all dishes
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 w-full flex flex-col space-y-4">
            <h2 className="font-bold mb-4" style={{ color: '#FF7517', fontSize: '40px' }}>Starters</h2>
            {menuData.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={`https://dt6rn7p5-3000.asse.devtunnels.ms${item.gambar}`}
                  alt={item.nama_menu}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex mx-4 items-center w-full">
                  <p className="text-lg font-semibold text-custom-orange">{item.nama_menu}</p>
                  <p className="text-gray-500">+-------------------------+</p>
                  <p className="text-gray-500">${item.harga}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
