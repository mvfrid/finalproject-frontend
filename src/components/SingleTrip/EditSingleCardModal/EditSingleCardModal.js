/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable quote-props */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography, Modal, Rating, IconButton, CircularProgress, FormHelperText } from '@mui/material';
import { trip, updateSingleCard, fetchTrips } from 'reducers/trip';
import { green } from '@mui/material/colors';
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
  const loading = useSelector((state) => state.trip.isLoadingPost);
  const success = useSelector((state) => state.trip.isSuccessful);

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

    setTimeout(() => {
      handleClose();
      dispatch(trip.actions.setSuccess(false));
    }, 3000);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">

      <Box sx={styles.StyledBoxContainer}>
        <IconButton
          type="button"
          sx={styles.StyledCloseBtn}
          onClick={closeModal}>
          <CloseRoundedIcon />
        </IconButton>
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
                placeholder={currentCommentValue}
                inputProps={{ maxLength: 100 }} />
              <FormHelperText
                sx={{ textAlign: 'right', marginLeft: 'auto', mb: '10px' }}>
                {`${commentValue.length}/100`}
              </FormHelperText>

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
              <Box sx={{ m: 1, position: 'relative' }}>
                <Button
                  variant="contained"
                  sx={buttonSx}
                  disabled={loading}
                  type="submit">
                  Update
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
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

/*
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

                          <Box sx={styles.StyledBtnBox}>
              <Button
                sx={styles.StyledUpdBtn}
                type="submit"
                variant="contained">
            Update
              </Button>

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
*/