/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { SingleCardPreview } from 'components/Reusable/SingleCardPreview';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTrip } from 'reducers/trip';
import { SingleTripModal } from '../SingleTripModal/SingleTripModal';
import './SingleTrip.css'

export const SingleTrip = () => {
  const { id } = useParams();
  const tripList = useSelector((store) => store.trip.tripList);
  const trip = tripList.find((singleTrip) => singleTrip._id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClickDelete = (event) => {
    event.preventDefault();
    dispatch(deleteTrip(id));
    navigate('/profile')
    // NEEDS AN IF ELSE SUCCESS???
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    handleOpen();
  };

  return (
    <>
      <div>
        <h2>Trip Name: {trip.tripName}</h2>
      </div>
      <div className="trip-wrapper-single">
        {trip.cards.map((card) => (
          <SingleCardPreview
            card={card}
            showButton
            key={card._id}
            onCardClick={() => handleCardClick(card)} />
        ))}
      </div>
      <SingleTripModal open={open} handleClose={handleClose} card={selectedCard} tripId={id} />
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
