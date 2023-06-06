import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export const Loading = () => {
  return (
    <div className="empty-container">
      {/* Add Lottie for explore loading (maybe startpage) */}
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
