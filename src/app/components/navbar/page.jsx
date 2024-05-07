'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const NavigationBar = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Tech Stack', id: 'techStack' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`bg-gray-800 p-4 z-10 ${isSticky ? 'sticky top-0' : ''}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        <div>
          <Link href="/">
            <span className="text-white font-bold text-lg cursor-pointer">Home</span>
          </Link>
        </div>
        <div className={`text-white hidden md:flex justify-between px-2`}>
          <ul className="md:flex gap-8 px-2">
            {navigationItems.map((item, index) => (
              <li key={index} className="flex items-center justify-center hover:text-blue-600">
                <Link href={`#${item.id}`} className="nav-link px-2" onClick={handleLinkClick}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`md:hidden ${isOpen ? 'hidden' : 'block'}`}>
          <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className={`md:hidden ${isSticky ? 'sticky top-16' : ''}`} style={{ zIndex: 50 }}>
            <svg className="w-6 h-6 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
        )}
        {isOpen && (
          <div ref={dropdownRef} className={`md:hidden absolute ${isSticky ? 'top-6' : 'top-6'} right-6 rounded-md opacity-95 bg-gray-600 z-50 hover:font-bold`}>
            <ul>
              {navigationItems.map((item, index) => (
                <li key={index} className="p-4">
                  <Link href={`#${item.id}`} className="nav-link text-white" onClick={handleLinkClick}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
