import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { user } from 'reducers/user';
import { trip } from 'reducers/trip';
import { card } from 'reducers/card';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { App } from './App';

const reducer = combineReducers({
  user: user.reducer,
  trip: trip.reducer,
  card: card.reducer
});

const store = configureStore({ reducer })

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/*
  const reducer = combineReducers({
    user: user.reducer,
    trip: trip.reducer,
    card: card.reducer
  });

  const store = configureStore({ reducer })
  */