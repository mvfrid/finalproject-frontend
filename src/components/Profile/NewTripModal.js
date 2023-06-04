import * as React from 'react';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// import accessToken

export const NewTripModal = ({ open, handleClose }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'Authorization': accessToken
      },
      body: JSON.stringify({ tripName })
    };

  try {
    const response = await fetch(PLACES_URL("trips"), options);
    const data = await response.data.tripName();

    if(data.success) {
      const 
    }
  }
};

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
}
