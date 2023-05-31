import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Explore } from './components/Explore'
import { StartPage } from './components/StartPage'
// import { LogIn } from './components/LogIn'
// import { Register } from './components/Register'
// import { About } from './components/About'
// import { Profile } from './components/Profile'
// import { Trip } from './components/Trip'
// import { NotFound } from './components/NotFound'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/explore" element={<Explore />} />
        {/*
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/trip" element={<Trip />} />
            <Route path="*" element={<NotFound />} />
        */}
      </Routes>
    </BrowserRouter>
  )
}