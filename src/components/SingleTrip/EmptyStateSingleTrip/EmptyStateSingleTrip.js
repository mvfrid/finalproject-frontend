import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './EmptyStateSingleTrip.css'

export const EmptyStateSingleTrip = () => {
  return (
    <div className="empty-container">
      <h3>You have not added any places to your trip yet!</h3>
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_ferlPnRfQF.json"
        loop
        autoplay
        style={{
          width: '300px'
        }} />
    </div>
  )
}