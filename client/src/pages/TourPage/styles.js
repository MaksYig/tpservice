import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    Width: '100%',
  },
 
  paper: {
    padding: '6px 16px',
    textAlign: 'center',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
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
  CardActionArea: {
    background: 'linear-gradient(to right, #2193b0, #6dd5ed)',
  },
  headerImg: {
    position: 'relative',
  },
  headerBox: {
    position: 'absolute',
    top: '10%',
    width: '100%',
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'none',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerUptitle: {
    textTransform: 'uppercase',
    fontWeight: 500,
    marginBottom: 25,
  },
  headerTitle: {
    fontWeight: 600,
    textTransform: 'uppercase',
    marginBottom: 35,
  },
  headerButton: {
    marginTop: 20,
  },

  headerSubIconsBox: {},
  header__text: {
    fontWeight: 500,
  },
  aboutContainer: {
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  CardContent: {
    padding: 0,
  },
  titleInfo: {
    marginBottom: 20,
  },
  ListItemAvatar: {
    minWidth: 40,
  },
  time: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 500,
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  map: {
    height: '100%',
  },
  marker: {
    // transform: 'translate(-50%,-100%)',
  },
  marker_info: {
    padding: '5px 10px',
    backgroundColor: green[600],
    color: 'white',
    opacity: 0.6,
    borderRadius: 5,
    marginLeft: 20,
  },
  subinfoConteiner: {
    padding: '30px 5px',
  },
  pictureConteiner: {
    padding: '30px 5px',
  },
  CardActions: {
    padding: '30px 5px',
  },
}));
