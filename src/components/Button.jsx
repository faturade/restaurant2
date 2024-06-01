import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 bg-[#2C2727] text-white font-semibold rounded shadow-md hover:bg-[#1f1c1c] focus:outline-none focus:ring-2 focus:ring-[#1f1c1c] focus:ring-opacity-75"
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
