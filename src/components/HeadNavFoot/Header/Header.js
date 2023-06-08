/* eslint-disable react-hooks/exhaustive-deps */
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