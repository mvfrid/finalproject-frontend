/* eslint-disable linebreak-style */
export const StyledBoxContainer = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  maxWidth: '425px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  py: 2,
  px: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '5px',

  '@media (min-width: 668px)': {
    maxWidth: '425px'
  },

  '@media (min-width: 1025px)': {
    maxWidth: '425px'
  }
};

export const StyledFormContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export const StyledCloseBtnBox = {
  marginLeft: 'auto'
};

export const StyledCloseBtn = {
  p: 0
};