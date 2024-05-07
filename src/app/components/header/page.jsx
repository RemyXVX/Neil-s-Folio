import React from 'react';

const Header = () => {
  const tba = '/assets/subrandom.jpeg'; 

  return (
    <header>
      <div className="flex justify-center items-center h-full">
        <img
          src={tba}
          alt="Header Image"
          className="object-cover lg:object-contain max-w-full h-auto lg:max-w-[50%] lg:max-h-fit" // Adjust width as needed
        />
      </div>
    </header>
  );
};

export default Header;