import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { NewTripModal } from './NewTripModal';
import { TripList } from './TripList';
import { UserProfile } from './UserProfile';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="main">
      <UserProfile />

      <Button variant="outlined" onClick={handleOpen} endIcon={<AddPhotoAlternateIcon />}>Add new trip</Button>
      <NewTripModal open={open} handleClose={handleClose} />

      <TripList />
    </div>
  )
}