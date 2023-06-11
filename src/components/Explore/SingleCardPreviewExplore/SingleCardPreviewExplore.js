import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SingleCardPreviewExplore.css'

const SingleCardPreviewExplore = ({ place, onCardClick }) => {
  // console.log('props/place from explore:', place);

  const handleButtonClick = (clickedPlace) => {
    // We take the place and send it in a callback function
    // We sent it through onCardClick back to Explore, to use later
    onCardClick(clickedPlace);
    console.log('handleButtonClick "clickedPlace" in SingleCardPreviewExplore', clickedPlace)
  };

  return (
    <Card className="card-preview-container-explore">
      <CardMedia
        className="card-preview-img-explore"
        image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" />
      <CardContent
        className="card-preview-content-explore"
        sx={{ p: 0 }}>
        <Typography
          gutterBottom
          component="div"
          className="card-preview-name-explore"
          style={{
            fontSize: '18px',
            padding: 2,
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
            display: 'block'
          }}>
          {place.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{
            fontSize: '14px'
          }}>
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