import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Admin_UpdateUser from '../PopUp/Admin_UpdateUser/Admin_UpdateUser';
import StepperDelete from '../PopUp/Admin_UpdateUser/StepperDelete'
import moment from 'moment';
import makeStyles from './styles';
import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  CircularProgress,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
} from '@material-ui/core';


import ImageAvatar from '../Avatar/Avatar';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import EventBusyOutlinedIcon from '@material-ui/icons/EventBusyOutlined';


export const UserCard = (props) => {
  const classes = makeStyles();
  const [usersData, setUsersData] = useState();
  const [loading, SetLoading] = useState(true);
  const users = useSelector((state) => state.getUsers);

  useEffect(() => {
    setUsersData(users);
    SetLoading(false);
  }, [users]);


  const Progress = () => (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );

  return (
    <Fragment>
      {usersData?.users?.map((user) => (
        <Grid item xs={12} sm={6} md={4} key={user._id}>
          <Box className={classes.root} boxShadow={3}>
            {!user.active ? (
              <EventBusyOutlinedIcon className={classes.unactive} />
            ) : (
              <EventAvailableOutlinedIcon className={classes.active} />
            )}

            <CardHeader
              avatar={
                <ImageAvatar
                  size='medium'
                  src={`http://localhost:5000/img/users/${user.photo}`}
                  className={classes.avatar}
                ></ImageAvatar>
              }
              title={<Typography variant='h6'>{user.name}</Typography>}
              subheader={
                <Typography variant='body2' color='textPrimary'>
                  <span className={classes.subheader}>Last seen</span>
                  {moment(user.lastLogIn).fromNow()}
                </Typography>
              }
            />

            <CardContent>
              <Grid container justify='center' spacing={2}>
                <TableContainer component={Paper}>
                  <Table
                    className={classes.table}
                    size='small'
                    aria-label='a dense table'
                  >
                    <TableBody>
                      <TableRow>
                        <TableCell className={classes.tableFirst}>
                          Email:
                        </TableCell>
                        <TableCell className={classes.tableSecond}>
                          {user.email}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.tableFirst}>
                          Phone:
                        </TableCell>
                        <TableCell className={classes.tableSecond}>
                          {user.phone}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <Table
                    className={classes.table}
                    size='small'
                    aria-label='a dense table'
                  >
                    <TableBody>
                      <TableRow>
                        <TableCell className={classes.tableFirst}>
                          Gender:
                        </TableCell>
                        <TableCell className={classes.tableSecond}>
                          {user.gender[0].toUpperCase() +
                            user.gender.substring(1)}
                        </TableCell>
                        <TableCell className={classes.tableFirst}>
                          TP:
                        </TableCell>
                        <TableCell className={classes.tableSecond}>
                          {user.employerTp ? 'Yes' : 'No'}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table
                    className={classes.table}
                    size='small'
                    aria-label='a dense table'
                  >
                    <TableBody>
                      <TableRow className={classes.TableRow}>
                        <TableCell className={classes.tableFirst}>
                          Country:
                        </TableCell>
                        <TableCell className={classes.tableSecond}>
                          {user.country}
                        </TableCell>
                        <TableCell className={classes.tableSecond}>
                          <Avatar
                            className={classes.flag}
                            variant='square'
                            src={`http://localhost:5000/img/flags/${
                              user?.country?.toLowerCase() + '.svg'
                            }`}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <Table
                    className={classes.table}
                    size='small'
                    aria-label='a dense table'
                  >
                    <TableBody>
                      <TableRow>
                        <TableCell className={classes.tableFirst}>
                          Bookings: //TODO
                        </TableCell>
                        <TableCell className={classes.tableSecond}>
                          10
                        </TableCell>
                        <TableCell className={classes.tableFirst}>
                          Reviews: //TODO
                        </TableCell>
                        <TableCell className={classes.tableSecond}>
                          15
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </CardContent>
            <CardActions className={classes.CardActions}>
              {/* <Button
                className={classes.button}
                variant='contained'
                color='secondary'
                size='medium'
                startIcon={<DeleteOutlinedIcon />}
              >
                Delete
              </Button> */}
              <StepperDelete userID={user._id} />
              <Admin_UpdateUser userID={user._id} />
            </CardActions>
          </Box>
        </Grid>
      ))}
    </Fragment>
  );
};

export default UserCard;
