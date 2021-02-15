import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import makeStyles from './styles';

export default function Input({
  name,
  label,
  type,
  handleChange,
  handleShowPassword,
  autofocus,
  half,
  small,
  valueD,
  value,
  rows,
  multiline,
}) {
  const classes = makeStyles();
  return (
    <Grid item xs={12} sm={half ? 6 : 12} md={small ? 4 : null}>
      <TextField
        className={classes.TextField}
        autoFocus={autofocus}
        margin='dense'
        id={name}
        name={name}
        value={value}
        defaultValue={valueD}
        label={label}
        type={type}
        variant='outlined'
        multiline={multiline ? true : false}
        required
        rows={rows}
        onChange={handleChange}
        fullWidth
        InputProps={
          name === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
}
