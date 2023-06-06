/* eslint-disable no-underscore-dangle */
import { Button } from '@mui/material';
import { SingleCardPreview } from 'components/Reusable/SingleCardPreview';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTrip } from 'reducers/trip';

export const SingleTrip = () => {
  const { id } = useParams();
  const tripList = useSelector((store) => store.trip.tripList);
  // const deleteSuccess = useSelector((store) => store.trip.deleteTrip);
  const trip = tripList.find((singleTrip) => singleTrip._id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickDelete = (event) => {
    event.preventDefault();
    dispatch(deleteTrip(id));
    navigate('/profile')
    // NEEDS AN IF ELSE SUCCESS???
  };

  return (
    <>
      <div>
        <h2>Trip Name: {trip.tripName}</h2>
      </div>
      <div className="trip-wrapper">
        {trip.cards.map((card) => (
          <SingleCardPreview card={card} showButton key={card._id} />
        ))}
      </div>
      <Button
        type="submit"
        variant="contained"
        endIcon={<DeleteIcon />}
        onClick={handleClickDelete}>
        Delete trip
      </Button>
    </>
  );
};
