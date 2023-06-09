/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable quote-props */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import { updateSingleCard } from 'reducers/trip';
import { useParams } from 'react-router-dom';
import './EditSingleTripModal.css'

export const EditSingleCardModal = ({ open, handleClose, card }) => {
  console.log('card id:', card, 'cardid:', card._id);
  const { id } = useParams();
  const currentCommentValue = useSelector((store) => store.trip.cards.cardComment);
  const currentStarsValue = useSelector((store) => store.trip.cards.cardStars);
  const cardId = card._id;
  console.log('2 cardid:', cardId)

  const [commentValue, setCommentValue] = useState('');
  const [starsValue, setStarsValue] = useState('');

  const dispatch = useDispatch();

  const handleCommentChange = (event) => {
    const newValue = event.target.value;
    console.log(`New commentValue: ${newValue}`);
    setCommentValue(newValue);
  };

  const handleStarsChange = (event) => {
    const newValue = event.target.value;
    console.log(`New starsValue: ${newValue}`);
    setStarsValue(newValue);
  };

  const patchCardUpdate = (event) => {
    event.preventDefault();
    const updatedData = {};

    if (commentValue.trim() !== '') {
      updatedData.cardComment = commentValue.trim();
    }

    if (starsValue.trim() !== '') {
      updatedData.cardStars = starsValue.trim();
    }

    console.log('Dispatching update with data:', updatedData);
    dispatch(updateSingleCard(id, cardId, commentValue.trim(), starsValue.trim()));

    console.log('Clearing form values');
    setCommentValue('');
    setStarsValue('');
    handleClose();
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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 4 }}>
          Update your review
        </Typography>
        <form onSubmit={patchCardUpdate}>
          <TextField
            value={commentValue}
            onChange={handleCommentChange}
            label="Comment"
            variant="outlined"
            placeholder={currentCommentValue}
            style={{ marginBottom: '10px' }} />
          <TextField
            value={starsValue}
            onChange={handleStarsChange}
            label="Stars"
            variant="outlined"
            placeholder={currentStarsValue}
            style={{ marginBottom: '10px' }} />
          <Button style={{ margin: '10px' }} type="submit" variant="contained">
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  );
};