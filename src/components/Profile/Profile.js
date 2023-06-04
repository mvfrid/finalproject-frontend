import React from 'react';
import { Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { NewTripModal } from './NewTripModal';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { user } from 'reducers/user';

export const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="main">
      <div className="profile-section">
        <h1>Profile</h1>
        <p>username</p>
      </div>

      <Button variant="outlined" onClick={handleOpen} endIcon={<AddPhotoAlternateIcon />}>Add new trip</Button>
      <NewTripModal open={open} handleClose={handleClose} />

      <div className="trip-section">
        <h2>Trip collections:</h2>
        <div className="trip-wrapper">
          <div className="trip">
            <h3>Trip 1</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 2</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 3</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 4</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 5</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 6</h3>
            <p>Content here, replace with cards</p>
          </div>
        </div>
      </div>
    </div>
  )
}