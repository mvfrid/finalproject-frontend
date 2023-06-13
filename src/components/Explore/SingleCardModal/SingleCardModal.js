/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CardMedia, IconButton, CircularProgress, Fab, Divider } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { trip, patchTripWithNewCard } from 'reducers/trip';
import { green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import { NewTripModal } from '../../Profile/NewTripModal/NewTripModal';
import * as styles from './StyledSingleCardModal'

export const SingleCardModal = ({ selectedPlace, open, handleClose }) => {
  const [chosenTrip, setChosenTrip] = useState('');
  const [openAdd, setOpenAdd] = useState(false);
  const dispatch = useDispatch();
  // console.log('place:', selectedPlace)

  const tripList = useSelector((store) => store.trip.tripList);
  const loading = useSelector((state) => state.trip.isLoadingPost);
  const success = useSelector((state) => state.trip.isSuccessful);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const closeModal = () => {
    handleClose();
  };

  const handleChange = (event) => {
    setChosenTrip(event.target.value);
    console.log('handleChange event.target.value:', event.target.value)
  };

  const addNewTrip = () => {
    console.log('We want to add a new trip now');
    handleOpenAdd();
  }

  const handleAddCard = () => {
    console.log('handleAddCard selectedPlace', selectedPlace)
    dispatch(patchTripWithNewCard(chosenTrip, selectedPlace));

    setTimeout(() => {
      handleClose();
      dispatch(trip.actions.setSuccess(false));
    }, 3000);
  }

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

  useEffect(() => {
    if (!open) {
      setChosenTrip('');
    }
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={styles.StyledBoxContainer}>
          <Box sx={styles.StyledCloseBtnBox}>
            <IconButton
              type="button"
              sx={styles.StyledCloseBtn}
              onClick={closeModal}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Box sx={styles.StyledMediaBox}>
            <CardMedia
              component="img"
              image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg"
              sx={styles.StyledModalImg} />
          </Box>
          <Box sx={styles.StyledMediaTextBox}>
            <Box sx={styles.StyledMediaTextIconBox}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <img src={selectedPlace.icon} alt="type of place" style={{ maxWidth: '28px', marginRight: '6px' }} />
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {selectedPlace.name}
              </Typography>
            </Box>
            <Typography id="modal-modal-description" sx={{ fontSize: '16px', minWidth: '50px' }}>
            ⭐️ {selectedPlace.rating}
            </Typography>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 1, mb: 4 }}>
            {selectedPlace.vicinity}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Box sx={styles.StyledAddToTripBox}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Trip</InputLabel>
              <Select
                sx={styles.StyledSelect}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={chosenTrip || ''}
                onChange={handleChange}
                label="Select Trip">
                {tripList.map((singleTrip) => (
                  <MenuItem key={singleTrip._id} value={singleTrip._id}>
                    {singleTrip.tripName}
                  </MenuItem>
                ))}
                <MenuItem
                  value="Add New Trip"
                  sx={{ fontWeight: 'bold', color: 'blue' }}
                  onClick={addNewTrip}>
                    ADD NEW TRIP
                </MenuItem>
              </Select>
              <NewTripModal
                onClose={handleCloseAdd}
                open={openAdd} />
            </FormControl>
            <Box sx={styles.StyledBoxWrapper}>
              <Box sx={styles.StyledBoxInnerWrapper}>
                <Fab
                  aria-label="save"
                  color="primary"
                  sx={buttonSx}
                  onClick={handleAddCard}>
                  {success ? <CheckIcon /> : <AddIcon />}
                </Fab>
                {loading && (
                  <CircularProgress
                    size={68}
                    sx={styles.StyledCircularProgress} />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

/*
            <Button
              sx={{ ml: 2 }}
              variant="contained"
              onClick={handleAddCard}>
                Add
            </Button>
            */