import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    marginTop: 15,
    marginBottom:15,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 600,
    color: theme.palette.action.disabledBackground,
  },
}));
