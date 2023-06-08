/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY, PLACES_URL } from 'utils/urls';
import { EmptyState } from 'components/Reusable/EmptyState';
import { fetchTrips, patchTripWithNewCard } from 'reducers/trip';
import SingleCardPreviewExplore from '../SingleCardPreviewExplore/SingleCardPreviewExplore.js';
import { SingleCardModal } from '../SingleCardModal/SingleCardModal.js';
import { Search } from '../Search/Search.js';
import './Explore.css';

export const Explore = () => {
  const dispatch = useDispatch();
  const [openCard, setOpenCard] = useState(false);

  const [placesData, setPlacesData] = useState([]); // All 20 places fetched
  const [selectedPlace, setSelectedPlace] = useState(null); // One object

  const handleClose = () => {
    setOpenCard(false);
  };

  const handleOpen = () => {
    dispatch(fetchTrips());
    setOpenCard(true);
  };

  const handleCardClick = (place) => {
    // We get a selected object back from SingleCardPreviewExplore
    // We store it in selectedPlace, to use later
    // Then we launch the handleOpen function to open Modal
    console.log('handleCardClick place selected:', place)
    setSelectedPlace(place);
    handleOpen();
  };

  const handleDataFetched = (data) => {
    // Handle the fetched data here, from search component
    // We store the array with data in placesData
    // console.log('handleDataFetched data:', data);
    setPlacesData(data);
  };

  return (
    <div className="main">

      <Search onDataFetched={handleDataFetched} />

      <div className="places">
        {placesData && placesData.map((place) => {
          return <SingleCardPreviewExplore
            place={place}
            key={place.place_id}
            onCardClick={handleCardClick} />;
        })}
        <EmptyState />
      </div>

      {openCard ? (
        <div className="card">
          <SingleCardModal
            selectedPlace={selectedPlace}
            open={openCard}
            handleClose={handleClose} />
        </div>
      ) : null}

    </div>
  );
}
