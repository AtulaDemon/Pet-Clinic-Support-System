import React from 'react';
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
import VNLabels from '../../../resources/vnlabels';
import EmployeeDetailComponent from './EmployeeDetailComponent';
const employeeDetailView = () => {
    return ( 
        <div title="Create new Employee">
        <Container maxWidth={false}>
          <EmployeeDetailComponent/>
        </Container>
      </div>
     );
}
 
export default employeeDetailView;
