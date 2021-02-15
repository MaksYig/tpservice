import React, { useEffect, useState } from 'react';
import ReactMapGl, { Marker, NavigationControl, Popup } from 'react-map-gl';
import { useDispatch, useSelector } from 'react-redux';
import { getTourById } from '../../redux/actions/tours';
import Pin from '../../Assets/img/comp/pin.svg';
import ImageAvatar from '../../components/Avatar/Avatar';
import makeStyles from './styles';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  Box,
  Grid,
  CardActionArea,
  Button,
  Card,
  CardMedia,
  Paper,
  Dialog,
  DialogTitle,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab/';
import RepeatIcon from '@material-ui/icons/Repeat';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import FolderIcon from '@material-ui/icons/Folder';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AlarmIcon from '@material-ui/icons/Alarm';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import TourPreorder from '../../components/PopUp/TourPreorder/TourPreorder';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';

export default function TourPage(props) {
  const classes = makeStyles();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // const [dense, setDense] = useState(false);
  const [tourId, setTourId] = useState(props.location.state.id);
  const [tour, setTour] = useState();
  const [tourDate, setTourDate] = useState();
  const [showPopUp, setShowPopUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [secondary, setSecondary] = useState(false);
  const dispatch = useDispatch();
  const tourData = useSelector((state) => state.tours.tour?.data?.tour);
  const bookings = useSelector((state) => state.bookings);
  const user = useSelector((state) => state.auth?.user);

  const [viewport, SetViewPort] = useState({
    latitude: 37.9908997,
    longitude: 23.7733589,
    zoom: 8,
    width: '100%',
    height: '100%',
  });
  console.log(bookings);
  const navControlStyle = {
    right: 10,
    top: 10,
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log(user);
  const handleClose = () => {
    setOpen(false);
  };
  const getClosestDate = (arr) => {
    const now = new Date();
    let closest = Infinity;
    arr?.forEach(function (d) {
      const date = new Date(d.date);

      if (date >= now && (date < new Date(closest) || date < closest)) {
        closest = d.date;
      }
    });
    const closestDate = closest;

    return closestDate;
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  //For running only once when page render
  useEffect(() => {
    dispatch(getTourById(tourId));
  }, [bookings]);

  //Set Tour only when Dispach return await promice
  useEffect(() => {
    setTour(tourData);
  }, [tourData, bookings]);

  return (
    <Card className={classes.root}>
      <Grid className={classes.headerImg}>
        <CardActionArea
          className={classes.CardActionArea}
          style={{
            opacity: 0.75,
          }}
        >
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            height='400'
            image='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg'
            title={tour?.name}
          />
        </CardActionArea>
        <Grid item className={classes.headerBox}>
          <Typography className={classes.headerUptitle} variant='h5'>
            Beautifull tour to
          </Typography>
          <Typography className={classes.headerTitle} variant='h3'>
            {tour?.name}
          </Typography>
          <Grid container spacing={3} justify='center' alignItems='center'>
            <Grid item>
              <Box display='flex' alignItems='center'>
                <ListItemAvatar>
                  <AlarmIcon />
                </ListItemAvatar>{' '}
                <Typography component='span' className={classes.header__text}>
                  {tour?.duration} Day Tour
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display='flex' alignItems='center'>
                <ListItemAvatar>
                  <PeopleAltIcon />
                </ListItemAvatar>{' '}
                <Typography component='span' className={classes.header__text}>
                  {' '}
                  {tour?.maxGroupSize} people/group
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Button
            variant='contained'
            color='secondary'
            className={classes.headerButton}
            startIcon={<LibraryAddIcon />}
          >
            Order tour
          </Button>
        </Grid>
      </Grid>
      <CardContent className={classes.CardContent}>
        <Grid
          container
          justify='center'
          className={classes.aboutContainer}
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Typography variant='h6' className={classes.titleInfo}>
              About {tour?.name.toUpperCase()} Tour
            </Typography>
            <Typography component='p'>{tour?.description}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant='h6'
              align='center'
              className={classes.titleInfo}
            >
              More Tour Information
            </Typography>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Box display='flex' alignItems='center'>
                  <ListItemAvatar className={classes.ListItemAvatar}>
                    <TodayOutlinedIcon />
                  </ListItemAvatar>{' '}
                  <Typography component='span'>
                    <Typography
                      component='span'
                      variant='body1'
                      color='textSecondary'
                    >
                      {'Clossest Date:'.toUpperCase()}
                    </Typography>
                    &nbsp;&nbsp;
                    {new Date(
                      getClosestDate(tour?.startDates)
                    ).toLocaleDateString('en-gb', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                  <ListItemAvatar className={classes.ListItemAvatar}>
                    <PeopleAltIcon />
                  </ListItemAvatar>{' '}
                  <Typography component='span'>
                    <Typography
                      component='span'
                      variant='body1'
                      color='textSecondary'
                    >
                      {'Max Group SIze:'.toUpperCase()}
                    </Typography>
                    &nbsp;&nbsp;
                    {tour?.maxGroupSize}{' '}
                    <Typography component='span' variant='body2'>
                      people/group
                    </Typography>{' '}
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                  <ListItemAvatar className={classes.ListItemAvatar}>
                    <EqualizerOutlinedIcon />
                  </ListItemAvatar>{' '}
                  <Typography component='span'>
                    <Typography
                      component='span'
                      variant='body1'
                      color='textSecondary'
                    >
                      {'Difficulity:'.toUpperCase()}
                    </Typography>
                    &nbsp;&nbsp;
                    {tour?.difficulty?.toUpperCase()}{' '}
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                  <ListItemAvatar className={classes.ListItemAvatar}>
                    <StarBorderOutlinedIcon />
                  </ListItemAvatar>{' '}
                  <Typography component='span'>
                    <Typography
                      component='span'
                      variant='body1'
                      color='textSecondary'
                    >
                      {'Rating:'.toUpperCase()}
                    </Typography>
                    &nbsp;&nbsp;
                    {tour?.ratingAvarage}/5{' '}
                  </Typography>
                </Box>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Grid item xs={12}>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                mt='30px'
              >
                <ImageAvatar
                  size='medium'
                  src='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg'
                />
                &nbsp;
                <Typography component='span' variant='body1'>
                  Tour Guide&nbsp;&nbsp;
                </Typography>
                <Typography component='span' variant='body2'>
                  {' '}
                  {tour?.guides[0]?.name}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.subinfoConteiner}>
          <Grid item xs={12} md={6}>
            <Timeline align='alternate'>
              <TimelineItem>
                <TimelineOppositeContent className={classes.time}>
                  <Typography
                    variant='h6'
                    color='textSecondary'
                    component='span'
                  >
                    {new Date(
                      tour?.startLocation?.startTime
                    ).toLocaleTimeString('en-GB', {
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color='primary'>
                    <PersonPinIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant='h6' component='h1'>
                      Tour Start
                    </Typography>
                    <Typography>{tour?.startLocation?.description}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              {tour?.locations?.map((el, i) => (
                <TimelineItem key={el._id}>
                  <TimelineOppositeContent>
                    {/* <Typography variant='body2' color='textSecondary'>
                      {moment(tour?.startLocation?.startTime).format('hh : mm')}
                    </Typography> */}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      {/* {i === 1 && <BeachAccessIcon />}
                      {i === 0 && <AirportShuttleIcon />} */}
                      {el.description === 'Dinner' && <RestaurantMenuIcon />}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                      <Typography variant='h6' component='div'>
                        {el.description}
                      </Typography>
                      {/* <Typography
                        component='span'
                        variant='body1'
                        color='textSecondary'
                      >
                        {el.address}
                      </Typography> */}
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}

              <TimelineItem>
                <TimelineOppositeContent className={classes.time}>
                  <Typography variant='h6' color='textSecondary'>
                    19:00
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color='secondary'>
                    <RepeatIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant='h6' component='h1'>
                      Back Home
                    </Typography>
                    {/* <Typography>Because this is the life you love!</Typography> */}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
          <Grid item xs={12} md={6}>
            <ReactMapGl
              {...viewport}
              // width='100%'
              height='450px'
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              onViewportChange={(viewport) => SetViewPort(viewport)}
              mapStyle='mapbox://styles/maksydev/ckj3aru9dbe7519s35iswpn0f'
              className={classes.map}
            >
              <NavigationControl style={navControlStyle} />
              {tour?.locations?.map((loc) => (
                <Marker
                  key={loc._id}
                  latitude={loc.coordinates[0]}
                  longitude={loc.coordinates[1]}
                  offsetTop={-30}
                  offsetLeft={-15}
                >
                  <RoomOutlinedIcon
                    color='secondary'
                    style={{
                      transform: `translate(${30 / 2 + 'px'}, ${
                        30 / 2 + 'px'
                      })`,
                      width: '30px',
                      height: '30px',
                    }}
                  />
                  <span className={classes.marker_info}>{loc.description}</span>
                </Marker>
              ))}
            </ReactMapGl>
          </Grid>
        </Grid>

        <Grid
          container
          justify='center'
          spacing={2}
          className={classes.pictureConteiner}
        >
          {tour?.images.map((img, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt={tour?.name}
                  height='200'
                  image='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg'
                  title='Contemplative Reptile'
                />
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Grid container spacing={2} justify='center' alignItems='center'>
          {tour?.startDates?.map((date) => (
            <Grid item key={date._id}>
              {user ? (
                <Button
                  color='secondary'
                  variant='contained'
                  disabled={Date.now() > date.date ? true : false}
                  disabled={
                    date.currentGroupSize >= tour.maxGroupSize ? true : false
                  }
                  onClick={() => setOpen(true) || setTourDate(date.date)}
                >
                  <Box>
                    <Typography variant='body1' component='p'>
                      {new Date(date.date).toLocaleDateString('en-GB')}
                    </Typography>
                    <Typography variant='body2'>
                      {tour.maxGroupSize - date.currentGroupSize}
                      &nbsp;&nbsp;free places
                    </Typography>
                  </Box>
                </Button>
              ) : (
                <Button color='primary' variant='contained'>
                  <Box>
                    <Typography variant='body1' component='p'>
                      Sign In to Order
                    </Typography>
                    <Typography variant='body2'>
                      {tour.maxGroupSize - date.currentGroupSize}
                      &nbsp;&nbsp;free places
                    </Typography>
                  </Box>
                </Button>
              )}
            </Grid>
          ))}
          <Dialog
            open={open}
            onClose={handleClose}
            className={classes.Dialog}
            // aria-labelledby='form-dialog-title'
            fullWidth
          >
            <DialogTitle className={classes.Dialog__title}>
              Preorder Tour
            </DialogTitle>
            <TourPreorder setClose={handleClose} tourdate={tourDate} />
          </Dialog>
        </Grid>
      </CardActions>
    </Card>
  );
}
