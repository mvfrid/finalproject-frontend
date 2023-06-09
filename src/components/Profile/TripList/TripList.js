/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrips } from 'reducers/trip';
import { EmptyState } from 'components/Reusable/EmptyState';
import { Link } from 'react-router-dom';
import { TripListCardPreview } from '../TripListCardPreview/TripListCardPreview';
import './TripList.css'

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
        </div>
      </div>
      <EmptyState />
    </>
  )
}