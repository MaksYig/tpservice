import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar_wrapper: {
    position: 'relative',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    position: 'relative',
  },
  medium: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    position: 'relative',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    position: 'relative',
  },
  xl: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    position: 'relative',
  },
  flag_medium: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    maxWidth: 25,
    maxHeight: 25,
  },
  flag_large: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    maxWidth: 35,
    maxHeight: 35,
  },
  flag_xl: {
    position: 'absolute',
    bottom: -10,
    right: -10,

  },
}));
