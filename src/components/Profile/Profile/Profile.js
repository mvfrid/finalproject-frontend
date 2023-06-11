import React from 'react';
import { TripList } from '../TripList/TripList';
import { UserInfo } from '../UserInfo/UserInfo';

export const Profile = () => {
  return (
    <div className="main">
      <UserInfo />
      <TripList />
    </div>
  )
}