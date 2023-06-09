/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';
import MenuIcon from '@mui/icons-material/Menu';
// import './Header.css';

export const NavBarHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger-close">
        <MenuIcon sx={{ fontSize: '60px', color: 'white' }} onClick={toggleMenu} />
      </div>
      {isOpen && (
        <div className="hamburger-open">
          <button className="MenuBtn" type="button" onClick={onClickGoToStart}>Home</button>
          {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToLogin}>Log In</button>)}
          {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToRegister}>Register</button>)}
          <button className="MenuBtn" type="button" onClick={onClickGoToExplore}>Explore</button>
          <button className="MenuBtn" type="button" onClick={onClickGoToAbout}>About Us</button>
          <button className="MenuBtn" type="button" onClick={onClickGoToProfile}>Profile</button>
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