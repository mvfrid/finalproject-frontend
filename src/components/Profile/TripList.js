import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MONGO_DB_URL } from 'utils/urls';
import { trip } from 'reducers/trip';

export const TripList = () => {
  const [tripList, setTripList] = useState([]);
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch()

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(MONGO_DB_URL('trips'), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(trip.actions.setError(null));
          console.log('response:', response)
          setTripList(response.response.data)
          // dispatch(trip.actions.set(response.response))
        } else {
          dispatch(trip.actions.setError(response.response));
        }
      })
  }, []);

  return (
    <div className="main">
      <div className="trip-section">
        <h2>Trip collections:</h2>
        <div className="trip-wrapper">
          {tripList.map((singleTrip) => (
            // eslint-disable-next-line no-underscore-dangle
            <div className="trip" key={singleTrip._id}>
              <h3>{singleTrip.tripName}</h3>
              <p>Content here, replace with cards</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/*
<div className="list-wrapper">
      {messageList.map((singleMessage) => (
    <SingleMessage key={singleMessage._id} singleMessage={singleMessage} fetchPosts={fetchPosts} />
      ))}
    </div>
*/