import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './EmptyStateExplore.css';

export const EmptyStateExplore = () => {
  return (
    <div className="empty-container">
      <h3>Search to explore new places</h3>
      <Player
        src="https://assets10.lottiefiles.com/packages/lf20_Q6tgYJ.json"
        loop
        autoplay
        style={{
          width: '300px'
        }} />
    </div>
  )
}