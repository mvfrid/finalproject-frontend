import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SingleTrip } from 'components/SingleTrip/SingleTrip/SingleTrip.js';
import { Header } from './components/HeadNavFoot/Header/Header.js'
import { Explore } from './components/Explore/Explore/Explore.js'
import { StartPage } from './components/Startpage/StartPage.js'
import { LogInRegister } from './components/LoginRegister/LogInRegister'
import { UnAuthorized } from './components/Other/UnAuthorized/UnAuthorized.js'
import { NotFound } from './components/Other/NotFound'
import { About } from './components/About/About.js'
import { Profile } from './components/Profile/Profile/Profile.js'

export const App = () => {
  const accessToken = useSelector((state) => state.user.accessToken);
  const [currentPage, setCurrentPage] = useState('');
  let backgroundImageUrl; // Declare the backgroundImageUrl variable

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log('currentPage', currentPage, 'backgroundImageUrl', backgroundImageUrl)

  switch (currentPage) {
    case 'profile':
      backgroundImageUrl = 'url(https://i.postimg.cc/nLMK1x96/jairph-1-XLyzi17-Z2-M-unsplash-grad-4b.png)';
      break;
    case 'explore':
      backgroundImageUrl = 'url(https://i.postimg.cc/bNW2jnZF/justin-kauffman-Et-ORiy-Lq6s-unsplash-grad-4b.png)';
      break;
    case 'about':
      backgroundImageUrl = 'url(https://i.postimg.cc/jSNV8VVk/leio-mclaren-Fwd-ZYz0yc9g-unsplash-grad-4.png)';
      break;
    default:
      // Default background image for other routes
      backgroundImageUrl = 'url(https://i.postimg.cc/Y0GmTmWp/ian-dooley-hp-TH5b6mo2s-unsplash-gradient-yellow3-short.png)';
      break;
  }

  return (
    <BrowserRouter>
      <div className="OuterWrapper">
        <div className="BackgroundUnderlay" />
        <div className="InnerWrapper" style={{ backgroundImage: backgroundImageUrl }}>

          <Header />
          <Routes>
            <Route path="/" element={<StartPage onPageChange={handlePageChange} />} />

            {accessToken !== null ? (
              <Route path="/explore" element={<Explore onPageChange={handlePageChange} />} />
            ) : (
              <Route
                path="/explore"
                element={<Navigate to="/unauthorized" replace />} />
            )}

            <Route
              path="/login"
              element={<LogInRegister mode="users/login" />} />

            <Route
              path="/register"
              element={<LogInRegister mode="users/register" />} />

            <Route path="/about" element={<About onPageChange={handlePageChange} />} />

            {accessToken !== null ? (
              <Route path="/profile" element={<Profile onPageChange={handlePageChange} />} />
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