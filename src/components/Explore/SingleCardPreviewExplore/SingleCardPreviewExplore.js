import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleCardPreviewExplore = ({ place, onCardClick }) => {
  // console.log('props/place from explore:', place);

  const handleButtonClick = (clickedPlace) => {
    // We take the place and send it in a callback function
    // We sent it through onCardClick back to Explore, to use later
    onCardClick(clickedPlace);
    console.log('handleButtonClick "clickedPlace" in SingleCardPreviewExplore', clickedPlace)
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ⭐️{place.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleButtonClick(place)}>Read More</Button>
      </CardActions>
    </Card>
  );
};

export default SingleCardPreviewExplore;