import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 170,
  },
  CardContent: {
    position: 'relative',
  },
  Rating: {
    position: 'absolute',
    right: 10,
    top: 7,
  },
  RatingStars: {
    fontSize: 16,
  },
  card__row: {
    display: 'flex',
  },
  ListItem: {
    fontSize: 10,
  },
  Avatar: {
    width: 25,
    height: 25,
  },
  Icon: {
    width: '0.6em',
    height: '0.6em',
  },
  ListItemAvatar: {
    minWidth: 30,
  },
  Typography: {
    fontSize: '0.8em',
    fontWeight: 600,
  },
  ListItem: {
    padding: '7px 12px',
  },
  ListItemPrice: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 5,
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    backgroundColor: theme.palette.info.light,
    paddingLeft: 16,
    paddingRight: 5,
  },
  euroIcon: {
    fontSize: 18,
    display: 'flex',
  },
  TypographyPrice: {
    fontSize: 20,
    fontWeight: 600,
  },
  ListItemAvatarPrice: {
    minWidth: 16,
  },
  TypographyPriceSpan: {
    fontSize: 9,
    fontWeight: 500,
    color: '#636e72',
    textTransform: 'uppercase',
  },
  tourName: {
    fontWeight: 600,
  },
  AdminTours_container: {
    marginTop: 20,
  },
  adminHeaderCell: {
    fontSize: '10px',
    padding: 5,
    textAlign: 'center',
  },
  adminCell: {
    fontSize: '0.8em',
    padding: 5,
    textAlign: 'center',
  },
}));
