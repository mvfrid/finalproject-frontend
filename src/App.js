import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { user } from 'reducers/user';
import { trip } from 'reducers/trip';
import { card } from 'reducers/card';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Header } from './components/Header'
import { Explore } from './components/Explore'
import { StartPage } from './components/StartPage'
import { LogInRegister } from './components/LogInRegister'
import { NotFound } from './components/NotFound'
import { About } from './components/About'
import { Profile } from './components/Profile/Profile'
// import { Trip } from './components/Trip'

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer,
    trip: trip.reducer,
    card: card.reducer
  });

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<LogInRegister mode="login" />} />
          <Route path="/register" element={<LogInRegister mode="register" />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />

          {/*
            <Route path="/trip" element={<Trip />} />
        */}

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

/*
MATILDA TESTAR, FUNKAR EJ :(

  const reducer = combineReducers({
    user: user.reducer,
    trip: trip.reducer,
    card: card.reducer
  });

  const accessToken = useSelector((state) => state.user.accessToken);

          {accessToken !== null ? (
            <Route path="/profile" element={<Profile />} />
          ) : (
            <Route path="/notauthorized" element={<LogInRegister />} />
          )}
 */