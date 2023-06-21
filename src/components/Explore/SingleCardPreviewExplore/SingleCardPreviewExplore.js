/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SingleCardPreviewExplore.css'
import * as styles from './StyledSingleCardPreviewExplore'

const SingleCardPreviewExplore = ({ place, photoUrl, onCardClick }) => {
  const handleButtonClick = (clickedPlace) => {
    onCardClick(clickedPlace);
  };

  return (
    <Card sx={styles.StyledPreviewContainerExplore}>
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={`Photo of ${place.name}`}
          className="place-photo" />
      ) : (
        <img
          src="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg"
          alt={`Missing photo of ${place.name}`}
          className="place-photo" />
      )}
      <CardContent
        sx={styles.StyledPreviewContentExplore}>
        <Typography
          sx={styles.StyledCardNameExp}
          gutterBottom
          component="h2"
          className="card-preview-name-explore">
          {place.name}
        </Typography>
        <Typography
          sx={styles.StyledCardRatExp}
          variant="body2"
          color="text.secondary">
          ⭐️{place.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: '#446173' }} onClick={() => handleButtonClick(place)}>Read More</Button>
      </CardActions>
    </Card>
  );
};

export default SingleCardPreviewExplore;
