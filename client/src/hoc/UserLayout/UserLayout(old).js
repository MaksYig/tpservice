import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import AssideMenu from '../../components/AssideMenu/AssideMenu';
import PageTitle from '../../components/PageTitle/PageTitle';
import makeStyles from './styles';

export const UserLayout = (props) => {
  const classes = makeStyles();
  return (
    <Grid>
      <PageTitle>User Settings</PageTitle>
      <Box className={classes.root} mt={0}>
        <AssideMenu />
        <Grid className={classes.UserLayout__wrapper}>
          <Container className={classes.UserLayout__container}>
            {props.children}
          </Container>
        </Grid>
      </Box>
    </Grid>
  );
};

export default UserLayout;
