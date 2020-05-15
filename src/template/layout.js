import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fade from '@material-ui/core/Fade';

import Header from './header';
import Footer from './footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export default function Layout(props) {
  const { showLoadPage } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Fade in={showLoadPage}>
        <LinearProgress />
      </Fade>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
