import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';

import Layout from '../../template/layout';

const useStyles = makeStyles((theme) => ({
  main: {
    marginBottom: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  socialButtons: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Layout>
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Do you want to talk about an error, a new feature, or even talk about a business opportunity?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Feel free to get in touch through these links:
            </Typography>
            <div className={classes.socialButtons}>
              <IconButton href="https://github.com/dorianneto" target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/dorianneto" target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://dorianneto.com.br/" target="_blank">
                <LanguageIcon />
              </IconButton>
            </div>
          </Container>
        </div>
      </main>
    </Layout>
  );
}
