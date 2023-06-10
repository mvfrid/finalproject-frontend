
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Typography, Modal, CircularProgress, Fab } from '@mui/material';
import { green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
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
    : {};

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
            required />
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
