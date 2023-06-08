/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Menu, MenuItem, MyListSubheader, Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import { API_KEY, PLACES_URL } from 'utils/urls';

export const Search = ({ onDataFetched }) => {
  const [inputLong, setInputLong] = useState(null);
  const [inputLat, setInputLat] = useState(null);
  const [input, setInput] = useState('');
  // const [type, setType] = useState('');

  const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${API_KEY}`;

  const type = 'establishment';
  /*
  const isFilterActive = (filter) => {
    return type === filter ? 'active' : '';
  };
  */

  const fetchData = () => {
    // set loading is true
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
          body: JSON.stringify({ lng, lat, type })
        })
          .then((response) => response.json())
          .then((json) => {
            console.log('json.results from google places fetch', json.results);
            onDataFetched(json.results); // Call the callback function with the fetched data
            // set loading is false
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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <p>{input} has the coordinates: long {inputLong}, lat {inputLat}</p>
    </div>
  )
}

/*

<button type="button" onClick={() => setType('establishment')}>Accomodation</button>
      <p>You are currently filtering on <span className="tiny">{type}</span></p>
<p>You are currently filtering on `&apos;`{selectedFilter}`&apos;`</p>

      <button className={`filterbtn ${isFilterActive(accomodation)}`} type="button" onClick={() => setSelectedFilter(accomodation)}>Accomodation</button>
      <button className={`filterbtn ${isFilterActive(foodanddrink)}`} type="button" onClick={() => setSelectedFilter(foodanddrink)}>Food and Drink</button>
      <button className={`filterbtn ${isFilterActive(entertainment)}`} type="button" onClick={() => setSelectedFilter(entertainment)}>Entertainment</button>
      <button className={`filterbtn ${isFilterActive(pointofinterest)}`} type="button" onClick={() => setSelectedFilter(pointofinterest)}>Point of Interest</button>
      <button className={`filterbtn ${isFilterActive(shopping)}`} type="button" onClick={() => setSelectedFilter(shopping)}>Shopping</button>

const accomodation = 'campground|lodging|rv_park establishment';
const foodanddrink = 'bakery|bar|cafe|convenience_store|liquor_store|meal_delivery|meal_takeaway|restaurant|supermarket';
const entertainment = 'amusement_park|aquarium|art_gallery|casino|movie_theater|museum|night_club|park|stadium|tourist_attraction|zoo|spa';
const pointofinterest = 'church|hindu_temple|mosque|synagogue|library|primary_school|secondary_school|university|city_hall|courthouse|embassy|fire_station|local_government_office|police|post_office|tourist_attraction';
const shopping = 'book_store|clothing_store|department_store|electronics_store|furniture_store|home_goods_store|jewelry_store|shoe_store|shopping_mall|store';
// const transport = 'airport|bicycle_store|bus_station|car_dealer|car_rental|car_repair|car_wash|gas_station|light_rail_station|subway_station|taxi_stand|train_station|transit_station';
// const services = 'atm|bank|beauty_salon|hair_care|laundry|locksmith|moving_company|travel_agency';
// const health = 'dentist|doctor|drugstore|gym|hospital|pharmacy|physiotherapist|veterinary_care'
*/