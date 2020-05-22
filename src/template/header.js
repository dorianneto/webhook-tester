import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    display: 'inline-flex',
    verticalAlign: 'middle'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="default" elevation={1} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton component={RouterLink} to="/" edge="start" color="inherit" aria-label="menu">
          <HomeIcon />
        </IconButton>
        <nav>
          <Link component={RouterLink} to="/about" variant="button" color="textPrimary" className={classes.link}>
            About
          </Link>
          <Link component={RouterLink} to="/contact" variant="button" color="textPrimary" className={classes.link}>
            Contact
          </Link>
          <Link href="https://stats.uptimerobot.com/Q18BMT6Nom" target="_blank" variant="button" color="textPrimary" className={classes.link}>
            <Hidden xsDown><OpenInNewIcon fontSize="small" style={{ marginRight: 3 }} /></Hidden> Status
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
