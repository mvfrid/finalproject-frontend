/* eslint-disable max-len */
/* eslint-disable quote-props */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import { user } from 'reducers/user';
import { MONGO_DB_URL } from '../../utils/urls';

export const EditProfileModal = ({ open, onClose, setUpdatedProfile }) => {
  const [nameValue, setNameValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [instaValue, setInstaValue] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.userId);
  const accessToken = useSelector((store) => store.user.accessToken);
  const currentNameValue = useSelector((store) => store.user.userInfo.profileName);
  const currentTextValue = useSelector((store) => store.user.userInfo.profileText);
  const currentInstaValue = useSelector((store) => store.user.userInfo.profileInstagram);

  const patchProfileUpdate = (event) => {
    // dispatch(setLoading(True))
    event.preventDefault();
    const updatedData = {}; // Initialize an empty object to store the updated values

    // Check each field and update the corresponding property in updatedData if the value is non-empty
    if (nameValue.trim() !== '') {
      updatedData.profileName = nameValue.trim();
    }

    if (textValue.trim() !== '') {
      updatedData.profileText = textValue.trim();
    }

    if (instaValue.trim() !== '') {
      updatedData.profileInstagram = instaValue.trim();
    }

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken
      },
      body: JSON.stringify(updatedData)
    }
    fetch(MONGO_DB_URL(`users/${userId}`), options)
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          dispatch(user.actions.setUserInfo(data.response.data));
          dispatch(user.actions.setError(null));
          setUpdatedProfile(data.response.data);
          // Pass the updated profile text back to the parent component
          setNameValue('');
          setTextValue('');
          setInstaValue('');
          onClose();
        } else {
          dispatch(user.actions.setUserInfo(null));
          dispatch(user.actions.setError(data.response.message))
        }
      })
      .finally(() => {
        // setTimeout(() => setLoading(false), 2000)
      })
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleInstaChange = (event) => {
    setInstaValue(event.target.value);
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
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 4 }}>
          Update your bio
        </Typography>
        <form>
          <TextField
            value={nameValue}
            onChange={handleNameChange}
            label="Name"
            variant="outlined"
            placeholder={currentNameValue}
            style={{ marginBottom: '10px' }} />
          <TextField
            value={textValue}
            onChange={handleTextChange}
            label="Profile text"
            variant="outlined"
            placeholder={currentTextValue}
            style={{ marginBottom: '10px' }} />
          <TextField
            value={instaValue}
            onChange={handleInstaChange}
            label="Instagram link"
            variant="outlined"
            placeholder={currentInstaValue}
            style={{ marginBottom: '10px' }} />
          <Button style={{ margin: '10px' }} type="submit" variant="contained" onClick={patchProfileUpdate}>
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  )
}

/*
const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken
      },
      body: JSON.stringify({
        profileText: textValue,
        profileName: nameValue,
        profileInstagram: instaValue
      })
    }
    fetch(MONGO_DB_URL(`users/${userId}`), options)
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          dispatch(user.actions.setUserInfo(data.response.data));
          dispatch(user.actions.setError(null));
          setUpdatedProfile(data.response.data);
          // Pass the updated profile text back to the parent component
          // setNameValue('');
          // setTextValue('');
          // setInstaValue('');
          onClose();
        } else {
          dispatch(user.actions.setUserInfo(null));
          dispatch(user.actions.setError(data.response.message))
        }
      })
      .finally(() => {
        // setTimeout(() => setLoading(false), 2000)
      })
  };
  */