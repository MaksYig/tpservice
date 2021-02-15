import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import makeStyles from './styles';
import { useSelector } from 'react-redux';
import {
  AppBar,
  Tab,
  Tabs,
  Box,
  Typography,
} from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import UserSettings from '../../pages/UserSettings/UserSettings';
import UpdatePassword from '../../pages/UpdatePassword/UpdatePassword';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CollectionsOutlinedIcon from '@material-ui/icons/CollectionsOutlined';
import AdminUsers from '../../pages/AdminUsers/AdminUsers'
import AdminTour from '../../components/Tours/Tour/AdminTour'
import MyBookings from '../../pages/MyBookings/MyBookings'
import AdminPanel from '../../components/AdminPanel/AdminPanel'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component='span' >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

export default function UserLayout() {
  const classes = makeStyles();
  const [value, setValue] = useState(0);
  const userData = useSelector((state) => state.auth);
  console.log(userData.user);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='on'
          indicatorColor='primary'
          textColor='primary'
          aria-label='scrollable force tabs example'
        >
          <Tab
            label='My Settings'
            icon={<SettingsOutlinedIcon />}
            {...a11yProps(0)}
          />
          <Tab
            label='My Password'
            icon={<LockOpenOutlinedIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label='My Bookings'
            icon={<AccountBalanceWalletOutlinedIcon />}
            {...a11yProps(2)}
          />
          <Tab
            label='My Reviews'
            icon={<RateReviewOutlinedIcon />}
            {...a11yProps(3)}
          />

          {userData?.user?.role === 'admin'
            ? [
                [
                  <Tab
                    label='Users'
                    icon={
                      <PeopleAltOutlinedIcon className={classes.AdminIcon} />
                    }
                    {...a11yProps(4)}
                  />,
                ],
                [
                  <Tab
                    label='Tours'
                    icon={
                      <CollectionsOutlinedIcon className={classes.AdminIcon} />
                    }
                    {...a11yProps(5)}
                  />,
                ],
                [
                  <Tab
                    label='Bookings'
                    icon={
                      <AccountBalanceWalletOutlinedIcon
                        className={classes.AdminIcon}
                      />
                    }
                    {...a11yProps(6)}
                  />,
                ],
              ]
            : null}
        </Tabs>
      </AppBar>
      <TabPanel className={classes.TabPanel} value={value} index={0}>
        <UserSettings />
      </TabPanel>
      <TabPanel className={classes.TabPanel} value={value} index={1}>
        <UpdatePassword />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyBookings/>
      </TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}>
        <AdminPanel users />
        <AdminUsers />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AdminPanel tours />
        <AdminTour />
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
