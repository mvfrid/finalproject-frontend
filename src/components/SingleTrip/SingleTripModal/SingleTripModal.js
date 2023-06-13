/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Box, Button, Typography, Modal, Rating, CardMedia, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSingleCard } from 'reducers/trip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { EditSingleCardModal } from '../EditSingleCardModal/EditSingleCardModal';
import * as styles from './StyledSingleTripModal.js'

export const SingleTripModal = ({ open, handleClose, cardId, tripId }) => {
  console.log('cardID from props', cardId)
  console.log('tripID from props', tripId)

  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);

  const singleCard = useSelector((store) => {
    if (!cardId) return null;
    const singleTrip = store.trip.tripList.find((trip) => trip._id === tripId);
    console.log('singletrip', singleTrip)
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
  };

  const handleEditModalClose = () => {
    setOpenEditModal(false);
  };

  const cardDataAvailable = singleCard !== null;

  return (
    <Modal
      sx={styles.StyledModal}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box
        sx={styles.StyledBoxContainer}>
        {cardDataAvailable ? (
          <>
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
                sx={styles.StyledCardMediaImg}
                image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" />
            </Box>
            <Typography
              sx={styles.StyledTypographyName}
              id="modal-modal-title">
              {singleCard.cardName}
            </Typography>

            <Typography
              sx={styles.StyledIconRat}>
              <img src={singleCard.cardIcon} alt="card icon" className="card-icon" />
              ⭐️ {singleCard.cardRating}
            </Typography>

            <Typography
              sx={styles.StyledTypoVic}>
              {singleCard.cardVicinity}
            </Typography>

            <Box sx={styles.StyledReviewBox}>
              <Typography
                id="modal-modal-description"
                sx={styles.StyledTypoReview}>
              My review:
              </Typography>

              <Typography
                id="modal-modal-description"
                sx={styles.StyledTypoReview}>
                {singleCard.cardComment}
              </Typography>

              <Rating
                name="read-only"
                size="large"
                value={singleCard.cardStars}
                readOnly />
            </Box>

            <Box sx={styles.StyledBtnBox}>
              <Button
                sx={styles.StyledBottomBtns}
                type="button"
                size="small"
                variant="outlined"
                onClick={handleOpen}>
                Update review
              </Button>

              <EditSingleCardModal
                open={openEditModal}
                handleClose={handleEditModalClose}
                card={singleCard} />

              <Button
                sx={styles.StyledBottomBtns}
                type="submit"
                size="small"
                variant="outlined"
                endIcon={<DeleteIcon />}
                onClick={handleClickDeleteCard}>
                Delete Card
              </Button>
            </Box>
          </>
        ) : (
          <Typography id="modal-modal-title" variant="h6" component="h2">
            No card selected
          </Typography>
        )}
      </Box>
    </Modal>
  );
}