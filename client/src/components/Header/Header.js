import React from 'react';

import{Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar/NavBar'
import './Header.scss';

export default function Header() {
  const classes = makeStyles();
  return (
    <NavBar/>
  )
    
  
}
