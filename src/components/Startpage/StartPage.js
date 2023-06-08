import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';

export const StartPage = () => {
  const navigate = useNavigate();

  const onClickGoToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="main">
      <h1>Start Page</h1>
      <button type="button" onClick={onClickGoToLogin}>Go to Log In</button>
    </div>
  )
}