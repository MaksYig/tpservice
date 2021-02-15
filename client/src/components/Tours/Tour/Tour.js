import React, { useState, useEffect, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
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
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AssistantPhotoOutlinedIcon from '@material-ui/icons/AssistantPhotoOutlined';
import AlarmOutlinedIcon from '@material-ui/icons/AlarmOutlined';
import EuroSymbolOutlinedIcon from '@material-ui/icons/EuroSymbolOutlined';
import makeStyles from './styles';

export default function Tour() {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [toursData, setToursData] = useState();
  const tours = useSelector((state) => state.tours.tours);

  useEffect(() => {
    setToursData(tours);
  }, [tours]);

  const getClosestDate = (arr) => {
    const now = new Date();
    let closest = Infinity;
    arr.forEach(function (d) {
      const date = new Date(d.date);

      if (date >= now && (date < new Date(closest) || date < closest)) {
        closest = d.date;
      }
    });
    const closestDate = closest;

    return closestDate;
  };

  return (
    <Fragment>
      {toursData &&
        toursData.map((tour) => (
          <Grid item xs={12} sm={6} md={4} key={tour._id}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg'
                title={tour.name}
                
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
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {tour.summary}
                  </Typography>
                </Box>

                <div className={classes.card__row}>
                  <ListItem className={classes.ListItem}>
                    <ListItemAvatar className={classes.ListItemAvatar}>
                      <Avatar className={classes.Avatar}>
                        <DateRangeOutlinedIcon className={classes.Icon} />
                      </Avatar>
                    </ListItemAvatar>
                    <Typography className={classes.Typography} variant='body2'>
                      {moment(getClosestDate(tour.startDates)).format(
                        'DD MMMM YYYY'
                      )}
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
                        <PeopleAltOutlinedIcon className={classes.Icon} />
                      </Avatar>
                    </ListItemAvatar>
                    <Typography className={classes.Typography} variant='body2'>
                      {tour.maxGroupSize} <span>people/group</span>
                    </Typography>
                  </ListItem>
                </div>
              </CardContent>

              <CardActions className={classes.cardFooter}>
                <NavLink
                  to={{
                    pathname: `/tour/${tour.slug}`,
                    state: { id: tour._id },
                  }}
                >
                  <Button size='small' color='primary' variant='contained'>
                    Learn More
                  </Button>
                </NavLink>

                <Box>
                  <ListItem className={classes.ListItemPrice}>
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
                  </ListItem>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Fragment>
  );
}
