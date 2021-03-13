import React from 'react';
import {
  Box,
  Container,
  makeStyles,
} from '@material-ui/core';
import InvoiceTable from './InvoiceTable';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%'
  }
}));

const SalesInvoiceList = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <InvoiceTable />
        </Box>
      </Container>
    </div>
  );
};

export default SalesInvoiceList;
