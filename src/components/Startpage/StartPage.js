import React from 'react';
import { useNavigate } from 'react-router-dom';

export const StartPage = () => {
  const navigate = useNavigate();

  const onClickGoToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="main">
      <h1>ODYSSEY</h1>
      <button type="button" onClick={onClickGoToLogin}>Go to Log In</button>
    </div>
  )
}