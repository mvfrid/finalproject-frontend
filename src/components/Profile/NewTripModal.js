
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Typography, Modal, CircularProgress, Fab } from '@mui/material';
import { green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import { trip, postNewTrip } from 'reducers/trip';
import AddIcon from '@mui/icons-material/Add';

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
            Add a new trip
        </Typography>
        <form>
          <TextField
            value={value}
            onChange={handleChange}
            label="Name of trip"
            variant="outlined"
            style={{ marginBottom: '10px' }}
            sx={{ mr: 2 }}
            disabled={loading}
            required />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ m: 1, position: 'relative' }}>
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
        </form>
      </Box>
    </Modal>
  );
};
