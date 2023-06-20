/* eslint-disable linebreak-style */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress
        size={60}
        sx={{ color: 'white' }}
        aria-label="Loading" />
    </Stack>
  );
}