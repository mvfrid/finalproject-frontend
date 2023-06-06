import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import { postNewTrip } from 'reducers/trip';
import AddIcon from '@mui/icons-material/Add';

export const NewTripModal = ({ open, onClose }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postNewTrip(value));
    // handleClose(); // Close the modal
    onClose();
    setValue('');
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
        <form onSubmit={handleSubmit}>
          <TextField
            value={value}
            onChange={handleChange}
            label="Name of trip"
            variant="outlined"
            style={{ marginBottom: '10px' }}
            sx={{ mr: 2 }}
            required />
          <Button type="submit" variant="contained" endIcon={<AddIcon />}>
              Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

/*

MUI progress button:

      import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField, Typography, Modal, Fab, CircularProgress } from '@mui/material';
import { green } from '@mui/material/colors';
import { postNewTrip } from 'reducers/trip';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

export const NewTripModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const timer = useRef();

  const buttonSx = success
    ? {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700]
      }
    }
    : {};

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleButtonProgressClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postNewTrip(value));
    onClose(); // Close the modal
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
        <form onSubmit={handleSubmit}>
          <TextField
            value={value}
            onChange={handleChange}
            label="Name of trip"
            variant="outlined"
            style={{ marginBottom: '10px' }}
            sx={{ mr: 2 }}
            required />
          <Box sx={{ position: 'relative' }}>
            <Button type="submit" variant="contained" endIcon={<AddIcon />}>
              Save
            </Button>
            <Fab
              aria-label="add"
              color="primary"
              onClick={handleButtonProgressClick}
              sx={buttonSx}>
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
        </form>
      </Box>
    </Modal>
  );
};

  */
