import React, { useState } from 'react';
import { API_KEY, PLACES_URL } from 'utils/urls';

export const Search = ({ onDataFetched }) => {
  const [inputLong, setInputLong] = useState(null);
  const [inputLat, setInputLat] = useState(null);
  const [input, setInput] = useState('');

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
            onDataFetched(json.results); // Call the callback function with the fetched data
          })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="placeholder">
      <form action="" onSubmit={handleFormSubmit}>
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      <p>{input} has the coordinates: long {inputLong}, lat {inputLat}</p>
    </div>
  )
}