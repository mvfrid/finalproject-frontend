/* eslint-disable linebreak-style */
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './EmptyState.css'

export const EmptyState = () => {
  return (
    <div className="empty-container">
      <h3>You have not created any trips yet!</h3>
      <Player
        src="https://assets2.lottiefiles.com/packages/lf20_bdnjxekx.json"
        loop
        autoplay
        style={{
          width: '300px'
        }} />
    </div>
  )
}