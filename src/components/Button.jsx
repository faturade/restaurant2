import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button 
      onClick={onClick} 
       className="px-5 py-2 bg-[#2C2727] text-white font-semibold rounded shadow-md hover:bg-[#1f1c1c] focus:outline-none focus:ring-2 focus:ring-[#1f1c1c] focus:ring-opacity-75"
    >
      {text}
    </button>
  );
};

export default Button;