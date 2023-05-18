import React, { useState } from 'react';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // Lógica para manejar el evento de clic en el botón
    console.log('Input value:', inputValue);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Texto encima del input</h2>
      <div className="flex">
        <input
          type="text"
          placeholder="Ingresa tu texto"
          value={inputValue}
          onChange={handleChange}
          className="rounded-l-lg bg-white border border-gray-300 py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
        />
        <button
          onClick={handleClick}
          className="rounded-r-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
        >
          Haz clic aquí
        </button>
      </div>
    </div>
  );
};

export default InputBox;


