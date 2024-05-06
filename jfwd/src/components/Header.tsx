import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header_wrapper">
      <header className="header flex justify-between pt-2 ">
        <h1 className="header_title">JFWD</h1
        ><h1>@2024</h1>
        <button onClick={toggleMenu} className="burger">
          ☰
        </button>
        {isOpen && (
          <nav className="header_nav">
            <button onClick={toggleMenu} className="close">
              ✖
            </button>
            <ul className='flex justify-center '>
              <li className='padding-menu'><a href="#">Home</a></li>
              <li className='padding-menu'><a href="#">works</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        )}
        
      </header>
    </div>
  );
};

export default Header;