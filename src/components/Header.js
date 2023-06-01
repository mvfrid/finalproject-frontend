import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';

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
    if (!accessToken) {
      navigate('/')
    }
  }

  return (
    <div className="header">
      <h1>Header component</h1>
      <button type="button" onClick={onClickGoToStart}>Go home</button>
      <button type="button" onClick={onClickGoToLogin}>Go to Log In</button>
      <button type="button" onClick={onClickGoToRegister}>Go to Register</button>
      <button type="button" onClick={onClickGoToExplore}>Go to Explore</button>
      <button type="button" onClick={onClickGoToAbout}>Go to About</button>
      <button type="button" onClick={onClickGoToProfile}>Go to Profile</button>
      {accessToken && (<button type="button" onClick={handleLogOut}>Log out</button>)}
    </div>
  )
}