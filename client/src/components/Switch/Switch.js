import React from 'react';
import {Grid, Switch,FormGroup,FormControlLabel} from '@material-ui/core';
import makeStyles from './styles'



export default function SwitchComp({ half, value, handleChange, name, label, onRateChange }) {
  const classes = makeStyles();
  return (
    <Grid item xs={12} sm={half ? 6 : 12} md={half ? 4 : 6}>
      <FormGroup row className={classes.root}>
        <FormControlLabel
          control={
            <Switch
              checked={value}
              onChange={handleChange}
              name={name}
              color='primary'
            />
          }
          label={label}
        />
      </FormGroup>
    </Grid>
  );
}
