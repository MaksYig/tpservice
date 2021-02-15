import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import useStyles from './styles';
import {
  Box,
  Tooltip,
  IconButton,
  Paper,
  Grid,
  Container,
  Typography,
} from '@material-ui/core';
import { AssignmentTurnedInOutlined } from '@material-ui/icons';
import {getActiveUsers} from '../../redux/actions/getUsers'
import AdminAddTour from '../../components/PopUp/AdminAddTour/AdminAddTour'


export default function AdminPanel({users, tours,open}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const usersData = useSelector((state)=>state.getUsers);
  const toursData = useSelector((state) => state.tours);

  console.log(usersData);
  console.log(toursData?.tours?.length);

const unActiveUsers = ()=>{
  console.log('render UnAcive');
}
const ActiveUsers = () => {
  console.log('render Acive');
  dispatch(getActiveUsers());
};
const allUsers = ()=>{
  console.log('All Users');
}


const Active = (userData)=> usersData?.users?.filter((user)=>user.active).length
const UnActive = (userData)=> usersData?.users?.filter((user)=>!user.active).length




  return (
    <Grid className={classes.root}>
      <Paper elevation={3} className={classes.Paper}>
        <Grid container justify='space-between'>
          <Box display='flex'>
            {' '}
            {users && (
              <Grid item>
                <Tooltip title='Active Users' placement='top'>
                  <IconButton size={'small'} onClick={ActiveUsers}>
                    <AssignmentTurnedInOutlined />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
            {tours && (
              <Grid item>
                  <AdminAddTour />
              </Grid>
            )}
            {users && (
              <Grid item>
                <Tooltip title='Active Users' placement='top'>
                  <IconButton size={'small'} onClick={ActiveUsers}>
                    <AssignmentTurnedInOutlined />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
            {users && (
              <Grid item>
                <Tooltip title='Active Users' placement='top'>
                  <IconButton size={'small'} onClick={ActiveUsers}>
                    <AssignmentTurnedInOutlined />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
          </Box>
          <Box alignItems='center' justify='flex-end'>
            <Grid item>
              <Typography variant='body2' component='span'>
                <Typography component='span' className={classes.total}>
                  {users && usersData?.users?.length}
                  {tours && toursData?.tours?.length}{' '}
                </Typography>{' '}
                <Typography
                  component='span'
                  color='secondary'
                  className={classes.active}
                >
                  {users && Active()}{' '}
                </Typography>{' '}
                <Typography component='span' className={classes.unactive}>
                  {users && UnActive()}
                </Typography>
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
}
