import * as React from 'react';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';

export const NewTripModal = ({ open, handleClose }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
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
            label="New trip"
            variant="outlined"
            style={{ marginBottom: '10px' }}
            required />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
}
