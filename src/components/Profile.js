import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { user } from 'reducers/user';

export const Profile = () => {
  return (
    <div className="main">
      <div className="profile-section">
        <h1>Profile</h1>
        <p>username</p>
      </div>
      <div className="trip-section">
        <h2>Trip collections:</h2>
        <div className="trip-wrapper">
          <div className="trip">
            <h3>Trip 1</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 2</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 3</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 4</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 5</h3>
            <p>Content here, replace with cards</p>
          </div>
          <div className="trip">
            <h3>Trip 6</h3>
            <p>Content here, replace with cards</p>
          </div>
        </div>
      </div>
    </div>
  )
}