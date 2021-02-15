import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Tour from './Tour/Tour';
import {Container, Grid} from '@material-ui/core'
import {getAllTours} from '../../redux/actions/tours'

import makeStyles from './styles';
function Tours(props) {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const tours = useSelector((state)=> state.tours.tours)

  useEffect(() => {
    dispatch(getAllTours());
  }, []);


  return (
    <Container className={classes.root}>
      <Grid container justify='space-between' alignItems='stretch' spacing={3}>
        <Tour/>
      </Grid>
    </Container>
  );
}

export default Tours

