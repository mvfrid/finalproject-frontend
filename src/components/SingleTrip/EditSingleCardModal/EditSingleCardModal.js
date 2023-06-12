/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable quote-props */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField, Typography, Modal, Rating, IconButton } from '@mui/material';
import { updateSingleCard, fetchTrips } from 'reducers/trip';
import { useParams } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import * as styles from './StyledEditSingleCardModal'

export const EditSingleCardModal = ({ open, handleClose, card }) => {
  const { id } = useParams();
  const currentCommentValue = card.cardComment;
  const currentStarsValue = card.cardStars;
  console.log('currentCommentValue', currentCommentValue);
  console.log('currentStarsValue', currentStarsValue);

  const cardId = card._id;
  console.log('cardId:', cardId)

  const [commentValue, setCommentValue] = useState(currentCommentValue || '');
  const [starsValue, setStarsValue] = useState(currentStarsValue || 0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [id, dispatch]);

  const closeModal = () => {
    handleClose();
  };

  const handleCommentChange = (event) => {
    const newValue = event.target.value;
    console.log(`New commentValue: ${newValue}`);
    setCommentValue(newValue);
  };

  const patchCardUpdate = (event) => {
    event.preventDefault();
    const updatedData = {};

    if (commentValue.trim() !== '' && commentValue !== currentCommentValue) {
      updatedData.cardComment = commentValue.trim();
    }

    if (starsValue !== currentStarsValue) {
      updatedData.cardStars = starsValue;
    }

    console.log('Dispatching update with data:', updatedData);
    dispatch(updateSingleCard(id, cardId, commentValue.trim(), starsValue));
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">

      <Box sx={styles.StyledBoxContainer}>
        <Box sx={styles.StyledCloseBtnBox}>
          <IconButton
            type="button"
            sx={styles.StyledCloseBtn}
            onClick={closeModal}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <Box>
          <Typography
            sx={styles.StyledTypo}
            variant="h2"
            component="h2">
          Update your review
          </Typography>

          <form onSubmit={patchCardUpdate}>
            <Box sx={styles.StyledFormBox}>
              <TextField
                sx={styles.StyledTextField}
                value={commentValue}
                onChange={handleCommentChange}
                label="Comment"
                variant="outlined"
                placeholder={currentCommentValue} />

              <Rating
                name="simple-controlled"
                value={starsValue}
                size="large"
                onChange={(event, newValue) => {
                  console.log(`New starsValue: ${newValue}`);
                  setStarsValue(newValue);
                }} />
            </Box>
            <Box sx={styles.StyledBtnBox}>
              <Button
                sx={styles.StyledUpdBtn}
                type="submit"
                variant="contained">
            Update
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};