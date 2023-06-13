/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_KEY, PLACES_URL } from 'utils/urls';
import { fetchTrips, patchTripWithNewCard } from 'reducers/trip';
import SingleCardPreviewExplore from '../SingleCardPreviewExplore/SingleCardPreviewExplore.js';
import { SingleCardModal } from '../SingleCardModal/SingleCardModal.js';
import { Search } from '../Search/Search.js';
import { Loading } from '../../Other/Loading.js';
import { EmptyStateExplore } from '../EmptyStateExplore/EmptyStateExplore.js';
import * as styles from './StyledExplore.js';
import './Explore.css';

export const Explore = ({ onPageChange }) => {
  const dispatch = useDispatch();
  const [openCard, setOpenCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [locationNotFound, setLocationNotFound] = useState(false);

  const [placesData, setPlacesData] = useState([]); // All 20 places fetched
  const [selectedPlace, setSelectedPlace] = useState(null); // One object

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
    console.log('handleCardClick place selected:', place);
    setSelectedPlace(place);
    handleOpen();
  };

  const handleDataFetched = (data) => {
    // Handle the fetched data here, from search component
    // We store the array with data in placesData
    // console.log('handleDataFetched data:', data);
    setPlacesData(data);
  };

  const handleLoadingChange = (loading) => {
    // Handle the loading state change in the parent component
    // You can perform any necessary actions based on the loading state
    console.log('Loading state changed:', loading);
    setIsLoading(loading);
    // Additional logic here if needed
  };

  const handleLocationNotFound = (value) => {
    console.log('handleLocationNotFound value:', value);
    setLocationNotFound(value);
    if (locationNotFound) {
      setPlacesData([]);
    }
  };

  console.log('Explore locationNotFound:', locationNotFound);
  console.log('Explore isLoading:', isLoading);
  console.log('Explore placesData:', placesData);

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
            placesData.map((place) => (
              <SingleCardPreviewExplore
                place={place}
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

        {openCard && (
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