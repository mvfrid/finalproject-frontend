/* eslint-disable linebreak-style */
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './EmptyStateSingleTrip.css'

export const EmptyStateSingleTrip = () => {
  const navigate = useNavigate();

  const onClickGoToExplore = () => {
    navigate('/explore')
  };

  return (
    <div className="empty-container-trip">
      <h3>You have not added any items to your trip yet!</h3>
      <Button
        sx={{ m: 2, backgroundColor: '#43B97F', px: 2, py: 0.5 }}
        type="submit"
        variant="contained"
        size="small"
        onClick={onClickGoToExplore}>
        Go Explore
      </Button>
      <Player
        src="https://assets6.lottiefiles.com/packages/lf20_Rfd6wq.json"
        loop
        autoplay
        speed={0.7}
        style={{
          width: '300px'
        }} />
    </div>
  )
}