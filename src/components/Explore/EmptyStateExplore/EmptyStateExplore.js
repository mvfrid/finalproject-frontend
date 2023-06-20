import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './EmptyStateExplore.css';

export const EmptyStateExplore = () => {
  return (
    <div className="empty-container-explore">
      <h3>Search to explore new places</h3>
      <div aria-label="Animated illustration of exploring new places">
        <Player
          src="https://assets10.lottiefiles.com/packages/lf20_Q6tgYJ.json"
          loop
          autoplay
          speed={0.7}
          style={{
            width: '300px',
            m: 0
          }} />
      </div>
    </div>
  )
}