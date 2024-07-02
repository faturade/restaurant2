import React, { useState } from 'react';
import StyleGuild from '../components/StyleGuild';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faTruck, faShieldAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    person: '',
    numberOfGuests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div>
      <StyleGuild activeButton="Booking Page" />
      <div className="p-8 bg-white flex flex-col md:flex-row items-center my-20">
        <div className="max-w-lg mx-auto">
          <h2 className="mb-4" style={{ color: '#FF7517', fontSize: '15px', borderBottom: '1px solid #3E3939', borderTop: '1px solid #3E3939', display: 'inline-block' }}>RESERVATION</h2>
          <h2 className="mb-4" style={{ color: '#FF7517', fontSize: '30px' }}>Book Your Table Now</h2>
          <p className="mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, officia magnam, eveniet officiis neque inventore laboriosam.</p>
          <form onSubmit={handleSubmit} className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
                style={{ color: '#FF7517' }}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
                style={{ color: '#FF7517' }}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="person"
                id="person"
                name="person"
                placeholder="Person"
                value={formData.person}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
                style={{ color: '#FF7517' }}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                id="date"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
                className="mt-2 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
                style={{ color: '#FF7517' }}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                id="time"
                name="time"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
                className="mt-2 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
                style={{ color: '#FF7517' }}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                id="numberOfGuests"
                name="numberOfGuests"
                placeholder="Number of Guests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                className="mt-2 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
                style={{ color: '#FF7517' }}
              />
            </div>
            <div className="w-full px-2">
              <button
                type="submit"
                className="text-white font-bold bg-orange-500 mt-4 py-2 px-4 rounded w-full"
                style={{ backgroundColor: '#FF7517' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center md:justify-start">
          <img
            src="https://via.placeholder.com/300x450"
            alt="Placeholder"
            className="h-auto"
            style={{
              height: '450px',
              width: '300px'
            }}
          />
        </div>
      </div>
      <div className="p-8 bg-white flex flex-col md:flex-row items-center my-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/300x450"
            alt="Placeholder"
            className="h-auto"
            style={{
              height: '450px',
              width: '350px',
            }}
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="mb-4" style={{ color: '#FF7517', fontSize: '15px', borderBottom: '1px solid #3E3939', borderTop: '1px solid #3E3939', display: 'inline-block' }}>WHY CHOOSE US</h2>
          <h2 className="mb-4" style={{ color: '#FF7517', fontSize: '30px' }}>why We Are The Best</h2>
          <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, dolorem Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center border p-2">
              <FontAwesomeIcon icon={faUtensils} className="text-xl" style={{ color: '#FF7517' }} />
              <h3 className="text-lg font-medium ml-2">Fresh Food</h3>
            </div>
            <div className="flex items-center border p-2">
              <FontAwesomeIcon icon={faTruck} className="text-xl" style={{ color: '#FF7517' }} />
              <h3 className="text-lg font-medium ml-2">Fast Delivery</h3>
            </div>
            <div className="flex items-center border p-2">
              <FontAwesomeIcon icon={faShieldAlt} className="text-xl" style={{ color: '#FF7517' }} />
              <h3 className="text-lg font-medium ml-2">Quality Maintain</h3>
            </div>
            <div className="flex items-center border p-2">
              <FontAwesomeIcon icon={faClock} className="text-xl" style={{ color: '#FF7517' }} />
              <h3 className="text-lg font-medium ml-2">24/7 Service</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
