/* eslint-disable linebreak-style */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { user } from 'reducers/user';
import { trip } from 'reducers/trip';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { App } from './App';
import './index.css';

const reducer = combineReducers({
  user: user.reducer,
  trip: trip.reducer
});

const store = configureStore({ reducer })

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
