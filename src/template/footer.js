import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import packageJson from '../../package.json'
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      Webhook Tester v{packageJson.version} {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
  favoriteIcon: {
    position: 'relative',
    top: 3
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Built with <FavoriteIcon fontSize="small" color="secondary" className={classes.favoriteIcon} /> by <Link href="https://dorianneto.com.br/" target="_blank">Dorian Neto</Link>
      </Typography>
      <Copyright />
    </footer>
  );
}
