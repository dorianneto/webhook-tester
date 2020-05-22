import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SuccessAlert from '../../../components/alert/success';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    zIndex: 99,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  grid: {
    alignItems: 'center',
  },
  help: {
    fontStyle: 'italic',
    fontSize: '0.7rem'
  }
}));

export default function Settings({ token }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const classes = useStyles();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const copyToClipboard = (e) => {
    e.preventDefault();

    const selector = document.getElementById('copy-webhook-target');
    selector.focus();
    selector.select();

    document.execCommand('copy');

    handleOpenAlert();
  };

  return (
    <>
      <Fab onClick={handleOpenDialog} className={classes.fab} color="primary">
        <SettingsIcon />
      </Fab>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title">Settings</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>Payload URL:</Typography>
            <Grid container spacing={1} className={classes.grid}>
              <Grid item xs={10}>
                <TextField
                  id="copy-webhook-target"
                  className={classes.margin}
                  value={`${process.env.REACT_APP_API_URL}/c/${token}`}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={2}>
                <IconButton>
                  <FileCopyIcon color="default" onClick={copyToClipboard} />
                </IconButton>
              </Grid>
            </Grid>
            <Typography className={classes.help}>This webhook expires in 24h right after you generated it.</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <SuccessAlert
        description="Copied successfully!"
        open={openAlert}
        onClose={handleCloseAlert}
      />
    </>
  );
}
