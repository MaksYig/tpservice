import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {},
  title: {
    marginRight: theme.spacing(2),
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  userNavPanel: {
    display: 'flex',
    userNavPanelLink: {
      display: 'flex',
      align:'center'
    },
    avatar: {
      margin: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
