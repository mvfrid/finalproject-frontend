/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { ListSubheader, MenuItem, Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API_KEY, PLACES_URL } from 'utils/urls';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import * as styles from './StyledSearch'

export const Search = ({ onDataFetched, onLoadingChange, onLocationNotFound }) => {
  const [input, setInput] = useState('');
  const [type, setType] = useState('tourist_attraction');

  const geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${API_KEY}`;

  const fetchData = () => {
    onLoadingChange(true);
    fetch(geoUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      .then((data) => {
        if (data.results.length > 0) {
          const { lng, lat } = data.results[0].geometry.location;
          fetch(`${PLACES_URL}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ lng, lat, type })
          })
            .then((response) => response.json())
            .then((json) => {
              onDataFetched(json.results); // Call the callback function with the fetched data
            })
            .finally(() => {
              setTimeout(() => {
                onLoadingChange(false);
              }, 3500);
            });
        } else {
          onLocationNotFound(true);
          setTimeout(() => {
            onLoadingChange(false);
          }, 2000);
        }
      })
      .catch((error) => {
        console.log('error from fetchData', error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleSelectChange = (event) => {
    setType(event.target.value);
  }

  return (
    <Box sx={styles.StyledSearchBox} role="search">
      <Box sx={styles.StyledInputBox}>
        <LocationOnIcon sx={{ color: 'action.active', ml: 1, mr: 2, my: 2 }} aria-hidden="true" />
        <TextField
          id="input-with-sx"
          label="Destination"
          variant="standard"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          sx={styles.StyledInputField} />
        <FormControl sx={styles.StyledFormControl}>
          <InputLabel sx={{ mt: 1 }} htmlFor="grouped-native-select">Type</InputLabel>
          <Select
            defaultValue=""
            id="grouped-native-select"
            onChange={handleSelectChange}
            label="Type"
            variant="standard">
            <MenuItem
              value=""
              sx={styles.StyledMenuItem}>
              <em>None</em>
            </MenuItem>

            <ListSubheader
              sx={styles.StyledListSubheader}>
              Food & Drink
            </ListSubheader>
            <MenuItem
              value="restaurant"
              sx={styles.StyledMenuItem}>
              Restaurant
            </MenuItem>
            <MenuItem
              value="cafe"
              sx={styles.StyledMenuItem}>
              Cafe
            </MenuItem>
            <MenuItem
              value="bar"
              sx={styles.StyledMenuItem}>
              Bar
            </MenuItem>
            <MenuItem
              value="bakery"
              sx={styles.StyledMenuItem}>
              Bakery
            </MenuItem>

            <ListSubheader
              sx={styles.StyledListSubheader}>
              Accomodation
            </ListSubheader>
            <MenuItem
              value="establishment"
              sx={styles.StyledMenuItem}>
              Establishment
            </MenuItem>
            <MenuItem
              value="campground"
              sx={styles.StyledMenuItem}>
              Campground
            </MenuItem>
            <MenuItem
              value="lodging"
              sx={styles.StyledMenuItem}>
              Lodging
            </MenuItem>

            <ListSubheader
              sx={styles.StyledListSubheader}>
              Entertainment
            </ListSubheader>
            <MenuItem
              value="tourist_attraction"
              sx={styles.StyledMenuItem}>
              Tourist attraction
            </MenuItem>
            <MenuItem
              value="museum"
              sx={styles.StyledMenuItem}>
              Museum
            </MenuItem>
            <MenuItem
              value="amusement_park"
              sx={styles.StyledMenuItem}>
              Amusement park
            </MenuItem>
            <MenuItem
              value="park"
              sx={styles.StyledMenuItem}>
              Park
            </MenuItem>
            <MenuItem
              value="zoo"
              sx={styles.StyledMenuItem}>
              Zoo
            </MenuItem>

          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        onClick={handleFormSubmit}
        sx={styles.StyledSearchBtn}>
          Explore now
      </Button>
    </Box>

  )
}
