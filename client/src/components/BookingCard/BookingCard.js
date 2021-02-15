import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import makeStyles from './styles';
import { getMyBookings, deleteMyBooking } from '../../redux/actions/booking';

export default function BookingCard() {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [bookings, setBookings] = useState();
  const BookingsArr = useSelector((state) => state.bookings);

  const handleDelete = (bookId) => {
    console.log(`delete BOOK ${bookId}`);
    dispatch(deleteMyBooking(bookId));
  };
  useEffect(() => {
    dispatch(getMyBookings());
  }, []);
  useEffect(() => {
    setBookings(BookingsArr?.myBookings);
  }, [BookingsArr]);

  return (
    <Fragment>
      {bookings?.map((book) => (
        <Grid item xs={12} md={3} key={book._id}>
          <Paper className={classes.root} elevation={3}>
            <Card>
              <CardMedia
                // className={classes.media}
                image='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg'
                // title={tour.name}
                style={{ height: '150px' }}
              />
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textSecondary'
                        >
                          Tour Name:
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textPrimary'
                        >
                          {book.tour.name}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textSecondary'
                        >
                          Tour date:
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textPrimary'
                        >
                          {new Date(book.tourDate).toLocaleDateString('en-gb', {
                            day: 'numeric',
                            month: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                          })}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textSecondary'
                        >
                          Start from:
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textPrimary'
                        >
                          {book.tour.startLocation.description}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textSecondary'
                        >
                          Tour price:
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textPrimary'
                        >
                          {book.tour.price} EURO
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textSecondary'
                        >
                          Pay Methode:
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textPrimary'
                        >
                          {book.paymentMethode.toUpperCase()}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textSecondary'
                        >
                          Guide Phone:
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textPrimary'
                        >
                          {book.tour.guides[0].phone}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textSecondary'
                        >
                          Ordred At:
                        </Typography>
                      </TableCell>
                      <TableCell className={classes.TableCell}>
                        <Typography
                          component='span'
                          variant='body2'
                          color='textPrimary'
                        >
                          {new Date(book.createdAt).toLocaleDateString(
                            'en-gb',
                            {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            }
                          )}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>

              <Box pb={2}>
                <Grid container spacing={2} justify='center'>
                  {new Date(book.tourDate) > Date.now() && (
                    <Grid item>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => handleDelete(book._id)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  )}
                  {new Date(book.tourDate) < Date.now() && (
                    <Grid item>
                      <Button variant='contained' color='primary'>
                        Add Review
                      </Button>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Card>
          </Paper>
        </Grid>
      ))}
    </Fragment>
  );
}
