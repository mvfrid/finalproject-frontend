import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export const Loading = () => {
  return (
    <div className="empty-container">
      <Player
        src=""
        loop
        autoplay
        style={{
          width: '200px'
        }} />
    </div>
  )
}
