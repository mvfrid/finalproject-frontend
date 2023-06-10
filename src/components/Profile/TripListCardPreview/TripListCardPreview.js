/* eslint-disable camelcase */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './TripListCardPreview.css'

export const TripListCardPreview = ({ card, showButton, onCardClick }) => {
  const handleOpenModal = () => {
    onCardClick(card);
  }

  return (
    <Card key={card.place_id} className="card-preview-container">
      <CardMedia
        className="card-preview-img"
        image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" />
      <CardContent style={{ padding: 0 }}>
        <Typography
          gutterBottom
          component="div"
          className="card-preview-name"
          style={{
            fontSize: '12px',
            padding: 2,
            margin: 0,
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
            fontSize: '12px'
          }}>
          ⭐️{card.cardRating}
        </Typography>
      </CardContent>
      <CardActions>
        {showButton && <Button size="small" onClick={handleOpenModal}>Read More</Button>}
      </CardActions>
    </Card>
  );
}
