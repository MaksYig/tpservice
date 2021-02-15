import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';
import AdminPanel from '../../components/AdminPanel/AdminPanel';
import { Container, Grid } from '@material-ui/core';
import makeStyles from './styles';
import { getUsers } from '../../redux/actions/getUsers';

export default function AdminUsers(props) {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [users?.updatedUser, users?.deletedUser]);

  return (
    <Fragment>
      <Grid container className={classes.Grid__container} spacing={3}>
        <UserCard />
      </Grid>
    </Fragment>
  );
}
