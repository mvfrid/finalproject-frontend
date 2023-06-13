/* eslint-disable linebreak-style */
import { Button } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UnAuthorized.css'

export const UnAuthorized = () => {
  const navigate = useNavigate();

  const onClickGoToLogin = () => {
    navigate('/login');
  }

  const onClickGoToRegister = () => {
    navigate('/register');
  }

  return (
    <div className="main-unauth">
      <h2 className="unauth-h2">Oh no!</h2>
      <h3 className="unauth-h3">You need to be logged in the see this page</h3>
      <KeyIcon sx={{ marginBottom: 2, fontSize: '50px', color: '#E2A228' }} />
      <div className="button-container">
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
              color: '#345461' // Optional: You can also control the hover color here
            }
          }}
          type="button"
          onClick={onClickGoToRegister}>
          Not a member yet? Go to register
        </Button>
      </div>
    </div>
  )
}