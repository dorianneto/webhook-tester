import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Layout from '../../template/layout';
import ErrorAlert from '../../components/alert/error';

import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  main: {
    marginBottom: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
}));

export default function Home() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [showLoadPage, setShowLoadPage] = useState(false);

  const history = useHistory();
  const classes = useStyles();

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  async function handleGenerateEndpoint(e) {
    e.preventDefault();

    try {
      setShowLoadPage(true);

      const response = await api.post('/hooks');

      history.push({
        pathname: `/in/${response.data.token}`,
        state: { webhookGenerated: true }
      });
    } catch (error) {
      setErrorMessage(error.toString());
      setShowLoadPage(false);
      handleOpenAlert();
    }
  }

  return (
    <Layout showLoadPage={showLoadPage}>
      <main className={classes.main}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Webhook Tester
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Generate a unique URL and be able to debug as many as HTTP requests you need from any provider in real-time, through a clean and focused in what matters interface.
            </Typography>
            <div className={classes.heroButtons}>
              <Button onClick={handleGenerateEndpoint} variant="contained" color="primary" size="large">
                Generate Webhook
              </Button>
            </div>
          </Container>
        </div>
      </main>
      <ErrorAlert
        description={errorMessage}
        open={openAlert}
        onClose={handleCloseAlert}
      />
    </Layout>
  );
}
