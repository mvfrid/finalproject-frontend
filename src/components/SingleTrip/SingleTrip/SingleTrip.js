/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { deleteTrip } from 'reducers/trip';
import { SingleTripCardPreview } from '../SingleTripCardPreview/SingleTripCardPreview';
import { SingleTripModal } from '../SingleTripModal/SingleTripModal';
import * as styles from './StyledSingleTrip'
import { EmptyStateSingleTrip } from '../EmptyStateSingleTrip/EmptyStateSingleTrip';

export const SingleTrip = () => {
  const { id } = useParams();
  const tripList = useSelector((store) => store.trip.tripList);
  const accessToken = useSelector((store) => store.user.accessToken)
  console.log('data from singletrip', tripList)
  console.log('accesstoken singletrip', accessToken)

  const trip = tripList.find((singleTrip) => singleTrip._id === id);
  console.log('data from trip', trip)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  console.log('selected card id', selectedCardId)

  const handleClickDelete = (event) => {
    event.preventDefault();
    dispatch(deleteTrip(id));
    navigate('/profile')
  };

  const handleClickBack = () => {
    navigate('/profile')
  };

  const handleCardClick = (card) => {
    setSelectedCardId(card._id);
    handleOpen();
  };

  const handleCardNull = (data) => {
    setSelectedCardId(data)
  }

  return (
    <>
      <Typography
        sx={styles.StyledTypoName}>
        {trip.tripName}
      </Typography>
      <div className="trip-wrapper">
        {trip.cards.map((card) => (
          <SingleTripCardPreview
            card={card}
            showButton
            key={card._id}
            onCardClick={() => handleCardClick(card)} />
        ))}
      </div>
      <SingleTripModal
        open={open}
        handleClose={handleClose}
        cardId={selectedCardId}
        tripId={id}
        onCardNull={handleCardNull} />

      <Box sx={styles.StyledBtnBox}>
        <Button
          sx={styles.StyledBtn}
          type="submit"
          variant="contained"
          size="small"
          startIcon={<ArrowBackIosNewRoundedIcon />}
          onClick={handleClickBack}>
        Go Back
        </Button>
        <Button
          sx={styles.StyledBtn}
          type="submit"
          variant="contained"
          size="small"
          endIcon={<DeleteIcon />}
          onClick={handleClickDelete}>
        Delete trip
        </Button>
      </Box>

      {trip.cards.length === 0 && <EmptyStateSingleTrip />}
    </>
  );
};