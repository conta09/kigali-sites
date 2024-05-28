import React from 'react'

const Button = ({ children, onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {children}
      </button>
    );
  };
  
  export default Button;