import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export const Alerts = (props) => {
 
  const [open, setOpen] = useState(true);
  const { alerts } = props;

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Snackbar
        key={alert.id}
        open={open}
      >
        <Alert severity={alert.alertType}>
          {alert.msg}
        </Alert>
      </Snackbar>
    ))
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
  
});

export default connect(mapStateToProps)(Alerts);
