/* eslint-disable camelcase */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SingleTripCardPreview.css'

export const SingleTripCardPreview = ({ card, showButton, onCardClick }) => {
  const handleOpenModal = () => {
    onCardClick(card);
  }

  return (
    <Card key={card.place_id} className="card-preview-container-single">
      <CardMedia
        className="card-preview-img-single"
        image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" />
      <CardContent className="cardcontent-single" style={{ padding: 0 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            fontSize: '16px',
            padding: 3,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
            display: 'block'
          }}>
          {card.cardName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            fontSize: '14px',
            padding: 2
          }}>
          ⭐️ {card.cardRating}
        </Typography>
      </CardContent>
      <CardActions style={{ padding: 2, paddingTop: 4 }}>
        {showButton && <Button size="small" variant="outlined" onClick={handleOpenModal} style={{ color: 'black', fontSize: 12 }}>Read More</Button>}
      </CardActions>
    </Card>
  );
}
