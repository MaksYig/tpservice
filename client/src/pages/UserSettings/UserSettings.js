import React, { useState, useEffect } from 'react';

import { Container, Grid, Box, Button } from '@material-ui/core';
import Input from '../../components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import RadioGender from '../../components/RadioGender/RadioGender';
import Switch from '../../components/Switch/Switch';
import ImageAvatar from '../../components/Avatar/Avatar';
import UploadButton from '../../components/UploadButton/UploadButton';
import { userUpdate } from '../../redux/actions/user';
import makeStyles from './styles';

export const UserSettings = (props) => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    gender: 'female',
    employerTp: true,
    photo:{},
  });

  const [user, setUser] = useState(userData.user);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const uploadHandler = (event) => {
    setFormData({ ...formData, photo: event.target.files[0] });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('phone', formData.phone)
    data.append('country', formData.country)
    data.append('gender', formData.gender)
    data.append('employerTp', formData.employerTp);
    data.append('photo', formData.photo);
    console.log(data);
    dispatch(userUpdate(data));
  };

  useEffect(() => {
    setUser(userData.user);
    if (userData.user)
      setFormData({
        name: userData.user.name,
        email: userData.user.email,
        phone: userData.user.phone,
        country: userData.user.country,
        gender: userData.user.gender,
        employerTp: userData.user.employerTp,
        photo: userData.user.photo,
      });
  }, [userData]);

  console.log(formData);
  return (
    <Container className={classes.root}>
      <form>
        <Grid container spacing={3}>
          <Input
            name='name'
            label='Your Name:'
            type='text'
            small
            handleChange={handleChange}
            autofocus
            value={formData.name}
          />
          <Input
            name='email'
            label='User Email Address:'
            type='email'
            handleChange={handleChange}
            value={formData.email}
            small
          />
          <Input
            name='phone'
            label='User Phone Number:'
            type='phone'
            value={formData.phone}
            handleChange={handleChange}
            small
          />

          <SelectCountry
            half
            value={formData.country}
            handleChange={(event, newValue) => {
              setFormData({ ...formData, country: newValue });
            }}
            onInputChange={(event, newInputValue) => {
              setFormData({ ...formData, country: newInputValue });
            }}
            
          />
          <RadioGender
            value1='female'
            value2='male'
            label1='Female'
            label2='Male'
            name='gender'
            labelName='gender'
            value={formData.gender}
            handleChange={handleChange}
            half
          />
          <Switch
            label='TP Employer'
            name='employerTp'
            handleChange={(event) => {
              setFormData({
                ...formData,
                employerTp: event.target.checked,
              });
            }}
            value={formData.employerTp}
            half
          />

          <Grid item xs={12} sm={4}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='100%'
            >
              <ImageAvatar
                src={`http://localhost:5000/img/users/${user?.photo}`}
                size='large'
                flag
                flagsrc={
                  user
                    ? `http://localhost:5000/img/flags/${
                        user?.country?.toLowerCase() + '.svg'
                      }`
                    : null
                }
              />
              <UploadButton
                IconType='icon'
                name='photo'
                id='photo'
                handleChange={uploadHandler}
              />
              {/* <input
                type='file'
                onChange={uploadHandler}
                name='photo'
                accept='image/*'
              /> */}
            </Box>
          </Grid>
          <Grid container justify='center'>
            <Box mt={5}>
              <Button
                variant='contained'
                color='primary'
                onClick={onSubmitHandler}
              >
                Update Profile
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserSettings;
