import { createStyles } from '@material-ui/core';
import { theme } from './theme';

export const styles = () => createStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background,
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  navHeader: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: theme.spacing[1],
    padding: '2rem',
  },
  navText: {
    textDecoration: 'none',
    color: theme.palette.black,
    padding: 4,
    transform: 'translate(-2px, 0px)',
    transition: 'all 300ms ease-out',
    '&:hover': {
      color: theme.palette.darkBlueGreen,
      transform: 'translate(2px, 0px)',
      transition: 'all 300ms ease-out',
    },
  },
  icons: {
    display: 'flex',
    width: '10vh',
    justifyContent: 'space-between',
  },
  iconHover: {
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&:hover': {
      transform: 'translate(0px, -7px)',
      transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
  },
  index: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    height: '350px',
    margin: '20px',
    boxShadow: 'none',
    borderRadius: '15px',
    backgroundColor: theme.palette.background,
    fontSize: theme.spacing[0],
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    '&:hover': {
      boxShadow: theme.cardShadow,
      transform: 'translate(0px, -7px)',
      transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
    '& .cardContent': {
      padding: '1rem 1rem 0rem 1rem',
      transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
      overflow: 'hidden',
    },
    '& .cardHidden': {
      transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
      visibility: 'hidden',
      height: 0,
      overflow: 'hidden',
    },
    '&:hover .cardContent': {
      transform: 'translate(0px, -1px)',
      transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
    },
    '&:hover .cardHidden': {
      transform: 'translate(0px, -1px)',
      transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
      visibility: 'visible',
      height: 'auto',
    },
  },
  cardImage: {
    width: '100%',
    height: '240px',
  },
  cardContent: {
    padding: '1rem 1rem 0rem 1rem',
  },
  articleRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing[6],
  },
  articleContent: {
    fontSize: theme.spacing[1],
    maxWidth: '60%',
    textAlign: 'justify',
  },
  byline: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: theme.spacing[0],
    textDecoration: 'none',
  },
});
