import React from 'react';
import {
  Container,
  makeStyles,
  Box,
  Button
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Toolbar from './Toolbar';
import ServiceMenu from './ServiceMenuComponent';
import MedicalMenu from './MedicalMenuComponent';
import ServiceSchedule from './ServiceScheduleComponent';
import VNLABELS from 'resources/vnlabels';

const useStyles = makeStyles({
  root: {
    minHeight: '100%'
  },
  button: {
    width: 130,
    height: 70
  }
});

const mapStateToProps = state => {
  return {
    customers: state.customers
  }
}

const CreateNewService = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <Toolbar className={classes.root} />
        <Box mt={3}>
          <ServiceMenu className={classes.root} />
        </Box>
        <Box mt={3}>
          <MedicalMenu className={classes.root} />
        </Box>
        <Box mt={3}>
          <ServiceSchedule className={classes.root} />
        </Box>
        <Box display='flex' justifyContent='flex-end' p={3}>
          <Button className={classes.button} color='primary' variant='contained'>
            Tạo
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(CreateNewService));