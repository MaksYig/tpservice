import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  TabPanel: {
    paddingTop: 15,
    paddingBottom: 25,
  },
  AdminIcon:{
    color: red[400]
  }
}));
