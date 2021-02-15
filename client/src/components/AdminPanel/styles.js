import { makeStyles } from '@material-ui/core/styles';
import {red,green} from '@material-ui/core/colors'

export default makeStyles((theme) => ({
  root: {},
  Paper: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingRight: 20,
    borderRadius: 5,
    background: 'transparent',
  },
  total: {
    fontWeight: 600,
  },
  active: {
    color: green[600],
    fontWeight: 600,
  },
  unactive: {
    color: red[600],
    fontWeight: 600,
  },
}));