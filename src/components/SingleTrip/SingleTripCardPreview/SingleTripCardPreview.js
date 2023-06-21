/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API_KEY } from 'utils/urls';
import * as styles from './StyledSingleTripCardPreview.js'

export const SingleTripCardPreview = ({ card, showButton, onCardClick }) => {
  const handleOpenModal = () => {
    onCardClick(card);
  }

  const photoWidth = 500;
  const photoReference = card.cardPhotoRef
  const placeholderImg = 'https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg';
  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photoWidth}&photoreference=${photoReference}&key=${API_KEY}`

  return (
    <Card
      key={card.place_id}
      sx={styles.StyledPreviewContainer}>
      <CardMedia
        sx={styles.StyledCardPreviewImg}
        image={photoReference ? photoUrl : placeholderImg} />
      <CardContent
        sx={styles.StyledCardContentSingle}>
        <Typography
          sx={styles.StyledCardTypoName}
          gutterBottom
          variant="h5"
          component="div">
          {card.cardName}
        </Typography>
        <Typography
          sx={styles.StyledCardTypoRat}
          aria-hidden="false"
          aria-labelledby="kitten"
          aria-label="puppy"
          aria-describedby="goldfish"
          // aria-labelledby={`Rating: ${card.cardRating}`}
          // aria-label={`Rating: ${card.cardRating}`}
          variant="body2">
          <span role="img" aria-label="puppy">⭐️</span>
          {card.cardRating}
        </Typography>
      </CardContent>
      <CardActions>
        {showButton
        && <Button
          sx={styles.StyledCardBtn}
          size="small"
          variant="outlined"
          onClick={handleOpenModal}>
          Read More
        </Button>}
      </CardActions>
    </Card>
  );
}
