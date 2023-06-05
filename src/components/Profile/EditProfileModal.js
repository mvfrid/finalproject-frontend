/* eslint-disable no-undef */
/* eslint-disable quote-props */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import { user } from 'reducers/user';
import { MONGO_DB_URL } from '../../utils/urls';

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export const EditProfileModal = ({ open, handleClose, setUpdatedProfileText }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.userId);
  const accessToken = useSelector((store) => store.user.accessToken);

  const patchProfileUpdate = (event) => {
    event.preventDefault();
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken
      },
      body: JSON.stringify({ profileText: value })
    }
    fetch(MONGO_DB_URL(`users/${userId}`), options)
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          dispatch(user.actions.setProfileText(data.response.profileText));
          dispatch(user.actions.setError(null));
          setUpdatedProfileText(data.response.profileText);
          // Pass the updated profile text back to the parent component
        } else {
          dispatch(user.actions.setProfileText(null));
          dispatch(user.actions.setError(data.response.message))
        }
      })
      .finally(() => {
        // setTimeout(() => setLoading(false), 2000)
      })
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Update your bio
        </Typography>
        <form>
          <TextField
            value={value}
            onChange={handleChange}
            label="Profile text"
            variant="outlined"
            style={{ marginBottom: '10px' }}
            required />
          <Button type="submit" variant="contained" onClick={patchProfileUpdate}>
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  )
}

/*
<div className="profile">
<h1>Edit Profile:</h1>
<TextField id="outlined-basic" label="Outlined" variant="outlined" />

<p>Username: {username}</p>
<p>Name: {profileName}</p>
<p>Description: {profileText}</p>
<img src={profilePicture} alt="user profile" />
<Button variant="outlined" onClick={handleOpen} endIcon={<AddPhotoAlternateIcon />}>
Edit info</Button>
<EditProfileModal open={open} handleClose={handleClose} />
</div>
*/