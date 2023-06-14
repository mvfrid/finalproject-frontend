/* eslint-disable linebreak-style */
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './EmptyStateTripList.css'

export const EmptyStateTripList = () => {
  return (
    <div className="empty-container">
      <h3>You have not created any trips yet!</h3>
      <Player
        src="https://assets6.lottiefiles.com/packages/lf20_Rfd6wq.json"
        loop
        speed={0.7}
        autoplay
        style={{
          width: '300px'
        }} />
    </div>
  )
}