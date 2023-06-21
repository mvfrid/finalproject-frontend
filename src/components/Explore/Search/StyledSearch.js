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
  mx: '10px',

  '@media (min-width: 650px)': {
    flexDirection: 'row',
    mx: '16px'
  },

  '@media (min-width: 750px)': {
    flexDirection: 'row',
    maxWidth: '800px',
    mx: 'auto'
  }
};

export const StyledInputBox = {
  display: 'flex',
  alignItems: 'center',
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
  width: '80%',

  '@media (min-width: 668px)': {
    minWidth: '200px'
  },

  '@media (min-width: 1025px)': {
    minWidth: '350px'
  }
};

export const StyledFormControl = {
  mx: 1,
  minWidth: '100px',
  width: 'auto',

  '@media (min-width: 550px)': {
    minWidth: '150px'
  },

  '@media (min-width: 750px)': {
    minWidth: '200px'
  }
};

export const StyledListSubheader = {
  display: 'flex',
  alignItems: 'center',
  mb: 0,
  mt: '10px',
  py: 0,
  lineHeight: 1,
  minHeight: '30px',

  '@media (min-width: 550px)': {
    minHeight: '40px'
  },

  '@media (min-width: 750px)': {
  }
};

export const StyledMenuItem = {
  my: 0,
  py: 0,
  lineHeight: 1,
  minHeight: '30px',

  '@media (min-width: 550px)': {
    minHeight: '35px'
  },

  '@media (min-width: 750px)': {
  }
};

export const StyledSearchBtn = {
  m: 0.5,
  px: '10px',
  backgroundColor: '#2E7D32',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: '#2A8D5C'
  }
}
