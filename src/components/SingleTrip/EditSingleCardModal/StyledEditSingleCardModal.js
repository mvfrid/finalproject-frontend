/* eslint-disable linebreak-style */
export const StyledBoxContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  maxWidth: '425px',
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  borderRadius: '6px',
  boxShadow: 24,
  px: 2,
  pt: 1.5,
  pb: 2,

  '@media (min-width: 668px)': {
    maxWidth: '425px'
  },

  '@media (min-width: 1025px)': {
    maxWidth: '425px'
  }
};

export const StyledCloseBtn = {
  p: 0,
  marginLeft: 'auto'
};

export const StyledTypo = {
  fontSize: '22px',
  my: '8px'
};

export const StyledFormBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export const StyledTextField = {
  width: '100%',
  mb: '10px'
};

export const StyledBtnBox = {
  display: 'flex',
  justifyContent: 'center',
  mt: '10px'
};

export const StyledUpdBtn = {
  backgroundColor: '#446173',
  mt: 2
};