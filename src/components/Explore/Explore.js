/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { API_KEY, PLACES_URL } from 'utils/urls';
import { SingleCardPreview } from 'components/Reusable/SingleCardPreview';
import { EmptyState } from 'components/Reusable/EmptyState';
import { fetchTrips, patchTripWithNewCard } from 'reducers/trip';
import { SingleCardModal } from './SingleCardModal';
import { Search } from './Search';

export const Explore = () => {
  const [openCard, setOpenCard] = useState(false);

  const [placesData, setPlacesData] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleClickOpenCard = (place) => {
    setSelectedPlace(place);
    setOpenCard(true);
  };

  const handleClose = () => {
    setOpenCard(false);
  };

  const handleDataFetched = (data) => {
    // Handle the fetched data here
    console.log('handleDataFetched data:', data);
    setPlacesData(data);
  };

  return (
    <div className="main">

      <Search onDataFetched={handleDataFetched} />

      <div className="places">
        {placesData && placesData.map((place) => {
          console.log('place inside explore component', place); // Add your console log statement here
          return <SingleCardPreview card={place} />;
        })}
        <EmptyState />
      </div>

      {openCard ? (
        <div className="card">
          <SingleCardModal
            place={selectedPlace}
            openModal={openCard}
            handleClose={handleClose} />
        </div>
      ) : null}
    </div>
  );
}
