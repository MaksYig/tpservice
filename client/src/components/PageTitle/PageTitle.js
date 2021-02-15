import React from 'react'
import {Typography,Grid,Container} from '@material-ui/core'
import makeStyles from './styles';

export  const PageTitle =(props) =>{
  const classes = makeStyles();
  return (
    <Container>
      <Typography className={classes.root}>{props.children}</Typography>
    </Container>
  )
}

export default PageTitle;