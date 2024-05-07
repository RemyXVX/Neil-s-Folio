import React from 'react';

const Header = () => {
  const abstart = '/assets/abstart.png'; 
  return (
    <header>
      <div className="flex justify-center items-center h-full">
        <img
          src={abstart}
          alt="Header Image"
          className="max-w-full h-auto"
        />
      </div>
    </header>
  );
};

export default Header;
