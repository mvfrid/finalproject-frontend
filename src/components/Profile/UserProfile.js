import React, { useState } from 'react';
// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { user } from 'reducers/user';
import { EditProfileModal } from './EditProfileModal';

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { user } from 'reducers/user';

export const UserProfile = () => {
  const [updatedProfileText, setUpdatedProfileText] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const username = useSelector((store) => store.user.username);
  const profileName = useSelector((store) => store.user.profileName);
  const profileText = useSelector((store) => store.user.profileText);
  const profilePicture = useSelector((store) => store.user.profilePicture);
  // const profileInstagram = useSelector((store) => store.user.profileInstagram);
  const dispatch = useDispatch();

  const handleProfileTextUpdate = (updatedText) => {
    console.log('updatedProfileText:', updatedProfileText, 'updatedText:', updatedText)
    setUpdatedProfileText(updatedText);
    dispatch(user.actions.setProfileText(updatedText));
  };

  return (
    <div className="profile-section">
      <img src={profilePicture} alt="user profile" className="profilepic" />
      <div className="profile-text">
        <p>Username: {username}</p>
        <p>Name: {profileName}</p>
        <p>Description: {profileText}</p>
      </div>
      <Button
        variant="outlined"
        onClick={handleOpen}>
      Edit info
      </Button>
      <EditProfileModal open={open} handleClose={handleClose} onClose={handleProfileTextUpdate} />
    </div>
  )
}

/*
<Button variant="outlined" onClick={handleOpen} endIcon={<AddPhotoAlternateIcon />}>
Edit info</Button>
<EditProfileModal open={open} handleClose={handleClose} />

  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    error: null,
    profileName: null,
    profileText: null,
    profilePicture: null,
    profileInstagram: null
    */