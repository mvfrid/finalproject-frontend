/* eslint-disable max-len */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';
import { MONGO_DB_URL } from '../utils/urls';
// import { user } from './user';

export const trip = createSlice({
  name: 'trip',
  initialState: {
    tripName: null,
    tripPrevious: false,
    tripBucketlist: false,
    tripUpcoming: false,
    tripActiveUser: null,
    tripId: null,
    createdAt: null,
    cards: [],
    error: null,
    isLoading: false,
    tripList: [],
    newTrip: null
  },
  reducers: {
    setTripName: (store, action) => {
      store.tripName = action.payload
    },
    setTripPrevious: (store, action) => {
      store.tripPrevious = action.payload
    },
    setTripBucketlist: (store, action) => {
      store.tripBucketlist = action.payload
    },
    setTripUpcoming: (store, action) => {
      store.tripUpcoming = action.payload
    },
    setTripActiveUser: (store, action) => {
      store.tripActiveUser = action.payload
    },
    setTripId: (store, action) => {
      store.tripId = action.payload
    },
    setCreatedAt: (store, action) => {
      store.createdAt = action.payload
    },
    setCards: (store, action) => {
      store.cards = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
    setTripList: (store, action) => {
      console.log('Setting tripList:', action.payload);
      if (!Array.isArray(action.payload)) {
        console.error('setTripList was called with a non-array value:', action.payload);
      }
      store.tripList = action.payload;
    },
    setNewTrip: (store, action) => {
      store.newTrip = action.payload;
    }
  }
});

// Thunk making a GET-request for all available trips from the database
export const fetchTrips = () => {
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoading(true))

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getState().user.accessToken
      }
    }
    fetch(MONGO_DB_URL('trips'), options)
      .then((response) => response.json())
      .then((response) => {
        console.log('API response:', response); // Log the entire response object
        if (response.success) {
          dispatch(trip.actions.setError(null));
          const responseData = response.response.data; // Access the correct data
          console.log('responseData:', responseData);
          dispatch(trip.actions.setTripList(responseData)); // Dispatch the correct data
        } else {
          dispatch(trip.actions.setError(response.response));
        }
      })
      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        dispatch(trip.actions.setLoading(false));
      })
  };
};

// Thunk making a POST-request to add a new trip to the database
export const postNewTrip = (value) => {
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({ tripName: value })
    };

    fetch(MONGO_DB_URL('trips'), options)
      // postNewTrip
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(trip.actions.setError(null));
          const responseData = response.response.data; // this is expected to be a single trip
          console.log('responseData:', responseData);
          dispatch(trip.actions.setNewTrip(responseData));
          dispatch(fetchTrips());
        } else {
          dispatch(trip.actions.setTripList([]));
          dispatch(trip.actions.setError(response));
        }
        console.log('response:', response)
      })

      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        dispatch(trip.actions.setLoading(false));
      })
  };
};

// Thunk making a PATCH-request to add a new card to the card array in a trip in the database
export const patchTripWithNewCard = (tripId, place) => {
  // const { cardIcon, cardName, cardPhotoRef, cardPlaceId, cardRating, cardVicinity } = req.body;
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoading(true))

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({
        cardIcon: place.icon,
        cardName: place.name,
        cardPhotoRef: place.photos[0].photo_reference,
        cardPlaceId: place.place_id,
        cardRating: place.rating,
        cardVicinity: place.vicinity
      })
    };

    fetch(MONGO_DB_URL(`trips/${tripId}/cards`), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          // eslint-disable-next-line no-underscore-dangle
          dispatch(trip.actions.setError(null));
          // const responseData = response.response.data; // Access the correct data
          console.log('response from patch request:', response);
          // dispatch(trip.actions.setTripList(responseData));
        } else {
          // dispatch(trip.actions.setTripList([]));
          dispatch(trip.actions.setError(response));
        }
      })
      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        dispatch(trip.actions.setLoading(false));
      })
  };
};

/*
const fetchTrips = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getState().accessToken
      }
    };

    dispatch(trip.actions.setError(null));

    fetch(MONGO_DB_URL('trips'), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          console.log('response:', response);
          dispatch(trip.actions.set(response.response.data));
        } else {
          dispatch(trip.actions.setError(response.response));
        }
      });
  };
};
*/