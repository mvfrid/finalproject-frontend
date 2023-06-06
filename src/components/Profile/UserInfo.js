import React from 'react';
import { ModalsProfile } from 'components/Reusable/ModalsProfile';

export const UserInfo = () => {
  return (
    <div className="main">
      <div className="profile-section">
        <h1>Profile</h1>
        <p>Bla vla</p>
        {/* To change user info/profilename, about text, instagram */}
        <ModalsProfile />
      </div>
    </div>
  )
}