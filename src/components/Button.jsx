import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default Button;
