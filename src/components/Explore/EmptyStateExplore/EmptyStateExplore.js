import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './EmptyStateExplore.css';

export const EmptyStateExplore = () => {
  return (
    <div className="empty-container">
      <h3>Search to explore new places</h3>
      <Player
        src="https://assets4.lottiefiles.com/datafiles/AtGF4p7zA8LpP2R/data.json"
        loop
        autoplay
        style={{
          width: '300px'
        }} />
    </div>
  )
}