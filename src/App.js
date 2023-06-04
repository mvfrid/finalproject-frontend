import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from './components/Header'
import { Explore } from './components/Explore'
import { StartPage } from './components/StartPage'
import { LogInRegister } from './components/LogInRegister'
import { NotFound } from './components/NotFound'
import { About } from './components/About'
import { Profile } from './components/Profile/Profile'

export const App = () => {
  const accessToken = useSelector((state) => state.user.accessToken);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        {accessToken !== null ? (
          <Route path="/explore" element={<Explore />} />
        ) : (
          <Route
            path="/explore"
            element={<Navigate to="/login" replace />} />
        )}
        <Route path="/login" element={<LogInRegister mode="/users/login" />} />
        <Route path="/register" element={<LogInRegister mode="/users/register" />} />
        <Route path="/about" element={<About />} />
        {accessToken !== null ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route
            path="/profile"
            element={<Navigate to="/login" replace />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

/*

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer,
    trip: trip.reducer,
    card: card.reducer
  });

  const store = configureStore({ reducer })

  const accessToken = useSelector((state) => state.user.accessToken);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          {accessToken !== null ? (
            <Route path="/explore" element={<Explore />} />
          ) : (
            <Route
              path="/explore"
              element={<Navigate to="/login" replace />} />
          )}
          <Route path="/login" element={<LogInRegister mode="/users/login" />} />
          <Route path="/register" element={<LogInRegister mode="/users/register" />} />
          <Route path="/about" element={<About />} />
          {accessToken !== null ? (
            <Route path="/profile" element={<Profile />} />
          ) : (
            <Route
              path="/profile"
              element={<Navigate to="/login" replace />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

*/