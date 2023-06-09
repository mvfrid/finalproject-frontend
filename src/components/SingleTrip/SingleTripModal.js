/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Box, Button, Typography, Modal, CardMedia, Rating } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSingleCard } from 'reducers/trip';
import { EditSingleCardModal } from './EditSingleCardModal';

export const SingleTripModal = ({ open, handleClose, cardId, tripId }) => {
  console.log('cardid from props', cardId)
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);

  const singleCard = useSelector((store) => {
    if (!cardId) return null;
    const singleTrip = store.trip.tripList.find((trip) => trip._id === tripId);
    return singleTrip.cards.find((card) => card._id === cardId);
  });
  console.log('singlecard', singleCard)
  const handleOpen = () => {
    setOpenEditModal(true);
  }

  const closeModal = () => {
    handleClose();
  };

  const handleClickDeleteCard = () => {
    dispatch(deleteSingleCard(tripId, singleCard._id));
    // NEEDS AN IF ELSE SUCCESS???
  };

  const handleEditModalClose = () => {
    setOpenEditModal(false);
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

  const cardDataAvailable = singleCard !== null;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        {cardDataAvailable ? (
          <>
            <CardMedia
              sx={{ height: 140 }}
              image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {singleCard.cardName}
            </Typography>
            <img src={singleCard.cardIcon} alt="card icon" className="card-icon" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ⭐️ {singleCard.cardRating}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {singleCard.cardVicinity}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {singleCard.cardComment}
            </Typography>

            <Rating
              name="read-only"
              value={singleCard.cardStars}
              readOnly />

          </>
        ) : (
          <Typography id="modal-modal-title" variant="h6" component="h2">
            No card selected
          </Typography>
        )}

        <Button type="button" variant="contained" onClick={handleOpen}>
          Update information
        </Button>

        <EditSingleCardModal
          open={openEditModal}
          handleClose={handleEditModalClose}
          card={singleCard} />

        <Button type="button" variant="contained" onClick={closeModal}>
          Close modal
        </Button>
        <Button
          type="submit"
          variant="contained"
          endIcon={<DeleteIcon />}
          onClick={handleClickDeleteCard}>
        Delete Card
        </Button>
      </Box>
    </Modal>
  );
};
