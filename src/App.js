import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SingleTrip } from 'components/SingleTrip/SingleTrip';
import { Header } from './components/HeadNavFoot/Header'
import { Explore } from './components/Explore/Explore'
import { StartPage } from './components/Startpage/StartPage'
import { LogInRegister } from './components/LoginRegister/LogInRegister'
import { UnAuthorized } from './components/Other/UnAuthorized'
import { NotFound } from './components/Other/NotFound'
import { About } from './components/About/About'
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
            element={<Navigate to="/unauthorized" replace />} />
        )}

        <Route path="/login" element={<LogInRegister mode="/users/login" />} />
        <Route path="/register" element={<LogInRegister mode="/users/register" />} />
        <Route path="/about" element={<About />} />

        {accessToken !== null ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route
            path="/profile"
            element={<Navigate to="/unauthorized" replace />} />
        )}

        {accessToken !== null ? (
          <Route path="/singletrip" element={<SingleTrip />} />
        ) : (
          <Route
            path="/singletrip"
            element={<Navigate to="/unauthorized" replace />} />
        )}

        <Route path="/unauthorized" element={<UnAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

/*
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
    */