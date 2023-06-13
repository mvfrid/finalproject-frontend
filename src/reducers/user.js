/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    username: null,
    userId: null,
    accessToken: null,
    error: null,
    userInfo: null
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
    setUserInfo: (store, action) => {
      store.userInfo = action.payload
    },
    signOut: (store) => {
      store.accessToken = null
    }
  }
});

// A reducer which has a lot of info to be set, I think all this is not needed:

/*
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
    profilePicture: 'https://i.postimg.cc/vmZr7ryp/istockphoto-470100848-612x612.jpg',
    profileInstagram: null,
    userInfo: null
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
    setUserInfo: (store, action) => {
      store.userInfo = action.payload
    },
    signOut: (store) => {
      store.accessToken = null
    }
  }
});
*/