import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import BookingCard from '../../components/BookingCard/BookingCard';
export default function MyBookings() {
  return (
    <Grid container spacing={2}>
      <BookingCard />
    </Grid>
  );
}
