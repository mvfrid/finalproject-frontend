import React from 'react';
import { Box, Button, Typography, Modal, CardMedia } from '@mui/material';

export const SingleTripModal = ({ open, handleClose, card }) => {
  const closeModal = () => {
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

  const cardDataAvailable = card !== null;

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
              {card.cardName}
            </Typography>
            <img src={card.cardIcon} alt="card icon" className="card-icon" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ⭐️ {card.cardRating}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {card.cardVicinity}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {card.cardComment}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {card.cardStars}
            </Typography>
          </>
        ) : (
          <Typography id="modal-modal-title" variant="h6" component="h2">
            No card selected
          </Typography>
        )}
        <Button type="button" variant="contained" onClick={closeModal}>
          Close modal
        </Button>
      </Box>
    </Modal>
  );
};