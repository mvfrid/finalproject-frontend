import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    error: null,
    profileName: null,
    profileText: null,
    profilePicture: null,
    profileInstagram: null
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setUserId: (store, action) => {
      store.userId = action.payload
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    setProfileName: (store, action) => {
      store.profileName = action.payload
    },
    setProfileText: (store, action) => {
      store.profileText = action.payload
    },
    setProfilePicture: (store, action) => {
      store.profilePicture = action.payload
    },
    setProfileInstagram: (store, action) => {
      store.profileInstagram = action.payload
    },
    signOut: (store) => {
      store.accessToken = null
    }
  }
});