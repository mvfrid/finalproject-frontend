import React from 'react';
import { Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { NewTripModal } from './NewTripModal';
import { TripList } from './TripList';
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
        <p>Username</p>
      </div>

      <Button variant="outlined" onClick={handleOpen} endIcon={<AddPhotoAlternateIcon />}>Add new trip</Button>
      <NewTripModal open={open} handleClose={handleClose} />

      <TripList />
    </div>
  )
}