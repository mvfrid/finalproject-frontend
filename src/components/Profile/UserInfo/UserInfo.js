import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { EditProfileModal } from '../EditProfileModal/EditProfileModal';
import './UserInfo.css';

export const UserInfo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userInfo = useSelector((store) => store.user.userInfo);

  console.log('userInfo from store', userInfo)

  const setUpdatedProfile = (updatedText) => {
    console.log('logging the updatedText:', updatedText)
  };

  return (
    <div className="profile-section">
      <div className="profile-info">
        <h2>Hi <span>{userInfo.username}!</span></h2>
        <div className="user-container">
          <div className="profile-user-info">
            <img src={userInfo.profilePicture} alt="user profile" className="profilepic" />
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
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <InstagramIcon sx={{ color: '#446173' }} />
            </a>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Button
          sx={{ bgcolor: '#446173' }}
          className="insta-button"
          variant="contained"
          size="small"
          endIcon={<ManageAccountsIcon />}
          onClick={handleOpen}>
        Edit
        </Button>
        <EditProfileModal open={open} onClose={handleClose} setUpdatedProfile={setUpdatedProfile} />
      </div>
    </div>
  )
}