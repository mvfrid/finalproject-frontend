import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const SingleCardPreview = (props) => {
  console.log('props from explore:', props)
  return (
    <Card key={props.props.place_id} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ⭐️{props.props.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}

/* Explore:
      <div className="places">
        {placesData && placesData.map((place, index) => (
          <div className="single-place" key={place.place_id}>
            <h2>{place.name}</h2>
            <p>⭐️{place.rating}</p>
            <img src={place.icon} alt="" className="place-icon" />
            {photoUrl[index] ? (
              <img src={photoUrl[index]} alt="" className="place-photo" />
            ) : (
              <img src="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" alt="" className="place-photo" />
            )}
            <button type="button" onClick={() => handleClickOpenCard(place)}>Open card</button>

          </div>

          Profile TripList:
                    <div className="trip-wrapper">
            {tripList.map((singleTrip) => (
              // eslint-disable-next-line no-underscore-dangle
              <div className="trip" key={singleTrip._id}>
                <h3>{singleTrip.tripName}</h3>
                <p>Content here, replace with cards</p>
              </div>
            ))}
          </div>
          */

