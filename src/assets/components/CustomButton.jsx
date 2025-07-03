import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({ 
  children, 
  to, 
  className = '', 
  variant = 'primary',
  onClick,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 focus:ring-blue-500',
    outline: 'border-2 border-white text-white hover:bg-white/10 focus:ring-white',
    secondary: 'bg-white text-dark-900 hover:bg-gray-100 focus:ring-gray-300',
  };

  const buttonClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
