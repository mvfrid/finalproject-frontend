/* eslint-disable linebreak-style */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { EditProfileModal } from '../EditProfileModal/EditProfileModal';
import './UserInfo.css';

export const UserInfo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userInfo = useSelector((store) => store.user.userInfo);

  return (
    <div className="profile-section">
      <div className="profile-info">
        <h2>Hi {userInfo.username}!</h2>
        <div className="user-container">
          <div className="profile-user-info">
            <img
              src={userInfo.profilePicture}
              alt="user profile avatar"
              className="profilepic" />
            <div className="name-div" />
          </div>
          <div className="profile-text">
            <div className="profile-name">
              <p>Name:</p>
              <p><span>{userInfo.profileName}</span></p>
            </div>
            <div className="profile-aboutme">
              <p>About me:</p>
              <p><span>{userInfo.profileText}</span></p>
            </div>
            <IconButton
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${userInfo.username}'s Instagram`}>
              <InstagramIcon sx={{ color: '#495057' }} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button
          sx={{ bgcolor: '#446173' }}
          className="insta-button"
          variant="contained"
          size="small"
          aria-label="Edit Profile"
          endIcon={<ManageAccountsIcon />}
          onClick={handleOpen}>
        Edit
        </Button>
        <EditProfileModal open={open} onClose={handleClose} />
      </div>
    </div>
  )
}
