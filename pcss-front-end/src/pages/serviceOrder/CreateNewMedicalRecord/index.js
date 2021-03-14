import React from 'react';

import {
  Container,
  makeStyles,
} from '@material-ui/core';

import PetInformation from './PetInformationComponent';
import MedicalServiceMenu from './MedicalServiceMenuComponent';
import MedicalInformation from './MedicalInformationComponent';
import VNLABELS from 'resources/vnlabels';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    minHeight: '100%'
  },
});

const mapStateToProps = state => {
    return {
      customers: state.customers
    }
  }
  
  const CreateNewMedicalRecord = () => {
  
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Container maxWidth={false}>
            
        </Container>
      </div>
    );
  };
  
  export default withRouter(connect(mapStateToProps)(CreateNewMedicalRecord));