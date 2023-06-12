/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
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

  console.log('window.innerWidth', window.innerWidth, 'isDesktop:', isDesktop)

  return (
    <div className="header">
      <h1>
        <a href="/" className="header-link">ODYSSEY</a>
      </h1>
      {isDesktop ? <NavBar /> : <NavBarHamburger />}
    </div>
  )
}

/*
    <div className="hamburger-menu">
      <button className={`hamburger-menu__button ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}>
        <span className="hamburger-menu__icon"></span>
      </button>

      <ul className={`hamburger-menu__list ${isOpen ? 'open' : ''}`}>
        <li className="hamburger-menu__item">Home</li>
        <li className="hamburger-menu__item">About</li>
        <li className="hamburger-menu__item">Contact</li>
      </ul>
    </div>

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';
import './Header.css';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

  const onClickGoToStart = () => {
    navigate('/');
  }

  const onClickGoToLogin = () => {
    navigate('/login');
  }

  const onClickGoToRegister = () => {
    navigate('/register');
  }

  const onClickGoToExplore = () => {
    navigate('/explore');
  }

  const onClickGoToAbout = () => {
    navigate('/about');
  }

  const onClickGoToProfile = () => {
    navigate('/profile');
  }

  const handleLogOut = () => {
    dispatch(user.actions.signOut());
    navigate('/');
  }

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, [accessToken]);

  return (
    <div className="header">
      <h1>ODYSSEY</h1>
      <div className="header-nav">
        <button className="MenuBtn" type="button" onClick={onClickGoToStart}>Home</button>
        {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToLogin}>Log In</button>)}
        {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToRegister}>Register</button>)}
        <button className="MenuBtn" type="button" onClick={onClickGoToExplore}>Explore</button>
        <button className="MenuBtn" type="button" onClick={onClickGoToAbout}>About Us</button>
        <button className="MenuBtn" type="button" onClick={onClickGoToProfile}>Profile</button>
        {accessToken && (<button className="MenuBtn" type="button" onClick={handleLogOut}>Log out</button>)}
      </div>
    </div>
  )
}
    */