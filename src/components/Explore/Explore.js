import React, { useState } from 'react';
import { API_KEY, PLACES_URL } from 'utils/urls';
import { SingleCardPreview } from 'components/Reusable/SingleCardPreview';
import { EmptyState } from 'components/Reusable/EmptyState';
import { SingleCardModal } from './SingleCardModal';
import { Search } from './Search';

export const Explore = () => {
  const [inputLong, setInputLong] = useState(null);
  const [inputLat, setInputLat] = useState(null);
  const [input, setInput] = useState('');
  const [openCard, setOpenCard] = useState(false);
  const [placesData, setPlacesData] = useState([]);
  // const [photoUrl/* setPhotoUrl */] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${API_KEY}`;

  const fetchData = () => {
    fetch(geoUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .then((data) => {
        const { lng, lat } = data.results[0].geometry.location;
        setInputLong(lng);
        setInputLat(lat);
        console.log(data.results)

        fetch(`${PLACES_URL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ lng, lat })
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setPlacesData(json.results);
            /*
            const urls = json.results.map((result) => {
              if (result.photos && result.photos.length > 0) {
                const photoReference = result.photos[0].photo_reference;
                const photoWidth = 800;
                return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${photoWidth}&photoreference=${photoReference}&key=${API_KEY}`;
              } else {
                return null;
              }
            });
            setPhotoUrl(urls);
            */
          })
          .catch((error) => console.error('Error:', error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleClickOpenCard = (place) => {
    setSelectedPlace(place);
    setOpenCard(true);
  };

  const handleClose = () => {
    setOpenCard(false);
  };

  return (
    <div className="main">
      <form action="" onSubmit={handleFormSubmit}>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      <Search />
      <p>{input} has the coordinates: long {inputLong}, lat {inputLat}</p>

      <div className="places">
        {placesData && placesData.map((place) => {
          console.log('place inside explore component', place); // Add your console log statement here
          return <SingleCardPreview props={place} />;
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

/*

      <div className="places">
        {placesData && placesData.map((place, index) => (
          <div className="single-place" key={place.place_id}>
            <h2>{place.name}</h2>
            <p>⭐️{place.rating}</p>
            <img src={place.icon} alt="" className="place-icon" />
            {photoUrl[index] ? (
              <img src={photoUrl[index]} alt="" className="place-photo" />
            ) : (
              <img src="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" alt="" className="place-photo" />
            )}
            <button type="button" onClick={() => handleClickOpenCard(place)}>Open card</button>

          </div>
  */

/*
      <div className="places">
        {placesData && placesData.map((place, index) => (
          <div className="single-place" key={place.place_id}>
            <h2>{place.name}</h2>
            <p>⭐️{place.rating}</p>
            <img src={place.icon} alt="" className="place-icon" />
            {photoUrl[index] ? (
              <img src={photoUrl[index]} alt="" className="place-photo" />
            ) : (
              <img src="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" alt="" className="place-photo" />
            )}
            <button type="button" onClick={() => handleClickOpenCard(place)}>Open card</button>

          </div>
        ))}
        */