/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
import { createSlice } from '@reduxjs/toolkit';
import { MONGO_DB_URL } from '../utils/urls';

export const trip = createSlice({
  name: 'trip',
  initialState: {
    error: null,
    isLoadingPost: false,
    isLoadingGet: false,
    isSuccessful: false,
    tripList: []
  },
  reducers: {
    setError: (store, action) => {
      store.error = action.payload
    },
    setLoadingPost: (store, action) => {
      store.isLoadingPost = action.payload;
    },
    setLoadingGet: (store, action) => {
      store.isLoadingGet = action.payload;
    },
    setSuccess: (store, action) => {
      store.isSuccessful = action.payload
    },
    setTripList: (store, action) => {
      if (!Array.isArray(action.payload)) {
        console.error('setTripList was called with a non-array value:', action.payload);
      }
      store.tripList = action.payload;
    }
  }
});

// Thunk making a GET-request for all available trips from the database
export const fetchTrips = () => {
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoadingGet(true))

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
        if (response.success) {
          dispatch(trip.actions.setError(null));
          const responseData = response.response.data;
          dispatch(trip.actions.setTripList(responseData));
        } else {
          dispatch(trip.actions.setError(response.response));
        }
      })
      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(trip.actions.setLoadingGet(false));
        }, 1500);
      })
  };
};

// Thunk making a POST-request to add a new trip to the database
export const postNewTrip = (value) => {
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoadingPost(true))
    dispatch(trip.actions.setSuccess(false))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({ tripName: value })
    };

    fetch(MONGO_DB_URL('trips'), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(trip.actions.setError(null));
        } else {
          dispatch(trip.actions.setError(response));
        }
      })

      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(trip.actions.setLoadingPost(false));
          dispatch(trip.actions.setSuccess(true));
        }, 1500);
        setTimeout(() => {
          dispatch(fetchTrips());
        }, 1500);
      })
  };
};

// Thunk making a GET-request to fetch a single trip from the backend
export const getSingleTrip = (tripId) => {
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoadingPost(true))
    dispatch(trip.actions.setSuccess(false))

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getState().user.accessToken
      }
    };

    fetch(MONGO_DB_URL(`trips/${tripId}`), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(trip.actions.setError(null));
        } else {
          dispatch(trip.actions.setError(response));
        }
      })
      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(trip.actions.setLoadingPost(false));
          dispatch(trip.actions.setSuccess(true));
        }, 1500);
      })
  };
};

// Thunk making a PATCH-request to add a new card to the card array in a trip in the database
export const patchTripWithNewCard = (tripId, place) => {
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoadingPost(true))
    dispatch(trip.actions.setSuccess(false))

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
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
          dispatch(trip.actions.setError(null));
        } else {
          dispatch(trip.actions.setError(response));
        }
      })
      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(trip.actions.setLoadingPost(false));
          dispatch(trip.actions.setSuccess(true));
        }, 1500);
      })
  };
};

// Thunk making a DELETE-request to delete a trip from the database
export const deleteTrip = (tripId) => {
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoadingPost(true))

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({ tripId })
    };

    fetch(MONGO_DB_URL(`trips/${tripId}`), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(trip.actions.setError(null));
          dispatch(fetchTrips());
        } else {
          dispatch(trip.actions.setError(response));
        }
      })

      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(trip.actions.setLoadingPost(false));
          dispatch(trip.actions.setSuccess(true));
        }, 1500);
      })
  };
};

// Thunk making a DELETE-request to delete a single card from a trip from the database
export const deleteSingleCard = (tripId, cardId) => {
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoadingPost(true))

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({ tripId, cardId })
    };

    fetch(MONGO_DB_URL(`trips/${tripId}/cards/${cardId}`), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(trip.actions.setError(null));
        } else {
          dispatch(trip.actions.setError(response));
        }
        console.log('response:', response)
      })

      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(trip.actions.setLoadingPost(false));
          dispatch(trip.actions.setSuccess(true));
        }, 1500);
      })
  };
};

// Thunk making a PATCH-request to update a single card in a trip from the database
export const updateSingleCard = (tripId, cardId, cardComment, cardStars) => {
  return (dispatch, getState) => {
    dispatch(trip.actions.setLoadingPost(true))

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getState().user.accessToken
      },
      body: JSON.stringify({ cardComment, cardStars })
    };

    fetch(MONGO_DB_URL(`trips/${tripId}/cards/${cardId}`), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(trip.actions.setError(null));
        } else {
          dispatch(trip.actions.setError(response));
        }
      })

      .catch((error) => {
        dispatch(trip.actions.setError(error))
        console.log('error', error)
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(trip.actions.setLoadingPost(false));
          dispatch(trip.actions.setSuccess(true));
        }, 1500);
        setTimeout(() => {
          dispatch(fetchTrips());
        }, 1500);
      })
  };
};