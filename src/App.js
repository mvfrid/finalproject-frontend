import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SingleTrip } from 'components/SingleTrip/SingleTrip.js';
import { Header } from './components/HeadNavFoot/Header/Header.js'
import { Explore } from './components/Explore/Explore/Explore.js'
import { StartPage } from './components/Startpage/StartPage.js'
import { LogInRegister } from './components/LoginRegister/LogInRegister'
import { UnAuthorized } from './components/Other/UnAuthorized'
import { NotFound } from './components/Other/NotFound'
import { About } from './components/About/About.js'
import { Profile } from './components/Profile/Profile.js'

export const App = () => {
  const accessToken = useSelector((state) => state.user.accessToken);

  return (
    <BrowserRouter>
      <div className="OuterWrapper">
        <div className="BackgroundUnderlay" />
        <div className="InnerWrapper">

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

            <Route
              path="/login"
              element={<LogInRegister mode="/users/login" />} />
            <Route
              path="/register"
              element={<LogInRegister mode="/users/register" />} />
            <Route path="/about" element={<About />} />

            {accessToken !== null ? (
              <Route path="/profile" element={<Profile />} />
            ) : (
              <Route
                path="/profile"
                element={<Navigate to="/unauthorized" replace />} />
            )}

            {accessToken !== null ? (
              <Route path="/trips/:id" element={<SingleTrip />} />
            ) : (
              <Route
                path="/trips/:id"
                element={<Navigate to="/unauthorized" replace />} />
            )}

            <Route path="/unauthorized" element={<UnAuthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

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