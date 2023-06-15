/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { NavBar } from '../NavBar'
import { NavBarHamburger } from '../NavBarHamburger'
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
    <div className="header">
      <h1>
        <a href="/" className="header-link">
          <img src="https://i.postimg.cc/rwCLvnxZ/Namnlo-s-500-200-px-500-150-px-800-200-px-1.png" alt="" />
        </a>
      </h1>
      {isDesktop ? <NavBar /> : <NavBarHamburger />}
    </div>
  )
}
