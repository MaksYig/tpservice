import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Button } from '@material-ui/core';
import Input from '../../components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import RadioGender from '../../components/RadioGender/RadioGender';
import Switch from '../../components/Switch/Switch';
import Avatar from '../../components/Avatar/Avatar';
import UploadButton from '../../components/UploadButton/UploadButton';
import { passwordUpdate } from '../../redux/actions/user';
import makeStyles from './styles';

export const UpdatePassword = (props) => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  // const userData = useSelector((state) => state.auth);
  const [sendForm, setSendForm] = useState(false);
  const [formData, setFormData] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: '',
  });

  // const [user, setUser] = useState(userData.user);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleShowPassword = (event) =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(passwordUpdate(formData));
    setSendForm(true)

  };

  useEffect(() => {
    setFormData({
      passwordCurrent: '',
      password: '',
      passwordConfirm: '',
      country: '',
    });
  }, [sendForm]);


  return (
    <Container className={classes.root}>
      <form>
        <Grid container spacing={3}>
          <Input
            name='passwordCurrent'
            label='User Current Password:'
            type='password'
            handleChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
            autofocus
            small
            value={formData.passwordCurrent}
          />
          <Input
            name='password'
            label='New Password:'
            type='password'
            handleChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
            small
            value={formData.password}
          />
          <Input
            name='passwordConfirm'
            label='Confirm Password:'
            type='password'
            value={formData.phone}
            handleChange={handleChange}
            small
            value={formData.passwordConfirm}
          />

          <Grid container justify='center'>
            <Box mt={5}>
              <Button
                variant='contained'
                color='primary'
                onClick={onSubmitHandler}
              >
                Update Password
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UpdatePassword;
