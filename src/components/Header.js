import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

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

  return (
    <div className="header">
      <h1>Header component</h1>
      <button type="button" onClick={onClickGoToStart}>Go home</button>
      <button type="button" onClick={onClickGoToLogin}>Go to Log In</button>
      <button type="button" onClick={onClickGoToRegister}>Go to Register</button>
      <button type="button" onClick={onClickGoToExplore}>Go to Explore</button>
      <button type="button" onClick={onClickGoToAbout}>Go to About</button>
    </div>
  )
}