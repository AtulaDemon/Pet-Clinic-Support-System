import React from 'react';
import { Container, } from '@material-ui/core';
import EmployeeDetailComponent from './EmployeeDetailComponent';

const employeeDetailView = () => {

    return ( 
        
        <Container maxWidth='lg'>
          <EmployeeDetailComponent/>
        </Container>
      
     );
}
 
export default employeeDetailView;
