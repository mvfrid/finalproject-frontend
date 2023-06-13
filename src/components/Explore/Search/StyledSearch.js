/* eslint-disable linebreak-style */

export const StyledSearchBox = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '32px',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  padding: '6px',
  borderRadius: '6px',
  marginTop: '36px',
  marginBottom: '2px',
  mx: 'auto',

  '@media (min-width: 668px)': {
    flexDirection: 'row',
    mx: '16px'
  },

  '@media (min-width: 1025px)': {
    flexDirection: 'row',
    maxWidth: '835px',
    mx: 'auto'
  }
};

export const StyledInputBox = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  borderRadius: '6px',

  '@media (min-width: 668px)': {
    justifyContent: 'space-between'
  },

  '@media (min-width: 1025px)': {
    justifyContent: 'space-between'
  }
};

export const StyledInputField = {
  my: 1,
  minWidth: '100px',

  '@media (min-width: 668px)': {
    minWidth: '200px'
  },

  '@media (min-width: 1025px)': {
    minWidth: '400px'
  }
};

/*
export const StyledSearchBox = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '32px',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  p: 1,
  borderRadius: 2,
  mt: 6,
  mb: 2,

  '@media (min-width:668px)': {
    flexDirection: 'row',
    fontSize: '11px'
},

'@media (min-width:1025px)': {
    flexDirection: 'row',
    fontSize: '11px',
}
};

export const StyledCardPreviewImgExplore = {
  height: '50%',
  width: '100%'
}

export const StyledModal = {

  '@media (min-width:668px)': {
  },

  '@media (min-width:1025px)': {
  }
};
*/