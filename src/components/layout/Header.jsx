import React from 'react';
import Logo from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const Header = () => {
  return (
    <header className="bg-custom-orange p-2">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-dark font-small border border-custom-border py-2 px-7 rounded" style={{ fontSize: '12px' }}>
          +62 123 4567 890
        </div>
        
        <div className="text-white font-bold">
          <img src={Logo} alt="Logo" style={{ height: '155px', width: '220px' }} />
        </div>

        <div className="flex items-center space-x-4 justify-center">
          <a href="./" target="_blank" rel="noopener noreferrer" className="text-dark">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
          <Link to="/reservation" className="text-custom-orange font-bold" style={{ fontSize: '14px', textAlign: 'center', justifyContent: 'center', padding: '1rem 1.5rem' }}>
            <Button
              text="Reservation"
              onClick={() => console.log('Reservation clicked')}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
