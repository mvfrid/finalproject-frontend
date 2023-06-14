/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrips } from 'reducers/trip';
import { API_KEY } from 'utils/urls';
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
    // console.log('handleCardClick place selected:', place);
    setSelectedPlace(place);
    handleOpen();
  };

  const handleLoadingChange = (loading) => {
    // Handle the loading state change in the parent component
    // You can perform any necessary actions based on the loading state
    // console.log('Loading state changed:', loading);
    setIsLoading(loading);
    // Additional logic here if needed
  };

  const handleLocationNotFound = (value) => {
    // console.log('handleLocationNotFound value:', value);
    setLocationNotFound(value);
    if (locationNotFound) {
      setPlacesData([]);
    }
  };

  const handleDataFetched = (data) => {
    setPlacesData(data);

    console.log('handleDataFetched data:', data)

    const urls = data.map((result) => {
      if (result.photos && result.photos.length > 0) {
        const photoReference = result.photos[0].photo_reference;
        // console.log('photoreference from handleDataFetched', photoReference);
        const photoWidth = 400;
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photoWidth}&photoreference=${photoReference}&key=${API_KEY}`;
      } else {
        return null;
      }
    });
    setPhotoUrl(urls);
  };

  const findPhotoUrlByPlaceId = (placeId) => {
    const foundUrl = photoUrl.find((index) => placesData[index].place_id === placeId);
    return foundUrl || null;
  };

  console.log('Explore placesData:', placesData);
  // console.log('Explore photoUrl:', photoUrl); // Vi får här 20 url:er

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
                // photoUrl={photoUrl[place.place_id]} // Access the correct photo URL using place_id as the index
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
              photoUrl="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg"
              open={openCard}
              handleClose={handleClose} />
          </div>
        )}
      </div>
    </>
  );
};

/*
    const photosPromises = data.map(async (place) => {
      if (place.photos && place.photos.length > 0) {
        const thephotoUrl = await fetchPlacePhotos(place.photos[0].photo_reference);
        return { placeId: place.place_id, thephotoUrl };
      }
      return null;
    });

    const photos = await Promise.all(photosPromises);
    const photosMap = photos.reduce((map, photo) => {
      if (photo) {
        map[photo.placeId] = photo.thephotoUrl;
      }
      return map;
    }, {});

    setPhotoUrl(photosMap);
    */
/*
  const fetchPlacePhotos = async (photoreference) => {
    const photoWidth = 400;
    console.log('photoreference from fetchPlacePhotos', photoreference)
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photoWidth}photoreference=${photoreference}&key=${API_KEY}`
      );
      const data = await response.blob();
      return URL.createObjectURL(data);
    } catch (error) {
      console.error('Error fetching place photo:', error);
      return null;
    }
  };
  */