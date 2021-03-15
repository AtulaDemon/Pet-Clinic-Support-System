import {
    Box,
    Container,
    makeStyles
  } from '@material-ui/core';
  import React from 'react';
  import EnhancedTable from './EnhancedTable';
  import Toolbar from './Toolbar';
  const useStyles = makeStyles((theme) => ({
    root: {
    }
  }));
const EmployeeListView = () => {
    const classes = useStyles();
    return (  
    <div  className={classes.root}
        title="Employee"
      >
         <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <EnhancedTable />
        </Box>
      </Container>

      </div> 
      );
}
 
export default EmployeeListView;