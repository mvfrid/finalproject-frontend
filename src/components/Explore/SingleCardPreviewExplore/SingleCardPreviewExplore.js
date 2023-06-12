import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Typography from '@mui/material/Typography';
import './SingleCardPreviewExplore.css'
import * as styles from './StyledSingleCardPreviewExplore'

const SingleCardPreviewExplore = ({ place, onCardClick }) => {
  // console.log('props/place from explore:', place);

  const handleButtonClick = (clickedPlace) => {
    // We take the place and send it in a callback function
    // We sent it through onCardClick back to Explore, to use later
    onCardClick(clickedPlace);
    console.log('handleButtonClick "clickedPlace" in SingleCardPreviewExplore', clickedPlace)
  };

  return (
    <Card sx={styles.StyledPreviewContainerExplore}>
      <CardMedia
        sx={styles.StyledCardPreviewImgExplore}
        image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" />
      <CardContent
        sx={styles.StyledPreviewContentExplore}>
        <Typography
          sx={styles.StyledCardNameExp}
          gutterBottom
          component="h3"
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

//  <Button size="small" onClick={() => handleButtonClick(place)}>Read More</Button>