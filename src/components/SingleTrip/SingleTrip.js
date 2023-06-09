/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTrip } from 'reducers/trip';
import { SingleTripCardPreview } from './SingleTripCardPreview';
import { SingleTripModal } from './SingleTripModal';

export const SingleTrip = () => {
  const { id } = useParams();
  const tripList = useSelector((store) => store.trip.tripList);
  console.log('data from singletrip', tripList)

  const trip = tripList.find((singleTrip) => singleTrip._id === id);
  console.log('data from trip', trip)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleClickDelete = (event) => {
    event.preventDefault();
    dispatch(deleteTrip(id));
    navigate('/profile')
    // NEEDS AN IF ELSE SUCCESS???
  };

  const handleCardClick = (card) => {
    setSelectedCardId(card._id);
    handleOpen();
  };

  return (
    <>
      <div>
        <h2>Trip Name: {trip.tripName}</h2>
      </div>
      <div className="trip-wrapper">
        {trip.cards.map((card) => (
          <SingleTripCardPreview
            card={card}
            showButton
            key={card._id}
            onCardClick={() => handleCardClick(card)} />
        ))}
      </div>
      <SingleTripModal open={open} handleClose={handleClose} cardId={selectedCardId} tripId={id} />
      <Button
        type="submit"
        variant="contained"
        endIcon={<DeleteIcon />}
        onClick={handleClickDelete}>
        Delete trip
      </Button>
    </>
  );
};
