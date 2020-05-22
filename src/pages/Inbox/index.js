import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../template/layout';
import ErrorAlert from '../../components/alert/error';
import Settings from './components/settings';
import ListenCard from './components/card';

import api from '../../services/api';
import { connect, disconnect, getMessage } from '../../services/websocket';

const useStyles = makeStyles((theme) => ({
  main: {
    marginBottom: theme.spacing(2),
  }
}));

export default function Listen() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [requests, setRequests] = useState([]);
  const [requestTemp, setRequestTemp] = useState([]);
  const [showLoadPage, setShowLoadPage] = useState(true);

  const classes = useStyles();
  const { token } = useParams();

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  useEffect(() => {
    disconnect();
    connect(token);

    api.get(`/c/${token}`)
      .then(response => {
        setRequests(response.data.data);
        setShowLoadPage(false);
      })
      .catch(error => {
        setErrorMessage(error.toString());
        setShowLoadPage(false);
        handleOpenAlert();
      });
  }, []);

  useEffect(() => {
    getMessage('new-request', data => {
      setRequestTemp(data);
      setShowLoadPage(true);
    });
  }, []);

  useEffect(() => {
    setRequests([requestTemp, ...requests]);
    setShowLoadPage(false);
  }, [requestTemp]);

  return (
    <Layout showLoadPage={showLoadPage}>
      <main className={classes.main}>
        <Settings token={token} />
        {requests.map((request, i) => (
          <ListenCard key={i} data={request} />
        ))}
      </main>
      <ErrorAlert
        description={errorMessage}
        open={openAlert}
        onClose={handleCloseAlert}
      />
    </Layout>
  );
}
