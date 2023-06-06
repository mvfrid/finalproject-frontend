/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from 'reducers/trip';
import { EmptyState } from 'components/Reusable/EmptyState';
import { SingleCardPreview } from 'components/Reusable/SingleCardPreview';

export const TripList = () => {
  const tripList = useSelector((store) => store.trip.tripList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, []);

  return (
    <>
      <div className="main">
        <div className="trip-section">
          <h2>Trip collections:</h2>
          <div className="trip-wrapper">
            {tripList.map((singleTrip) => (
              // eslint-disable-next-line no-underscore-dangle
              <div className="trip" key={singleTrip._id}>
                <h3>{singleTrip.tripName}</h3>
                {singleTrip.cards.slice(0, 3).map((card) => (
                  <SingleCardPreview props={card} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <EmptyState />
    </>
  )
}