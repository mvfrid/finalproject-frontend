/* eslint-disable linebreak-style */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';
import './NavBar.css'

export const NavBar = () => {
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

  return (
    <nav className="header-nav">
      <button className="MenuBtn" type="button" onClick={onClickGoToStart} aria-label="Go to Home">Home</button>
      <button className="MenuBtn" type="button" onClick={onClickGoToExplore} aria-label="Go to Explore">Explore</button>
      <button className="MenuBtn" type="button" onClick={onClickGoToProfile} aria-label="Go to Profile">Profile</button>
      <button className="MenuBtn" type="button" onClick={onClickGoToAbout} aria-label="Go to About us">About Us</button>
      {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToLogin} aria-label="Go to login">Log In</button>)}
      {!accessToken && (<button className="MenuBtn" type="button" onClick={onClickGoToRegister} aria-label="Go to register">Register</button>)}
      {accessToken && (<button className="MenuBtn" type="button" onClick={handleLogOut} aria-label="Log out">Log out</button>)}
    </nav>
  )
}
