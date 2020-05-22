import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Layout from '../../template/layout';

const useStyles = makeStyles((theme) => ({
  main: {
    marginBottom: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Layout>
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              <strong>Webhook Tester</strong> is an application with a clean interface and focused on what matters, whose main goal is to make debuging Webhooks easier, it doesn't matter the service you are using.
            </Typography>
          </Container>
        </div>
      </main>
    </Layout>
  );
}
