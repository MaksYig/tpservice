import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import StepperMComp from './StepperUpdate';
import makeStyles from './style';
import SyncOutlinedIcon from '@material-ui/icons/SyncAltOutlined';
import { getUserById } from '../../../redux/actions/getUsers';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const classes = makeStyles();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.getUsers);

  const handleClickOpen = (props) => {
    dispatch(getUserById(users.users, userId));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setUserId(props.userID);
  }, [users]);

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        className={classes.button}
        variant='contained'
        color='primary'
        size='medium'
        startIcon={<SyncOutlinedIcon />}
      >
        Update
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.root}
        aria-labelledby='form-dialog-title'
        fullWidth
      >
        <DialogTitle className={classes.Dialog__title}>Update User</DialogTitle>
        <StepperMComp setClose={handleClose} />
      </Dialog>
    </div>
  );
}
