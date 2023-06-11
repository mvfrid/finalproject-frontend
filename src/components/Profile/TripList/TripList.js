/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from 'reducers/trip';
import { EmptyState } from 'components/Reusable/EmptyState';
import { Link } from 'react-router-dom';
import './TripList.css'
import { Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { NewTripModal } from '../NewTripModal/NewTripModal';
import { TripListCardPreview } from '../TripListCardPreview/TripListCardPreview';

export const TripList = () => {
  const tripList = useSelector((store) => store.trip.tripList);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchTrips());
  }, []);

  return (
    <div className="trip-section">
      <h2>Trip collections</h2>
      <Button
        variant="outlined"
        sx={{ color: '#446173', borderColor: '#446173', my: '20px' }}
        size="small"
        onClick={handleOpen}
        endIcon={<AddPhotoAlternateIcon />}>
        Add new trip
      </Button>
      <NewTripModal open={open} onClose={handleClose} />

      {tripList.length > 0 ? (
        <div className="trip-wrapper">
          {tripList.map((singleTrip) => (
            <div className="trip" key={singleTrip._id}>
              <Link to={`/trips/${singleTrip._id}`}>
                <h3>{singleTrip.tripName}</h3>
                <div className="mini-card-row">
                  {singleTrip.cards.slice(0, 3).map((card) => (
                    <TripListCardPreview card={card} showButton={false} key={card._id} />
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}