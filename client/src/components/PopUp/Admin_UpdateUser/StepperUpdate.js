import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid,
  Typography,
  Button,
  Step,
  StepLabel,
  Stepper,
  Container,
} from '@material-ui/core';
import makeStyles from './style';
import Input from '../../Input/Input';
import SelectCountry from '../../SelectCountry/SelectCountry';
import RadioGender from '../../RadioGender/RadioGender';
import SwitchComp from '../../Switch/Switch';
import { updateUserById } from '../../../redux/actions/getUsers';

function getSteps() {
  return [
    'Information',
    'Update User',
    // 'Create an ad',
  ];
}

export const StepperMComp = (props) => {
  const classes = makeStyles();
  const userData = useSelector((state) => state.getUsers);
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    gender: '',
    country: '',
    employerTp: '',
    active: '',
  });
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleSubmit = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(updateUserById(user, userData?.user[0]?._id));
    setTimeout(() => {
      props.setClose();
    }, 4000);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (userData?.user) {
      setUser({
        name: userData?.user[0]?.name,
        phone: userData?.user[0]?.phone,
        email: userData?.user[0]?.email,
        gender: userData?.user[0]?.gender,
        employerTp: userData?.user[0]?.employerTp,
        country: userData?.user[0]?.country,
        active: userData?.user[0]?.active,
      });
    }
  }, [userData]);

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Typography>
            {' '}
            Hehe will be text information about user update
          </Typography>
        );
      case 1:
        return (
          <Container>
            <form>
              <Grid container justify='center' spacing={2}>
                <Input
                  name='name'
                  label='User Name:'
                  type='text'
                  half
                  handleChange={handleChange}
                  autofocus
                  value={user?.name}
                />
                <Input
                  name='email'
                  label='User Email:'
                  type='email'
                  half
                  handleChange={handleChange}
                  autofocus
                  value={user?.email}
                />
                <Input
                  name='phone'
                  label='User Phone:'
                  type='phone'
                  half
                  handleChange={handleChange}
                  autofocus
                  value={user?.phone}
                />
                <SelectCountry
                  value={user?.country}
                  handleChange={(event, newValue) => {
                    setUser({ ...user, country: newValue });
                  }}
                  onInputChange={(event, newInputValue) => {
                    setUser({ ...user, country: newInputValue });
                  }}
                />
                <RadioGender
                  value1='female'
                  value2='male'
                  label1='Female'
                  label2='Male'
                  name='gender'
                  labelName='gender'
                  value={user?.gender}
                  handleChange={handleChange}
                />
                <SwitchComp
                  label='TP Employer'
                  name='employerTp'
                  handleChange={(event) => {
                    setUser({
                      ...user,
                      employerTp: event.target.checked,
                    });
                  }}
                  value={user?.employerTp}
                  half
                />
                <SwitchComp
                  label='User Active'
                  name='employerTp'
                  handleChange={(event) => {
                    setUser({
                      ...user,
                      active: event.target.checked,
                    });
                  }}
                  value={user?.active}
                  half
                />
              </Grid>
            </form>
          </Container>
        );
      // case 2:
      //   return 'This is the bit I really care about!';
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <div className={classes.Stepper}>
      <Stepper
        className={classes.stepper__header}
        activeStep={activeStep}
        alternativeLabel
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
            <Typography
              component='div'
              className={classes.instructions}
            >
              User has been updated!!
            </Typography>
            {/* <Button onClick={handleReset}>Reset</Button> */}
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
              <Button
                variant='contained'
                color='primary'
                onClick={
                  activeStep === steps.length - 1 ? handleSubmit : handleNext
                }
              >
                {activeStep === steps.length - 1 ? 'Update User' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default StepperMComp;
