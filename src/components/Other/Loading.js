import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

// Flygplan loading animation
// https://assets3.lottiefiles.com/packages/lf20_BsQxil31px.json

// Jordglob snurrande
// https://assets6.lottiefiles.com/datafiles/AtGF4p7zA8LpP2R/data.json

export const Loading = () => {
  return (
    <div className="empty-container">
      {/* Add Lottie for explore loading (maybe startpage) */}
      <Player
        src="https://assets6.lottiefiles.com/datafiles/AtGF4p7zA8LpP2R/data.json"
        loop
        autoplay
        speed={1.5}
        style={{
          width: '300px'
        }} />
    </div>
  )
}
