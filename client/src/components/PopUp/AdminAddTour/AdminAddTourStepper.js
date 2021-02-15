import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  Box,
  Grid,
  Stepper,
  TextField,
  Step,
  StepLabel,
  Button,
  Typography,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Input from '../../Input/Input';
import UploadButton from '../../UploadButton/UploadButton';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  selectDifficulty: {
    width: '100%',
  },
}));

function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState([
    { date: new Date(Date.now()) },
  ]);

  const [tourData, setTourData] = useState({
    name: '',
    duration: '',
    difficulty: '',
    maxGroupSize: '',
    price: '',
    imageCover: {},
    startDates: [],
  });
  const steps = getSteps();
  console.log(tourData.startDates);
  console.log(selectedDate);

  const handleDateChange = (date,e) => {
    // setSelectedDate()
  };
  const addRow = () => {
    const dates = tourData.startDates;
    if (dates.length < 4) {
      dates.push({ date:selectedDate});
      setTourData({ startDates: dates });
    }
  };
  const delRow = () => {
    const dates = tourData.startDates;
    if (dates.length > 0) {
      dates.pop();
      setTourData({ startDates: dates });
    }
  };
  const handleChange = (e) => {
    setTourData({ ...tourData, [e.target.name]: e.target.value });
  };
  console.log(tourData);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const uploadHandler = (event) => {
    setTourData({ ...tourData, imageCover: event.target.files[0] });
  };
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <Box mt={3} mb={3}>
            <Grid container justify='center' spacing={2}>
              <Input
                autofocus
                name='name'
                type='text'
                label='Tour Name'
                handleChange={handleChange}
                value={tourData.name}
                half
              />
              <Input
                name='duration'
                type='number'
                label='Tour duration'
                handleChange={handleChange}
                value={tourData.duration}
                small
              />
              <Grid item xs={12} sm={6}>
                <TextField
                  id='select'
                  label='Tour difficulty'
                  value={tourData.difficulty}
                  margin='dense'
                  variant='outlined'
                  name='difficulty'
                  select
                  className={classes.selectDifficulty}
                  onChange={(e, newValue) => {
                    setTourData({ ...tourData, difficulty: e.target.value });
                  }}
                >
                  <MenuItem value='easy'>Easy</MenuItem>
                  <MenuItem value='medium'>Medium</MenuItem>
                  <MenuItem value='hard'>Hard</MenuItem>
                </TextField>
              </Grid>
              <Input
                name='maxGroupSize'
                type='number'
                label='Max Group Size'
                handleChange={handleChange}
                value={tourData.maxGroupSize}
                small
              />
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box mt={3} mb={3}>
            <Grid container spacing={2}>
              <Input
                autofocus
                name='summary'
                type='text'
                label='Tour Summary'
                rows={2}
                multiline
                handleChange={handleChange}
                value={tourData.summary}
              />
              <Input
                autofocus
                name='description'
                type='text'
                label='Tour Description'
                rows={4}
                multiline
                handleChange={handleChange}
                value={tourData.description}
              />
              <Grid container alignItems='center' justify='center' spacing={2}>
                <Input
                  autofocus
                  name='price'
                  type='number'
                  label='Tour Price'
                  handleChange={handleChange}
                  value={tourData.price}
                  small
                />
                <Grid item>
                  <UploadButton
                    name='imageCover'
                    id='imageCover'
                    IconType='btn'
                    btnText='Upload Cover Image'
                    handleChange={uploadHandler}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box mt={3} mb={3}>
            <Grid container spacing={2}>
              {tourData.startDates.map((date, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin='normal'
                      id='date-picker-dialog'
                      label='Date picker dialog'
                      format='dd/MM/yyyy'
                      value={new Date(Date.now())}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              ))}

              <Grid container spacing={3}>
                <Grid item>
                  <IconButton onClick={addRow}>
                    <AddBoxOutlinedIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton onClick={delRow}>
                    <IndeterminateCheckBoxOutlinedIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      case 3:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography component='span' className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography component='span' className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant='contained' color='primary' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
