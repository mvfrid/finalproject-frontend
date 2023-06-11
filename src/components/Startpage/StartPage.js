/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';

export const StartPage = ({ onPageChange }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onPageChange('start'); // Invoke onPageChange with the current page information
  }, []);

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