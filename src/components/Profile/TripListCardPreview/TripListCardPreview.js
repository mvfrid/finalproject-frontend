/* eslint-disable linebreak-style */
import React from 'react';
import { API_KEY } from 'utils/urls';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './TripListCardPreview.css'
import * as styles from './StyledTripListCardPreview'

export const TripListCardPreview = ({ card, showButton, onCardClick }) => {
  const handleOpenModal = () => {
    onCardClick(card);
  }

  const photoWidth = 500;
  const photoReference = card.cardPhotoRef
  const placeholderImg = 'https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg';
  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photoWidth}&photoreference=${photoReference}&key=${API_KEY}`

  return (
    <Card key={card.place_id} className="card-preview-container">
      <CardMedia
        className="card-preview-img"
        alt="image of card"
        image={photoReference ? photoUrl : placeholderImg} />
      <CardContent style={{ padding: 0 }}>
        <Typography
          gutterBottom
          component="div"
          sx={styles.StyledTypoName}>
          {card.cardName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.StyledTypoRate}>
          <span role="img" aria-label="Rating">⭐️</span>
          {card.cardRating}
        </Typography>
      </CardContent>
      <CardActions>
        {showButton && <Button size="small" onClick={handleOpenModal}>Read More</Button>}
      </CardActions>
    </Card>
  );
}
