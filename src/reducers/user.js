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
