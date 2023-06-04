import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { trip } from 'reducers/trip';
// import { user } from 'reducers/user'
import { MONGO_DB_URL } from 'utils/urls';

export const NewTripModal = ({ open, handleClose }) => {
  const [value, setValue] = React.useState('');
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('value', value, 'accessToken', accessToken)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line quote-props
        'Authorization': accessToken
      },
      body: JSON.stringify({ tripName: value })
    };

    fetch(MONGO_DB_URL('trips'), options)
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch(trip.actions.setTripName(response.response.data.tripName));
          dispatch(trip.actions.setTripActiveUser(response.response.data.tripActiveuser));
          // eslint-disable-next-line no-underscore-dangle
          dispatch(trip.actions.setTripId(response.response.data._id));
          dispatch(trip.actions.setCreatedAt(response.response.data.createdAt));
          dispatch(trip.actions.setError(null));
          console.log('tripname', response.response.data.tripName)
        } else {
          dispatch(trip.actions.setTripName(null));
          dispatch(trip.actions.setError(response));
        }
        console.log('response:', response)
      })
      .catch((error) => console.log(error))
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add a new trip
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            value={value}
            onChange={handleChange}
            label="Name of trip"
            variant="outlined"
            style={{ marginBottom: '10px' }}
            required />
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
