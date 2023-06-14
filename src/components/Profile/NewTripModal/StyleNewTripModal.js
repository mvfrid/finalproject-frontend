/* eslint-disable linebreak-style */
import { green } from '@mui/material/colors';

export const StyledBoxContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  maxWidth: '400px',
  minHeight: '250px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  px: 2,
  pt: 1,
  pb: 2,
  borderRadius: '5px',

  '@media (min-width: 668px)': {
    maxWidth: '400px'
  },

  '@media (min-width: 1025px)': {
    maxWidth: '400px'
  }
};

export const StyledTypoTitle = {
  fontSize: '26px',
  my: '10px'
};

export const StyledTypo = {
  marginBottom: '10px',
  justifyContent: 'center'
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

export const StyledCloseBtnBox = {
  marginLeft: 'auto'
};

export const StyledCloseBtn = {
  p: 0
};