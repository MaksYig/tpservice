import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  Dialog__title: {
    textTransform: 'uppercase',
  },
  Stepper: {
    width: '100%',
    padding: 15,
  },
  stepper__header: {
    padding: 0,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  instructions__complete: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    color: green[500],
    fontWeight: 600,
    fontSize: 18,
  },

  button: {
    margin: theme.spacing(1),
  },
}));
