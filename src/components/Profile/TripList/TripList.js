/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from 'reducers/trip';
import { Link, useNavigate } from 'react-router-dom';
import './TripList.css'
import { Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { NewTripModal } from '../NewTripModal/NewTripModal';
import { TripListCardPreview } from '../TripListCardPreview/TripListCardPreview';
import { EmptyStateTripList } from '../EmptyStateTripList/EmptyStateTripList';

export const TripList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tripList = useSelector((store) => store.trip.tripList);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchTrips());
  }, []);

  const onClickGoToExplore = () => {
    navigate('/explore');
  }

  return (
    <div className="trip-section">
      <div className="trip-header">
        <h2>Trip collections</h2>
        <Button
          variant="contained"
          sx={{ color: 'white', backgroundColor: '#446173', my: '20px', width: '120px' }}
          size="small"
          onClick={handleOpen}
          endIcon={<AddPhotoAlternateIcon />}>
        New trip
        </Button>
        <NewTripModal open={open} onClose={handleClose} />
        <Button type="button" size="small" sx={{ color: '#446173' }} onClick={() => onClickGoToExplore()}>Looking for inspiration? Go to Explore</Button>
      </div>

      {tripList.length > 0 ? (
        <div className="trip-wrapper">
          {tripList.map((singleTrip) => (
            <div className="trip" key={singleTrip._id}>
              <Link to={`/trips/${singleTrip._id}`}>
                <div className="singletrip-header">
                  <h3>{singleTrip.tripName}</h3>
                  <p>{singleTrip.cards.length} {singleTrip.cards.length === 1 ? 'item' : 'items'}</p>
                  <hr className="divider-dark" />
                </div>
                <div className="trip-preview-section">
                  <div className="mini-card-row">
                    {singleTrip.cards.slice(0, 3).map((card) => (
                      <TripListCardPreview card={card} showButton={false} key={card._id} />
                    ))}
                  </div>
                  {singleTrip.cards.length > 3 && (<MoreHorizIcon fontSize="large" sx={{ color: '#3e57679f' }} />)}
                  {singleTrip.cards.length === 0 && (
                    <div className="emptytrip">
                      <TravelExploreIcon fontSize="large" sx={{ color: '#3e5767', m: 1 }} />
                      <p>Nothing added yet</p>
                    </div>)}
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <EmptyStateTripList />
      )}
    </div>
  )
}