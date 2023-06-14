/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable camelcase */
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
  console.log('SingleTripCardPreview card:', card)
  /*
  const photoWidth = 500;
  const photoReference = selectedPlace.photos[0].photo_reference
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photoWidth}&photoreference=${photoReference}&key=${API_KEY}`
*/

  const handleOpenModal = () => {
    onCardClick(card);
  }

  const photoWidth = 500;
  const photoReference = card.cardPhotoRef
  const photourl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photoWidth}&photoreference=${photoReference}&key=${API_KEY}`

  return (
    <Card
      key={card.place_id}
      sx={styles.StyledPreviewContainer}>
      <CardMedia
        sx={styles.StyledCardPreviewImg}
        // image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg"
        image={photourl} />
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
          variant="body2">
          ⭐️ {card.cardRating}
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
