import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ label, type, placeholder, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : ''
        }`}
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

InputForm.defaultProps = {
  placeholder: '',
  error: null
};

export default InputForm;
