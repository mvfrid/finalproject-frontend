import { createSlice } from '@reduxjs/toolkit';

export const trip = createSlice({
  name: 'trip',
  initialState: {
    tripName: null,
    tripPrevious: false,
    tripBucketlist: false,
    tripUpcoming: false,
    tripActiveUser: null,
    createdAt: null,
    cards: [],
    error: null
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
    setCreatedAt: (store, action) => {
      store.createdAt = action.payload
    },
    setCards: (store, action) => {
      store.cards = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
});