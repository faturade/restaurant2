import React from 'react';
import Logo from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Header = () => {
  return (
    <header className="bg-custom-orange p-2">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-dark font-small border border-custom-border py-2 px-7 rounded" style={{ fontSize: '12px' }}>
          0821-6772-9018
        </div>
        <div className="text-white font-bold">
          <img src={Logo} alt="Logo" style={{ height: '155px', width: '220px' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
