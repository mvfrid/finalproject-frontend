import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { EditProfileModal } from './EditProfileModal';

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
        <img src={userInfo.profilePicture} alt="user profile" className="profilepic" />
        <div className="profile-text">
          <p>Welcome <span>{userInfo.username}</span></p>
          <p>Name: {userInfo.profileName}</p>
          <p>Description: {userInfo.profileText}</p>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <Button
        variant="contained"
        endIcon={<ManageAccountsIcon />}
        onClick={handleOpen}>
      Edit info
      </Button>
      <EditProfileModal open={open} onClose={handleClose} setUpdatedProfile={setUpdatedProfile} />
    </div>
  )
}