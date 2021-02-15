import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {},
  DialogContent: {
    marginBottom: theme.spacing(2.6),
  },
  dialogFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: theme.spacing(2.6),
  },
}));
