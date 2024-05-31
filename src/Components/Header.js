import './Header.css';
import { FaBars } from 'react-icons/fa';
import React, { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://th.bing.com/th/id/R.ecc2c6a62d3c867bab4494820d6739f1?rik=lTDGYcyGIY%2fklA&pid=ImgRaw&r=0" alt="Hospital Logo" />
      </div>
      <div className="header__name">
        <h1>Hospital Name</h1>
      </div>
      <div className="header__nav">
        <FaBars className="header__icon" onClick={toggleDropdown} />
        {dropdownOpen && (
          <div className="dropdown">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;