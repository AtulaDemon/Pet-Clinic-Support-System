import React from 'react';
import {
  Box,
  Container,
  makeStyles,
} from '@material-ui/core';
import EnhancedTable from './EnhancedTable';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%'
  }
}));

const ServiceListView = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <EnhancedTable />
        </Box>
      </Container>
    </div>
  );
};

export default ServiceListView;