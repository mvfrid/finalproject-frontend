/* eslint-disable camelcase */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const SingleCardPreview = ({ card, showButton }) => {
  return (
    <Card key={card.place_id} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.cardName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
                ⭐️{card.cardRating}
        </Typography>
      </CardContent>
      <CardActions>
        {showButton && <Button size="small">Read More</Button>}
      </CardActions>
    </Card>
  );
}
