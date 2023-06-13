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
  maxWidth: '400px',
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  borderRadius: '6px',
  boxShadow: 24,
  px: 3,
  pt: 1,
  pb: 2,

  '@media (min-width: 668px)': {
    maxWidth: '425px'
  },

  '@media (min-width: 1025px)': {
    maxWidth: '425px'
  }
};

export const StyledModalImg = {
  height: '150px',
  width: '150px'
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
