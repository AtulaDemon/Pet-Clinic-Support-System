import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import CustomerTable from './CustomerTable';
// import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    // minHeight: '100%',
    // paddingBottom: theme.spacing(3),
    // paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mt={3}>
          <CustomerTable />
          {/* <CollapsibleTable /> */}
        </Box>
      </Container>
    </div>
  );
};

export default CustomerListView;
