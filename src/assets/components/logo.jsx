import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <a href="#" className={`text-2xl font-bold text-white ${className}`}>
      Codi<span className="text-accent">Ra</span>
      <span className="text-accent text-3xl">.</span>
    </a>
  );
};

export default Logo;