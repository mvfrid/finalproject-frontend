/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable quote-props */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography, Modal, Rating } from '@mui/material';
import { updateSingleCard, fetchTrips } from 'reducers/trip';
import { useParams } from 'react-router-dom';
import * as styles from './StyledEditSingleCardModal'

export const EditSingleCardModal = ({ open, handleClose, card }) => {
  const { id } = useParams();
  const currentCommentValue = useSelector((store) => store.trip.cards.cardComment);
  // const currentStarsValue = useSelector((store) => store.trip.cards.cardStars);
  const cardId = card._id;
  console.log('cardId:', cardId)
  const [commentValue, setCommentValue] = useState('');
  const [starsValue, setStarsValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [id, dispatch]);

  const handleCommentChange = (event) => {
    const newValue = event.target.value;
    console.log(`New commentValue: ${newValue}`);
    setCommentValue(newValue);
  };

  //   const handleStarsChange = (event) => {
  //     const newValue = event.target.value;
  //     console.log(`New starsValue: ${newValue}`);
  //     setStarsValue(newValue);
  //   };

  const patchCardUpdate = (event) => {
    event.preventDefault();
    const updatedData = {};

    if (commentValue.trim() !== '') {
      updatedData.cardComment = commentValue.trim();
    }

    console.log('Dispatching update with data:', updatedData);
    dispatch(updateSingleCard(id, cardId, commentValue.trim(), starsValue));

    console.log('Clearing form values');
    setCommentValue('');
    setStarsValue(0);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">

      <Box sx={styles.StyledBoxContainer}>

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
              type="submit"
              variant="contained">
            Update
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};