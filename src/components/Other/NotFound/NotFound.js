import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import './NotFound.css'

export const NotFound = () => {
  const navigate = useNavigate();

  const onClickGoHome = () => {
    navigate('/login');
  }
  return (
    <div className="main-notfound">
      <h2>Oh no!</h2>
      <h3>It looks like you tried to reach a page which does not exist.</h3>
      <ErrorOutlineIcon
        sx={{ mb: 3, fontSize: '50px', color: '#E2A228' }}
        title="Error Icon"
        aria-hidden="false" />
      <div className="button-container">
        <Button
          sx={{
            mb: 1,
            backgroundColor: '#446173',
            '&:hover': {
              backgroundColor: '#345461'
            }
          }}
          variant="contained"
          type="button"
          onClick={onClickGoHome}
          aria-label="Go to Home page">
          Go to Home
        </Button>
      </div>
    </div>
  )
}