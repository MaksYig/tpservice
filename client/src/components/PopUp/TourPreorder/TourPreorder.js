import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import { createBooking } from '../../../redux/actions/booking';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '10px 10px 35px 10px',
  },
  Container: {
    padding: '25px 10px',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  Stepper: {
    padding: 0,
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Check Your Order',
    // 'Check Your Order',
    // 'Create an ad',
  ];
}

export default function TourPreorder(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [tour, SetTour] = useState();
  const [formData, setFormdata] = useState();
  const [date, setDate] = useState(props.tourdate);
  const tourData = useSelector((state) => state.tours?.tour?.data?.tour);
  const currentUser = useSelector((state) => state.auth);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    /* Add dispatch methode with formData */
    dispatch(createBooking(formData));
    console.log(formData);
    setTimeout(() => {
      props.setClose();
    }, 4000);
  };
  console.log(tour?._id);

  useEffect(() => {
    SetTour(tourData);
    setFormdata({
      tour: tourData?._id,
      tourDate: date,
      price: tour?.price,
      user: currentUser?.user._id,
    });
  }, [tour]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Container>
            <Box pb={4}>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height='120'
                image='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg'
                // title={tour?.name}
              />
              <Box pt={2}>
                <Typography component='div'>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textSecondary'
                  >
                    {' '}
                    Tour Name:
                  </Typography>
                  <Typography component='span' variant='body2'>
                    {' '}
                    {tour?.name}
                  </Typography>
                </Typography>
                <Typography component='div'>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textSecondary'
                  >
                    {' '}
                    Tour Date:
                  </Typography>
                  <Typography component='span' variant='body2'>
                    {' '}
                    {new Date(date).toLocaleDateString('en-gb', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </Typography>
                </Typography>
                <Typography component='div'>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textSecondary'
                  >
                    {' '}
                    Meeting Point:
                  </Typography>
                  <Typography component='span' variant='body2'>
                    {' '}
                    {tour?.startLocation?.description}
                  </Typography>
                </Typography>
                <Typography component='div'>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textSecondary'
                  >
                    {' '}
                    Start at:
                  </Typography>
                  <Typography component='span' variant='body2'>
                    {' '}
                    {new Date(
                      tour?.startLocation?.startTime
                    ).toLocaleTimeString('en-gb', {
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </Typography>
                </Typography>
                <Typography component='div'>
                  <Typography
                    component='span'
                    variant='body2'
                    color='textSecondary'
                  >
                    {' '}
                    Guide Number:
                  </Typography>
                  <Typography component='span' variant='body2'>
                    {' '}
                    {tour?.guides[0]?.phone}
                  </Typography>
                </Typography>
                <Grid container alignItems='center' spacing={1}>
                  <Grid item>
                    <Typography component='div'>
                      <Typography
                        component='span'
                        variant='body2'
                        color='textSecondary'
                      >
                        {' '}
                        Tour Price:
                      </Typography>
                      <Typography
                        component='span'
                        variant='body2'
                        color='textPrimary'
                      >
                        {' '}
                        {tour?.price} EURO
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        );
      // case 1:
      //   return (

      //   );
      // case 2:
      //   return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.Stepper}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography component='div' className={classes.instructions}>
              Tour has been Ordered!!!
            </Typography>
            {/* <Button onClick={handleReset}>Reset</Button> */}
          </div>
        ) : (
          <div>
            <Typography component='div' className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <Box display='flex' justifyContent='center'>
              {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button> */}
              <Button
                variant='contained'
                color='primary'
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
              >
                {activeStep === steps.length - 1 ? 'Order Tour' : 'Next'}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}
