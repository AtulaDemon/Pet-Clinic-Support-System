import React from 'react';
import {
  Container,
  makeStyles,
} from '@material-ui/core';\

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%'
  }
}));

const ServiceOrderHistoryView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Container>

        </Container>
    </div>
  );
};

export default ServiceOrderHistoryView;