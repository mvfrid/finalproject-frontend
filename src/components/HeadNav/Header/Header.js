/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { NavBar } from '../NavBar/NavBar'
import { NavBarHamburger } from '../NavBarHamburger/NavBarHamburger'
import './Header.css';

export const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1025);
    };
    setIsDesktop(window.matchMedia('(min-width: 1025px)').matches);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <h1>
        <a
          href="/"
          className="header-link"
          aria-label="Logo link to home page">
          <img
            src="https://i.postimg.cc/rwCLvnxZ/Namnlo-s-500-200-px-500-150-px-800-200-px-1.png"
            alt="Logo Link to Home page" />
        </a>
      </h1>
      {isDesktop ? <NavBar /> : <NavBarHamburger />}
    </header>
  )
}
