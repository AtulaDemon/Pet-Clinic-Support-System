import React, { Component } from 'react';
import { Container, makeStyles, Typography,
    Card,
    CardContent,
    CardHeader,
    Button,
    Box,
    Divider,
    Grid,
    TextField,
    TextareaAutosize,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Toolbar from './Toolbar';
import ServiceMenu from './ServiceMenuComponent';
import VNLABELS from 'resources/vnlabels';

const mapStateToProps = state => {
    return {
      customers: state.customers
    }
  }


class CreateNewService extends Component {
    render() {
        return (
            <div title="Customers">
            <Container maxWidth={false}>
              <Toolbar/>
                <ServiceMenu/>
            </Container>
          </div>
        );
    }
};

export default withRouter(connect(mapStateToProps)(CreateNewService));