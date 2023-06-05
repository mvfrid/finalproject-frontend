import React, { useState } from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
// import styled from 'styled-components';

/*
const StyledDCardiv = styled.div`
  width: 200px;
  background-color: #f1f1f1;
`;
*/

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 34,
  p: 4
};

export const CardComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(null);

  return (
    <div className="main">
      <Button variant="contained" onClick={handleOpen}>Open Card</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <div className="testing-card-div">
            <img src="https://i.postimg.cc/c4zXpFPD/thomas-kinto-6-Ms-MKWz-JWKc-unsplash.jpg" alt="" />
            <div className="testing-card-div-text">
              <h2>Hej</h2>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
              <p>Bla Bla Bla</p>
            </div>
          </div>
          <Button variant="contained">Add to trip</Button>
          <Button variant="outlined" onClick={handleClose}>Close modal</Button>
          <Typography component="legend">Controlled</Typography>
          <Rating
            name="simple-controlled"
            size="large"
            precision={0.5}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }} />
        </Box>
      </Modal>
    </div>
  )
}

/*
  return (
    <div className="main">
      <Button onClick={handleOpen}>Open Card</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
  */