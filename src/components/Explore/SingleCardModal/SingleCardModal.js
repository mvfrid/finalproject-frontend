/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { patchTripWithNewCard } from 'reducers/trip';
import { NewTripModal } from '../../Profile/NewTripModal';

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

export const SingleCardModal = ({ selectedPlace, open, handleClose }) => {
  const tripList = useSelector((store) => store.trip.tripList);
  const [chosenTrip, setChosenTrip] = useState('');
  const [openAdd, setOpenAdd] = useState(false);

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const dispatch = useDispatch();
  console.log('place:', selectedPlace)

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
  }

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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedPlace.name}
            <img src={selectedPlace.icon} alt="" className="place-icon" />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ⭐️ {selectedPlace.rating}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" alt="" className="place-photo" />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedPlace.vicinity}
          </Typography>
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Trip</InputLabel>
              <Select
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
          </div>
          <Button onClick={handleAddCard}>Click me to add card to the selected trip</Button>
        </Box>
      </Modal>
    </div>
  );
}