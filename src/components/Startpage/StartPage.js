/* eslint-disable linebreak-style */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from '@mui/material';
import './StartPage.css';

export const StartPage = ({ onPageChange }) => {
  const accessToken = useSelector((state) => state.user.accessToken);
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

  const onClickGoToExplore = () => {
    navigate('/explore');
  }

  return (
    <div className="startpage">
      <div className="empty-container">
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_2w54jzgb.json"
          loop
          autoplay
          speed={0.8}
          className="lottie-startpage" />
      </div>
      <div className="startpage-text">
        <h2>Your journey starts here</h2>
        <h3>Discover, plan, and save your next adventure. Find inspiration, explore destinations,
        and create personalized travel boards with Odyssey.
        </h3>
        {!accessToken && (
          <div className="start-button-container">
            <Button
              sx={{
                backgroundColor: '#446173',
                '&:hover': {
                  backgroundColor: '#345461'
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
                  color: '#345461'
                }
              }}
              type="button"
              onClick={onClickGoToRegister}>
      Not a member yet? Go to register
            </Button>
          </div>
        )}
        {accessToken && (
          <div className="start-button-container">
            <Button
              sx={{
                backgroundColor: '#446173',
                '&:hover': {
                  backgroundColor: '#345461'
                }
              }}
              variant="contained"
              type="button"
              onClick={onClickGoToExplore}>
      Go to Explore
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}