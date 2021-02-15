import React, { Fragment } from 'react';
import {Avatar,Box} from '@material-ui/core';
import makeStyles from './styles';

export default function ImageAvatar({ src, alt, size, flag, flagsrc }) {
  const classes = makeStyles();

  return (
    <div className={classes.root}>
      {size === 'small' && (
        <Box className={classes.avatar_wrapper}>
          <Avatar alt={alt} src={src} className={classes.small} />
        </Box>
      )}
      {size === 'medium' && (
        <Box className={classes.avatar_wrapper}>
          <Avatar alt={alt} src={src} className={classes.medium} />
          {flag && (
            <Avatar
              variant='square'
              src={flagsrc}
              className={classes.flag_medium}
            />
          )}
        </Box>
      )}
      {size === 'large' && (
        <Box className={classes.avatar_wrapper}>
          <Avatar alt={alt} src={src} className={classes.large} />
          {flag && (
            <Avatar
              variant='square'
              src={flagsrc}
              className={classes.flag_large}
            />
          )}
        </Box>
      )}
      {size === 'xl' && (
        <Box className={classes.avatar_wrapper}>
          <Avatar alt={alt} src={src} className={classes.xl} />
          {flag && (
            <Avatar
              variant='square'
              src={flagsrc}
              className={classes.flag_xl}
            />
          )}
        </Box>
      )}
    </div>
  );
}
