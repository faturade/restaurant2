import React from 'react';
import { Link } from 'react-router-dom';
import StyleGuild from '../components/StyleGuild';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faClock, 
  faLocationDot, 
  faFilePen 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter, 
  faFacebook, 
  faInstagram, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div>
      <StyleGuild activeButton="Contact Us" />
      <div className="container mx-auto p-6 my-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 p-4 bg-[#FFF8F5] mt-6">
            <p className="text-2xl font-bold text-custom-orange mb-2">Contact Information</p>
            <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, earum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam maiores aperiam sint Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full" style={{ width: '3rem', height: '3rem' }}>
                <FontAwesomeIcon icon={faLocationDot} className="text-white text-lg" />
              </div>
              <div>
                <p className="text-md font-semibold" style={{ color: '#FF7517' }}>Location Us</p>
                <p className="text-gray-500 text-sm">Riverside 25, San Francisco, California</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full" style={{ width: '3rem', height: '3rem' }}>
                <FontAwesomeIcon icon={faClock} className="text-white text-lg" />
              </div>
              <div>
                <p className="text-md font-semibold" style={{ color: '#FF7517' }}>Open</p>
                <p className="text-gray-500 text-sm">Mon To Fri 9:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full" style={{ width: '3rem', height: '3rem' }}>
                <FontAwesomeIcon icon={faFilePen} className="text-white text-lg" />
              </div>
              <div>
                <p className="text-md font-semibold" style={{ color: '#FF7517' }}>Reservation</p>
                <p className="text-gray-500 text-sm">Loremsdsadfas23@gmail.com</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link to="/twitter" className="bg-gray-400 rounded-full flex items-center justify-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                <FontAwesomeIcon icon={faTwitter} className="text-custom-orange text-lg"/>
              </Link>
              <Link to="/whatsapp" className="bg-gray-400 rounded-full flex items-center justify-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                <FontAwesomeIcon icon={faWhatsapp} className="text-custom-orange text-lg"/>
              </Link>
              <Link to="/facebook" className="bg-gray-400 rounded-full flex items-center justify-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                <FontAwesomeIcon icon={faFacebook} className="text-custom-orange text-lg"/>
              </Link>
              <Link to="/instagram" className="bg-gray-400 rounded-full flex items-center justify-center" style={{ width: '2.5rem', height: '2.5rem' }}>
                <FontAwesomeIcon icon={faInstagram} className="text-custom-orange text-lg"/>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <p className="mb-2 text-custom-orange" style={{ borderBottom: '1px solid #3E3939', borderTop: '1px solid #3E3939', display: 'inline-block', fontSize: '15px' }}>MAIL US</p>
            <p className="mb-4 text-2xl text-custom-orange">Have a Question?</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Name" />
              <input className="w-full p-2 border border-gray-300 rounded" type="email" placeholder="Email" />
              <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Subject" />
              <input className="w-full p-2 border border-gray-300 rounded" type="tel" placeholder="Phone" />
              <textarea className="w-full md:col-span-2 p-2 border border-gray-300 rounded h-32" placeholder="Message"></textarea>
            </form>
            <Link to="/submit" className="text-center">
              <button
                className="border border-black w-40 h-10 text-custom-orange py-2 px-4 mt-4"
                onClick={() => console.log('Subscribe clicked')}
              >
                Send
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Contact;
