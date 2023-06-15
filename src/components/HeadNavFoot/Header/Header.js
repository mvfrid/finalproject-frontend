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

    // Set the initial state on component mount
    setIsDesktop(window.matchMedia('(min-width: 1025px)').matches);

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      <h1>
        <a href="/" className="header-link">ODYSSEY</a>
      </h1>
      {isDesktop ? <NavBar /> : <NavBarHamburger />}
    </div>
  )
}
