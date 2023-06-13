/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Box, Button, Typography, Modal, Rating, CardMedia, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSingleCard } from 'reducers/trip';
// import { trip, deleteSingleCard } from 'reducers/trip';
// import CircularProgress from '@mui/material/CircularProgress';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Divider from '@mui/material/Divider';
// import { green } from '@mui/material/colors';
import { EditSingleCardModal } from '../EditSingleCardModal/EditSingleCardModal';
import * as styles from './StyledSingleTripModal.js'

export const SingleTripModal = ({ open, handleClose, cardId, tripId }) => {
  console.log('cardID from props', cardId)
  console.log('tripID from props', tripId)

  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);
  // const loading = useSelector((state) => state.trip.isLoadingPost);
  // const success = useSelector((state) => state.trip.isSuccessful);

  /*
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
    */

  const singleCard = useSelector((store) => {
    if (!cardId) return null;
    const singleTrip = store.trip.tripList.find((tripItem) => tripItem._id === tripId);
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
    dispatch(deleteSingleCard(tripId, singleCard._id))
    handleClose();
    // dispatch(fetchTrips(tripId));
  };

  /*
  const handleClickDeleteCard = () => {
    dispatch(deleteSingleCard(tripId, singleCard._id));

    setTimeout(() => {
      handleClose();
      dispatch(trip.actions.setSuccess(false));
    }, 3000);
  };
      */

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
      <Box sx={styles.StyledBoxContainer}>
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

            <Box sx={styles.StyledPlaceTextBox}>
              <Typography
                sx={styles.StyledTypographyName}
                id="modal-modal-title">
                {singleCard.cardName}
              </Typography>

              <Box sx={styles.StyledPlaceTextIconBox}>
                <Typography sx={styles.StyledIcon}>
                  <img
                    src={singleCard.cardIcon}
                    alt="card icon"
                    style={{ maxWidth: '40px', maxHeight: '35px' }} />
                </Typography>

                <Typography sx={styles.StyledRating}>
                  ⭐️ {singleCard.cardRating}
                </Typography>
              </Box>
            </Box>

            <Typography sx={styles.StyledTypoVic}>
              {singleCard.cardVicinity}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Box sx={styles.StyledReviewBox}>
              <Typography
                id="modal-modal-description"
                sx={styles.StyledTypoReviewTitle}>
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

              {/*
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  variant="contained"
                  sx={buttonSx}
                  disabled={loading}
                  endIcon={<DeleteIcon />}
                  onClick={handleClickDeleteCard}>
                  Delete Card
                </Button>

                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px'
                    }} />
                )}
              </Box>
              */}

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
