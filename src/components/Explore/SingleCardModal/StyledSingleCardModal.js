/* eslint-disable linebreak-style */
import { green } from '@mui/material/colors';

export const StyledCloseBtnBox = {
  display: 'flex',
  justifyContent: 'flex-end'
};

export const StyledCloseBtn = {
  p: 0
};

export const StyledBoxContainer = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '425px',
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  borderRadius: '6px',
  boxShadow: 24,
  pr: 2,
  pl: 3,
  pt: 1.5,
  pb: 2,

  '@media (min-width: 668px)': {
    maxWidth: '425px'
  },

  '@media (min-width: 1025px)': {
    maxWidth: '425px'
  }
};

export const StyledModalImg = {
  height: '170px',
  width: '220px',
  objectFit: 'cover',

  '@media (min-width: 668px)': {
    height: '200px',
    width: '300px'
  }

};

export const StyledMediaBox = {
  display: 'flex',
  justifyContent: 'center'
};

export const StyledMediaTextBox = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: '16px',
  gap: '6px',
  justifyContent: 'space-between',
  mt: 1
};

export const StyledMediaTextIconBox = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '6px'
};

export const StyledAddToTripBox = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 1
};

export const StyledSelect = {
  flexGrow: 2
};

export const StyledBoxWrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const StyledBoxInnerWrapper = {
  m: 1,
  position: 'relative',
  display: 'flex'
};

export const StyledCircularProgress = {
  color: green[500],
  position: 'absolute',
  top: -6,
  left: -6,
  zIndex: 1
};

// From single trip

export const StyledTypographyName = {
  fontSize: '24px',
  marginTop: '4px',

  '@media (min-width:668px)': {
    fontSize: '28px'
  },

  '@media (min-width:1025px)': {
    fontSize: '28px'
  }
};

export const StyledIcon = {
  maxWidth: '50px'
};

export const StyledRating = {
  minWidth: '50px',
  fontSize: '20px'
};

export const StyledTypoVic = {
  fontSize: '16px',
  color: 'text.secondary',
  mt: 0.5
};

export const StyledPlaceTextBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  fontSize: '16px',
  gap: '6px',
  justifyContent: 'space-between',
  mt: 1
};

export const StyledPlaceTextIconBox = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px'
};
