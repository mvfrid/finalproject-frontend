/* eslint-disable linebreak-style */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { TripList } from '../TripList/TripList';
import { UserInfo } from '../UserInfo/UserInfo';

export const Profile = ({ onPageChange }) => {
  useEffect(() => {
    onPageChange('profile'); // Invoke onPageChange with the current page information
  }, []);

  return (
    <>
      <UserInfo />
      <div className="main-triplist">
        <TripList />
      </div>
    </>
  )
}