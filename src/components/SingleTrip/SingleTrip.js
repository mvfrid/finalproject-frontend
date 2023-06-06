/* eslint-disable no-underscore-dangle */
import { SingleCardPreview } from 'components/Reusable/SingleCardPreview';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const SingleTrip = () => {
  const { id } = useParams();
  const tripList = useSelector((store) => store.trip.tripList);
  const trip = tripList.find((singleTrip) => singleTrip._id === id);

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
    </>
  );
};
