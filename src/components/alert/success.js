import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

export default function SuccessAlert(props) {
  const { description, open, onClose } = props;

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={onClose}
      >
        <Alert onClose={onClose} severity="success">
          {description}
        </Alert>
      </Snackbar>
    </>
  );
}
