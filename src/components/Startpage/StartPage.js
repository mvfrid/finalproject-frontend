/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from '@mui/material';

export const StartPage = ({ onPageChange }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onPageChange('start'); // Invoke onPageChange with the current page information
  }, []);

  const onClickGoToLogin = () => {
    navigate('/login');
  }

  const onClickGoToRegister = () => {
    navigate('/register');
  }

  return (
    <>
      <h2 className="start-h2">Save your travel inspo</h2>
      <div className="empty-container">
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_2w54jzgb.json"
          loop
          autoplay
          style={{
            width: '300px'
          }} />
      </div>
      <div className="button-container">
        <Button
          sx={{
            backgroundColor: '#446173',
            '&:hover': {
              backgroundColor: '#345461' // Optional: You can also control the hover color here
            }
          }}
          variant="contained"
          type="button"
          onClick={onClickGoToLogin}>
      Go to Log In
        </Button>
        <Button
          sx={{
            color: '#446173',
            '&:hover': {
              color: '#345461' // Optional: You can also control the hover color here
            }
          }}
          type="button"
          onClick={onClickGoToRegister}>
      Not a member yet? Go to register
        </Button>
      </div>
    </>
  )
}