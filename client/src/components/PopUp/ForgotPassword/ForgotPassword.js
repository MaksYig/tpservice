import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import Input from '../../Input/Input';
import makeStyles from './styles';

export default function Login(props) {
  const classes = makeStyles();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <div>
      <Button color='inherit' onClick={handleClickOpen}>
        Forgot password ? 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Forgot Password</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.DialogContent}>
            To Reset your password, please type you Email address. We will send you Email with reset password Token.
          </DialogContentText>
          <Input
            name='email'
            label='Email Address '
            type='email'
            handleChange={handleChange}
            autofocus
          />
        </DialogContent>
        <DialogActions className={classes.dialogFooter}>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            endIcon={<Send />}
            onClick={handleClose}
          >
            Send Email
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
