import React from 'react';
import { ListItem, ListItemIcon, Grid, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import makeStyles from './styles';

export const ListItemComp = (props) => {
  const classes = makeStyles();
  return (
    <ListItem button className={classes.ListItem}>
      <ListItemIcon className={classes.ListItemIcon}>
        <Grid item>
          <Tooltip title={props.title} placement='right'>
            <Link to={props.link}>
              {props.children}
            </Link>
          </Tooltip>
        </Grid>
      </ListItemIcon>
    </ListItem>
  );
};
export default ListItemComp;
