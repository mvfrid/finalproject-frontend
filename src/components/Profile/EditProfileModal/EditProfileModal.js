/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Typography, Modal, CircularProgress, Fab, IconButton, FormHelperText } from '@mui/material';
import { green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { user } from 'reducers/user';
import { MONGO_DB_URL } from '../../../utils/urls';
import * as styles from './StyledEditProfileModal'

export const EditProfileModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [instaValue, setInstaValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const userId = useSelector((store) => store.user.userId);
  const accessToken = useSelector((store) => store.user.accessToken);
  const currentNameValue = useSelector((store) => store.user.userInfo.profileName);
  const currentTextValue = useSelector((store) => store.user.userInfo.profileText);
  const currentInstaValue = useSelector((store) => store.user.userInfo.profileInstagram);

  const buttonSx = success
    ? {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700]
      }
    }
    : {
      bgcolor: '#446173',
      '&:hover': {
        bgcolor: '#2a3d47'
      }
    };

  const closeModal = () => {
    onClose();
  };

  const patchProfileUpdate = (event) => {
    setLoading(true)
    setSuccess(false);
    event.preventDefault();
    const updatedData = {}; // Initialize an empty object to store the updated values

    // Check each field and update the corresponding property in updatedData,
    // if the value is non-empty
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
          setNameValue('');
          setTextValue('');
          setInstaValue('');
        } else {
          dispatch(user.actions.setUserInfo(null));
          dispatch(user.actions.setError(data.response.message))
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          setSuccess(true);
        }, 2000);

        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 3000);
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

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={styles.StyledBoxContainer}>
        <Box sx={styles.StyledCloseBtnBox}>
          <IconButton
            type="button"
            sx={styles.StyledCloseBtn}
            aria-label="Close the modal"
            onClick={closeModal}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 4 }}>
          Update your profile
        </Typography>
        <form>
          <Box sx={styles.StyledFormContainer}>
            <TextField
              value={nameValue}
              onChange={handleNameChange}
              label="Name"
              variant="outlined"
              placeholder={currentNameValue}
              inputProps={{ maxLength: 30 }}
              sx={styles.StyledTextField} />
            <FormHelperText
              aria-label="max length"
              sx={{ textAlign: 'right', marginLeft: 'auto', mb: '10px' }}>
              {`${nameValue.length}/30`}
            </FormHelperText>

            <TextField
              value={textValue}
              onChange={handleTextChange}
              label="About text"
              variant="outlined"
              placeholder={currentTextValue}
              inputProps={{ maxLength: 100 }}
              sx={styles.StyledTextField} />
            <FormHelperText
              sx={{ textAlign: 'right', marginLeft: 'auto', mb: '10px' }}>
              {`${textValue.length}/100`}
            </FormHelperText>
            <TextField
              value={instaValue}
              onChange={handleInstaChange}
              label="Instagram link"
              variant="outlined"
              placeholder={currentInstaValue}
              style={{ marginBottom: '10px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ m: 1, position: 'relative' }}>
                <Fab
                  aria-label="save"
                  color="primary"
                  sx={buttonSx}
                  onClick={patchProfileUpdate}>
                  {success ? <CheckIcon color="inherit" /> : <SaveIcon color="inherit" />}
                </Fab>
                {loading && (
                  <CircularProgress
                    size={68}
                    sx={{
                      color: green[500],
                      position: 'absolute',
                      top: -6,
                      left: -6,
                      zIndex: 1
                    }} />
                )}
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}
