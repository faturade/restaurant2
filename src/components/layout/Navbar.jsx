import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [activeButton, setActiveButton] = useState('');
  const [showStyleGuide, setShowStyleGuide] = useState(true);

  const toggleStyleGuide = (buttonName) => {
    if (buttonName === 'Home') {
      setShowStyleGuide(false);
    } else {
      setShowStyleGuide(true);
    }
    setActiveButton(buttonName);
  };

  return (
    <>
      <nav className="bg-custom-orange p-3 border border-custom-border">
        <div className="container flex justify-around items-center">
          <ul className="flex space-x-8">
            <li><Link to="/" className={`text-drak ${activeButton === 'Home' ? 'font-bold' : ''}`} onClick={() => toggleStyleGuide('Home')}>Home</Link></li>
            <li><Link to="/about" className={`text-drak ${activeButton === 'About' ? 'font-bold' : ''}`} onClick={() => toggleStyleGuide('About')}>About</Link></li>
            <li><Link to="/menu" className={`text-drak ${activeButton === 'Menu' ? 'font-bold' : ''}`} onClick={() => toggleStyleGuide('Menu')}>Menu</Link></li>
            <li><Link to="/reservation" className={`text-drak ${activeButton === 'Reservation' ? 'font-bold' : ''}`} onClick={() => toggleStyleGuide('Reservation')}>Reservation</Link></li>
            <li><Link to="/gallery" className={`text-drak ${activeButton === 'Gallery' ? 'font-bold' : ''}`} onClick={() => toggleStyleGuide('Gallery')}>Gallery</Link></li>
            <li><Link to="/blog" className={`text-drak ${activeButton === 'Blog' ? 'font-bold' : ''}`} onClick={() => toggleStyleGuide('Blog')}>Blog</Link></li>
            <li><Link to="/contact" className={`text-drak ${activeButton === 'Contact' ? 'font-bold' : ''}`} onClick={() => toggleStyleGuide('Contact')}>Contact</Link></li>
          </ul>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-drak">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-drak">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-drak">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-drak">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </nav>
      {showStyleGuide && activeButton !== 'Home' && (
        <div className="bg-custom-orange text-center p-8">
          <p className="text-white font-bold" style={{ borderBottom: '1px solid #3E3939', borderTop: '1px solid #3E3939', display: 'inline-block', fontSize: '30px' }}>{activeButton} Style Guide</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
