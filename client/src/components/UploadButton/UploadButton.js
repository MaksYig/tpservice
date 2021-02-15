import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import makeStyles from './styles';

export default function UploadButton({
  id,
  name,
  multiple,
  IconType,
  btnText,
  handleChange,
  primary,
}) {
  const classes = makeStyles();

  return (
    <div className={classes.root}>
      {IconType === 'btn' && (
        <Fragment>
          <input
            accept='image/*'
            className={classes.input}
            id={id}
            name={name}
            multiple={multiple ? multiple : false}
            type='file'
            onChange={handleChange}
          />
          <label htmlFor={id}>
            <Button
              variant='contained'
              color={primary ? 'primary' : 'secondary'}
              component='span'
            >
              {btnText}
            </Button>
          </label>
        </Fragment>
      )}
      {IconType === 'icon' && (
        <Fragment>
          <input
            accept='image/*'
            className={classes.input}
            id={id}
            name={name}
            type='file'
            multiple={multiple ? multiple : false}
            onChange={handleChange}
          />
          <label htmlFor={id}>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Fragment>
      )}
    </div>
  );
}
