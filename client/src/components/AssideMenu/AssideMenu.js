import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';

import {
  List,
  Grid,
  Box
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {
  SettingsOutlined,
  LockOpenOutlined,
  ShoppingCartOutlined,
  PeopleAltOutlined,
  FilterOutlined,
} from '@material-ui/icons';

import ListItemComp from './ListItemComp/ListItemComp';
import makeStyles from './styles';

export const AssideMenu = (props) => {
  const classes = makeStyles();
  const [user, setUser] = useState(null);
    useEffect(() => {
      setUser(props.user.user);
    }, [props]);
  return (
    <Grid className={classes.root}>
      <Box display={{ xs: 'none', sm: 'block' }}>
        <List className={classes.List}>
          <ListItemComp title='User Settings' link='/me/settings'>
            <SettingsOutlined className={classes.Icon} />
          </ListItemComp>
          <ListItemComp title='Change Password' link='/me/updatePassword'>
            <LockOpenOutlined className={classes.Icon} />
          </ListItemComp>
          <ListItemComp title='Bookkings' link='/me/Bookings'>
            <ShoppingCartOutlined className={classes.Icon} />
          </ListItemComp>
        </List>
        <Divider />
        {user?.role === 'admin' && (
          <List className={classes.List}>
            <ListItemComp title='All Users' link='/me/users'>
              <PeopleAltOutlined className={classes.Icon} />
            </ListItemComp>
            <ListItemComp title='All Tours' link='/me/tours'>
              <FilterOutlined className={classes.Icon} />
            </ListItemComp>
          </List>
        )}
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps)(AssideMenu);
