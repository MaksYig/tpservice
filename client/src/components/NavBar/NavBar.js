import React, { Fragment, useState, useEffect } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import MaiMenu from '../MainMenu/MainMenu';
import { connect, useDispatch } from 'react-redux';
import { auth } from '../../redux/actions/auth';
import { logout } from '../../redux/actions/auth';
import ImageAvatar from '../Avatar/Avatar';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  // Avatar,
  IconButton,
  Box,
} from '@material-ui/core';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Login from '../PopUp/Login/Login';

import './Navbar.scss';
// import makeStyles from './styles'

export const NavBar = (props) => {
  // const classes = makeStyles();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();



  useEffect(() => {

      setUser(props.user.user);
    
  },[props]);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const logOut = (e) => {
    e.preventDefault()
    dispatch(logout());
    setTimeout(()=>{
      history.push('/');
    },5000)
    setUser(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(user);
  return (
    <AppBar position='static' className='Navbar__wrapper'>
      <Toolbar className='Navbar'>
        {user ? (
          <Fragment>
            {/* <MaiMenu /> */}
            <NavLink to='/tours'>
              <Button color='inherit'>Tours</Button>
            </NavLink>
            <NavLink to='/'>
              <Typography variant='h6'>TPService</Typography>
            </NavLink>
            <div className='NavbarUser'>
              <NavLink className='Navbaruser__link' to='/me'>
                <Box display={{ xs: 'none', sm: 'block' }}>
                  <Typography className='NavbarUser__name' variant='body2'>
                    {user?.name?.split(' ')[0]}
                  </Typography>
                </Box>
                <ImageAvatar
                  src={`http://localhost:5000/img/users/${user?.photo}`}
                  size='medium'
                  flag
                  flagsrc={
                    user
                      ? `http://localhost:5000/img/flags/${
                          user?.country?.toLowerCase() + '.svg'
                        }`
                      : null
                  }
                />
              </NavLink>
              <IconButton color='inherit' onClick={logOut} size='medium'>
                <ExitToAppOutlinedIcon/>
              </IconButton>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {/* <MaiMenu /> */}
            <NavLink to='/tours'>
              <Button color='inherit'>Tours</Button>
            </NavLink>
            <NavLink to='/'>
              <Typography variant='h6'>TPService</Typography>
            </NavLink>
            <div className='NavbarUser'>
              <Login />
              {/* <Button color='inherit'>Sign Up</Button> */}
            </div>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps)(NavBar);
