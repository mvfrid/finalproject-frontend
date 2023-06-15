/* eslint-disable linebreak-style */
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './EmptyStateSingleTrip.css'

export const EmptyStateSingleTrip = () => {
  return (
    <div className="empty-container-trip">
      <h3>You have not added any items to your trip yet!</h3>
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_ferlPnRfQF.json"
        loop
        autoplay
        speed={0.7}
        style={{
          width: '300px'
        }} />
    </div>
  )
}