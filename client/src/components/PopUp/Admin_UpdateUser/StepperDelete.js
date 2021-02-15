import React, {useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {deleteUserById} from '../../../redux/actions/getUsers'
import{useDispatch,useSelector} from 'react-redux'


export default function StepperDelete(props) {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(props.userID);
  const dispatch = useDispatch();




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    console.log('DELETE');
    dispatch(deleteUserById(userId));
    handleClose();
  };
  return (
    <div>
      <Button
        variant='contained'
        color='secondary'
        size='medium'
        startIcon={<DeleteOutlinedIcon />}
        onClick={handleClickOpen}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title' color='secondary'>
          {"You are going delete User"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            By deleting user, you will not delete User completly from Data, you will set him as Unactive User.You will still able to see him at 'All Users' menu. 
            User will be unable to login to the site! 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            Disagree
          </Button>
          <Button
            onClick={handleSubmit}
            variant='contained'
            color='secondary'
            size='medium'
          >
            Delete User
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
