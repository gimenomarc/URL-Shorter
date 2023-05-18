import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
    />
  );
};

export default Input;