/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Typography, Modal, CircularProgress, Fab, IconButton, FormHelperText } from '@mui/material';
import { green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { trip, postNewTrip } from 'reducers/trip';
import AddIcon from '@mui/icons-material/Add';
import * as styles from './StyleNewTripModal'

export const NewTripModal = ({ open, onClose }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.trip.isLoadingPost);
  const success = useSelector((state) => state.trip.isSuccessful);

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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const postData = () => {
    dispatch(postNewTrip(value));

    setTimeout(() => {
      setValue('');
      onClose();
      dispatch(trip.actions.setSuccess(false));
    }, 3000);
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
            onClick={closeModal}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <Typography
          sx={styles.StyledTypoTitle}
          variant="h2"
          component="h2">
            Add a new trip
        </Typography>
        <form>
          <TextField
            sx={styles.StyledTypo}
            value={value}
            onChange={handleChange}
            label="Name of trip"
            variant="outlined"
            disabled={loading}
            onKeyPress={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
            required
            inputProps={{ maxLength: 25 }} />
          <FormHelperText
            sx={{ textAlign: 'right', marginLeft: 'auto', mb: '10px' }}>
            {`${value.length}/25`}
          </FormHelperText>
          <Box sx={styles.StyledBoxWrapper}>
            <Box sx={styles.StyledBoxInnerWrapper}>
              <Fab
                aria-label="save"
                color="primary"
                sx={buttonSx}
                onClick={postData}>
                {success ? <CheckIcon /> : <AddIcon />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={styles.StyledCircularProgress} />
              )}
            </Box>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};
