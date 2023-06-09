import React from 'react';
import { Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import { ModalsProfile } from 'components/Reusable/ModalsProfile';
import { NewTripModal } from '../NewTripModal/NewTripModal';
import { TripList } from '../TripList/TripList';
import { UserInfo } from '../UserInfo/UserInfo';

export const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="main">
      <UserInfo />

      <Button
        variant="outlined"
        onClick={handleOpen}
        endIcon={<AddPhotoAlternateIcon />}>
        Add new trip
      </Button>
      <NewTripModal open={open} onClose={handleClose} />
      <TripList />
    </div>
  )
}