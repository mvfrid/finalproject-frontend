/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Box, Button, Typography, Modal, Rating, CardMedia, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { API_KEY } from 'utils/urls';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSingleCard, trip } from 'reducers/trip';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Divider from '@mui/material/Divider';
import { EditSingleCardModal } from '../EditSingleCardModal/EditSingleCardModal';
import * as styles from './StyledSingleTripModal.js'

export const SingleTripModal = ({ open, handleClose, cardId, tripId }) => {
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);
  const tripList = useSelector((state) => state.trip.tripList);

  const singleCard = useSelector((store) => {
    if (!cardId) return null;
    const singleTrip = store.trip.tripList.find((tripItem) => tripItem._id === tripId);
    return singleTrip.cards.find((card) => card._id === cardId);
  });

  const photoWidth = 500;
  const photoReference = singleCard?.cardPhotoRef;
  const placeholderImg = 'https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg'
  const photoUrl = singleCard ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photoWidth}&photoreference=${photoReference}&key=${API_KEY}` : placeholderImg;

  const handleOpen = () => {
    setOpenEditModal(true);
  }

  const closeModal = () => {
    handleClose();
  };

  const updateTripList = () => {
    const updatedTripListAfterDelete = tripList.map((oneTrip) => {
      if (oneTrip._id === tripId) {
        return {
          ...oneTrip,
          cards: oneTrip.cards.filter((card) => card._id !== cardId)
        };
      }
      return oneTrip;
    });

    dispatch(trip.actions.setTripList(updatedTripListAfterDelete));
    handleClose();
  };

  const handleClickDeleteCard = () => {
    dispatch(deleteSingleCard(tripId, singleCard._id))
    updateTripList();
  };

  const handleEditModalClose = () => {
    setOpenEditModal(false);
  };

  const cardDataAvailable = singleCard !== null;

  if (singleCard) {
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
                  aria-label="Close the modal"
                  onClick={closeModal}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>

              <Box sx={styles.StyledMediaBox}>
                <CardMedia
                  sx={styles.StyledCardMediaImg}
                  image={photoReference ? photoUrl : placeholderImg} />
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
                    <span role="img" aria-label="Rating">⭐️</span>
                    {singleCard.cardRating}
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
  } else { return (null) }
}