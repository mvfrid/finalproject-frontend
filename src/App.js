/* eslint-disable linebreak-style */
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
  let backgroundImageUrl;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  switch (currentPage) {
    case 'profile':
      backgroundImageUrl = 'url(https://i.postimg.cc/zB9KyWhD/humphrey-muleba-Tej-Fa7-VW5e4-unsplash-grad-final.png)';
      break;
    case 'explore':
      backgroundImageUrl = 'url(https://i.postimg.cc/FR11Nqd2/ian-dooley-Du-BNA1-QMp-PA-unsplash-grad-final.png)';
      break;
    case 'about':
      backgroundImageUrl = 'url(https://i.postimg.cc/0Q3d7FTs/dorian-mongel-g-Vw-Fedcc1r-Y-unsplash-grad-final.png)';
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
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
