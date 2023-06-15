/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrips } from 'reducers/trip';
import { API_KEY } from 'utils/urls';
import SingleCardPreviewExplore from '../SingleCardPreviewExplore/SingleCardPreviewExplore.js';
import { SingleCardModal } from '../SingleCardModal/SingleCardModal.js';
import { Search } from '../Search/Search.js';
import { Loading } from '../../Other/Loading.js';
import { EmptyStateExplore } from '../EmptyStateExplore/EmptyStateExplore.js';
import './Explore.css';

export const Explore = ({ onPageChange }) => {
  const dispatch = useDispatch();
  const [openCard, setOpenCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [locationNotFound, setLocationNotFound] = useState(false);

  const [placesData, setPlacesData] = useState([]); // All 20 places fetched
  const [selectedPlace, setSelectedPlace] = useState(null); // One object
  const [photoUrl, setPhotoUrl] = useState([]); // For storing image URLs

  useEffect(() => {
    onPageChange('explore'); // Invoke onPageChange with the current page information
  }, []);

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
    setSelectedPlace(place);
    handleOpen();
  };

  const handleLoadingChange = (loading) => {
    // Handle the loading state change in the parent component
    setIsLoading(loading);
  };

  const handleLocationNotFound = (value) => {
    setLocationNotFound(value);
    if (locationNotFound) {
      setPlacesData([]);
    }
  };

  const handleDataFetched = (data) => {
    setPlacesData(data);

    const urls = data.map((result) => {
      if (result.photos && result.photos.length > 0) {
        const photoReference = result.photos[0].photo_reference;
        const photoWidth = 400;
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photoWidth}&photoreference=${photoReference}&key=${API_KEY}`;
      } else {
        return null;
      }
    });
    setPhotoUrl(urls);
  };

  return (
    <>
      <Search
        onDataFetched={handleDataFetched}
        onLoadingChange={handleLoadingChange}
        onLocationNotFound={handleLocationNotFound} />
      <div className="main-explore">
        <div className="places">
          {isLoading ? (
            <Loading />
          ) : placesData.length > 0 ? (
            placesData.map((place, index) => (
              <SingleCardPreviewExplore
                place={place}
                photoUrl={photoUrl[index]}
                key={place.place_id}
                onCardClick={handleCardClick} />
            ))
          ) : !isLoading && locationNotFound ? (
            <div className="location-not-found">
              <h3>Oh no!</h3>
              <p>No such location found.</p>
              <p>Are you sure you spelled it correctly?</p>
            </div>
          ) : (
            <EmptyStateExplore />
          )}
        </div>

        {openCard && selectedPlace && (
          <div className="card">
            <SingleCardModal
              selectedPlace={selectedPlace}
              open={openCard}
              handleClose={handleClose} />
          </div>
        )}
      </div>
    </>
  );
};
