/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ToggleButton } from '@mui/material';
// import './Header.css';

export const NavBarHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hamburgerOpenRef = useRef(null);
  const accessToken = useSelector((store) => store.user.accessToken);

  const onClickGoToStart = () => {
    setIsOpen(false);
    navigate('/');
  }

  const onClickGoToLogin = () => {
    setIsOpen(false);
    navigate('/login');
  }

  const onClickGoToRegister = () => {
    setIsOpen(false);
    navigate('/register');
  }

  const onClickGoToExplore = () => {
    setIsOpen(false);
    navigate('/explore');
  }

  const onClickGoToAbout = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
    navigate('/about');
  }

  const onClickGoToProfile = () => {
    setIsOpen(false);
    navigate('/profile');
  }

  const handleLogOut = () => {
    setIsOpen(false);
    dispatch(user.actions.signOut());
    navigate('/');
  }

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, [accessToken]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && hamburgerOpenRef.current && !hamburgerOpenRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="hamburger-menu">
      <ToggleButton value="" onClick={() => setIsOpen(!isOpen)} sx={{ border: 'none' }}>
        {isOpen ? <CloseIcon
          sx={{ fontSize: '56px', mt: '8px', color: 'white' }}
          onClick={toggleMenu} />
          : <MenuIcon sx={{ fontSize: '56px', color: 'white' }} onClick={toggleMenu} />}
      </ToggleButton>
      {isOpen && (
        <div className="hamburger-open" ref={hamburgerOpenRef}>
          <button className="MenuBtn" type="button" onClick={onClickGoToStart}>Home</button>
          <button className="MenuBtn" type="button" onClick={onClickGoToExplore}>Explore</button>
          <button className="MenuBtn" type="button" onClick={onClickGoToProfile}>Profile</button>
          <button className="MenuBtn" type="button" onClick={onClickGoToAbout}>About Us</button>
          {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToLogin}>Log In</button>)}
          {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToRegister}>Register</button>)}
          {accessToken && (<button className="MenuBtn" type="button" onClick={handleLogOut}>Log out</button>)}
        </div>
      )}
    </div>
  )
}

/*
sx={{
                    color: green[500],
                    position: 'absolute',
                    top: -6,
                    left: -6,
                    zIndex: 1
                  }}

      <button className="MenuBtn" type="button" onClick={onClickGoToStart}>Home</button>
      {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToLogin}>Log In</button>)}
      {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToRegister}>Register</button>)}
      <button className="MenuBtn" type="button" onClick={onClickGoToExplore}>Explore</button>
      <button className="MenuBtn" type="button" onClick={onClickGoToAbout}>About Us</button>
      <button className="MenuBtn" type="button" onClick={onClickGoToProfile}>Profile</button>
      {accessToken && (<button className="MenuBtn" type="button" onClick={handleLogOut}>Log out</button>)}
*/