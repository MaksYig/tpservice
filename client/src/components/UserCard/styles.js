import { makeStyles } from '@material-ui/core/styles';
import { red,green } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
  root: {
    maxWidth: 325,
    position: 'relative',
  },
  active: {
    position: 'absolute',
    top: 0,
    right: 1,
    color: green[400],
  },
  unactive: {
    position: 'absolute',
    top: 1,
    right: 2,
    color: red[400],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  subheader: {
    fontSize: 10,
    marginRight: 5,
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  tableFirst: {
    fontSize: 13,
    fontWeight: 600,
    padding: 6,
    color: theme.palette.text.secondary,
  },
  tableSecond: {
    fontSize: 14,
    padding: 6,
    color: theme.palette.text.primary,
  },
  button: {
    margin: theme.spacing(1),
  },
  CardActions: {
    justifyContent: 'center',
  },
  flag: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  TableRow: {
    lineHeight: 10,
  },
  progress: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
      
    },
    marginTop:0,
    marginBottom:0,
    marginRight:'auto',
    marginLeft:'auto',
  },
}));
