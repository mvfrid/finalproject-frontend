import { createSlice } from '@reduxjs/toolkit';

// OBS! Vet ej om vi ska använda denna för cards, men skapar den så länge ändå.
// Ev. att den sköts med trip reducern?
export const card = createSlice({
  name: 'card',
  initialState: {
    cardIcon: null,
    cardName: null,
    cardPhotoRef: null,
    cardPlaceId: null,
    cardRating: null,
    cardVicinity: null,
    cardComment: null,
    cardStars: null,
    createdAt: null,
    error: null
  },
  reducers: {
    setCardIcon: (store, action) => {
      store.tripName = action.payload
    },
    setCardName: (store, action) => {
      store.tripPrevious = action.payload
    },
    setCardPhotoRef: (store, action) => {
      store.tripBucketlist = action.payload
    },
    setCardPlaceId: (store, action) => {
      store.tripUpcoming = action.payload
    },
    setCardRating: (store, action) => {
      store.tripActiveUser = action.payload
    },
    setCardVicinity: (store, action) => {
      store.tripActiveUser = action.payload
    },
    setCardComment: (store, action) => {
      store.tripActiveUser = action.payload
    },
    setCardStars: (store, action) => {
      store.tripActiveUser = action.payload
    },
    setCreatedAt: (store, action) => {
      store.createdAt = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
});