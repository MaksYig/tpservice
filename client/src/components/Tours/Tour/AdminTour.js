import React, { useState, useEffect, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  ListItem,
  ListItemAvatar,
  Avatar,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AssistantPhotoOutlinedIcon from '@material-ui/icons/AssistantPhotoOutlined';
import AlarmOutlinedIcon from '@material-ui/icons/AlarmOutlined';
import EuroSymbolOutlinedIcon from '@material-ui/icons/EuroSymbolOutlined';
import {getAllTours} from '../../../redux/actions/tours'
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import EuroOutlinedIcon from '@material-ui/icons/EuroOutlined';
import makeStyles from './styles';



const AdminTour=()=> {
  const classes = makeStyles();
  const [toursData, setToursData]= useState();
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours?.tours);
  console.log(toursData);
    useEffect(() => {
      dispatch(getAllTours());
    }, []);
    useEffect(() => {
      if (tours) {
        setToursData(tours);
      }
    }, [tours]);

  return (
    <Grid container spacing={2} className={classes.AdminTours_container}>
      {toursData &&
        toursData.map((tour) => (
          <Grid item xs={12} sm={6} md={4} key={tour._id}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg'
                title={tour?.name}
              />
              <CardContent className={classes.CardContent}>
                <Box
                  className={classes.Rating}
                  display='flex'
                  borderColor='transparent'
                >
                  <Rating
                    className={classes.RatingStars}
                    name='half-rating-read'
                    defaultValue={tour.ratingAvarage}
                    precision={0.5}
                    readOnly
                  />
                </Box>
                <Typography
                  className={classes.tourName}
                  gutterBottom
                  variant='h5'
                  component='h2'
                >
                  {tour.name}
                </Typography>
                <Box my={0.8}>
                  {/* <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {tour.summary}
                  </Typography> */}
                </Box>

                <div className={classes.card__row}>
                  <ListItem className={classes.ListItem}>
                    <ListItemAvatar className={classes.ListItemAvatar}>
                      <Avatar className={classes.Avatar}>
                        <EqualizerOutlinedIcon className={classes.Icon} />
                      </Avatar>
                    </ListItemAvatar>
                    <Typography className={classes.Typography} variant='body2'>
                      {tour?.difficulty?.toUpperCase()}
                    </Typography>
                  </ListItem>
                  <ListItem className={classes.ListItem}>
                    <ListItemAvatar className={classes.ListItemAvatar}>
                      <Avatar className={classes.Avatar}>
                        <AssistantPhotoOutlinedIcon className={classes.Icon} />
                      </Avatar>
                    </ListItemAvatar>
                    <Typography className={classes.Typography} variant='body2'>
                      {tour.startLocation.description}
                    </Typography>
                  </ListItem>
                </div>
                <div className={classes.card__row}>
                  <ListItem className={classes.ListItem}>
                    <ListItemAvatar className={classes.ListItemAvatar}>
                      <Avatar className={classes.Avatar}>
                        <AlarmOutlinedIcon className={classes.Icon} />
                      </Avatar>
                    </ListItemAvatar>
                    <Typography className={classes.Typography} variant='body2'>
                      {tour.duration} Day <span>Tour</span>
                    </Typography>
                  </ListItem>
                  <ListItem className={classes.ListItem}>
                    <ListItemAvatar className={classes.ListItemAvatar}>
                      <Avatar className={classes.Avatar}>
                        <EuroOutlinedIcon className={classes.Icon} />
                      </Avatar>
                    </ListItemAvatar>
                    <Typography className={classes.Typography} variant='body2'>
                      {tour?.price} <span>EURO</span>
                    </Typography>
                  </ListItem>
                </div>
                <Box mt={2}>
                  <Paper>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell className={classes.adminHeaderCell}>
                            Date
                          </TableCell>
                          <TableCell className={classes.adminHeaderCell}>
                            Start At
                          </TableCell>
                          <TableCell className={classes.adminHeaderCell}>
                            Group SIze
                          </TableCell>
                          <TableCell className={classes.adminHeaderCell}>
                            Ordered
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      {tour?.startDates?.map((date) => (
                        <TableBody key={date._id}>
                          <TableRow>
                            <TableCell className={classes.adminCell}>
                              {new Date(date?.date).toLocaleDateString(
                                'en-gb',
                                {
                                  day: 'numeric',
                                  month: 'numeric',
                                  year: 'numeric',
                                  weekday: 'short',
                                }
                              )}
                            </TableCell>
                            <TableCell className={classes.adminCell}>
                              {new Date(date?.date).toLocaleTimeString(
                                'en-gb',
                                {
                                  hour: 'numeric',
                                  minute: 'numeric',
                                }
                              )}
                            </TableCell>
                            <TableCell className={classes.adminCell}>
                              {tour?.maxGroupSize}
                            </TableCell>
                            <TableCell className={classes.adminCell}>
                              {date?.currentGroupSize}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      ))}
                    </Table>
                  </Paper>
                </Box>
              </CardContent>

              <CardActions className={classes.cardFooter}>
                {/* <NavLink
                  to={{
                    pathname: `/tour/${tour.slug}`,
                    state: { id: tour._id },
                  }}
                >
                  <Button size='small' color='primary' variant='contained'>
                    Learn More
                  </Button>
                </NavLink> */}

                <Box>
                  {/* <ListItem className={classes.ListItemPrice}>
                    <ListItemAvatar className={classes.ListItemAvatarPrice}>
                      <EuroSymbolOutlinedIcon className={classes.euroIcon} />
                    </ListItemAvatar>
                    <Typography
                      className={classes.TypographyPrice}
                      variant='body2'
                    >
                      {tour.price}{' '}
                      <span className={classes.TypographyPriceSpan}>
                        per/person
                      </span>
                    </Typography>
                  </ListItem> */}
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

export default AdminTour
