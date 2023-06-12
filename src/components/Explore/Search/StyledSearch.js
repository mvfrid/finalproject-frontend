export const StyledSearchBox = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '32px',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  padding: '1px',
  borderRadius: '2px',
  marginTop: '6px',
  marginBottom: '2px',

  '@media (min-width: 668px)': {
    flexDirection: 'row',
    fontSize: '11px'
  },

  '@media (min-width: 1025px)': {
    flexDirection: 'row',
    fontSize: '11px'
  }
};

export const StyledInputBox = {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',

  '@media (min-width: 668px)': {
    justifyContent: 'space-between'
  },

  '@media (min-width: 1025px)': {
    justifyContent: 'space-between'
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