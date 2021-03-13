import React from 'react';
import {
  Box,
  Container,
  makeStyles,
} from '@material-ui/core';
import CollapsibleTable from './CollapsibleTable';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%'
  },
  headTitle: {
    marginBottom: '50px',
  }
}));

const ProductListView = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          {/* <EnhancedTable /> */}
          <CollapsibleTable />
        </Box>
      </Container>
    </div>
  );
};

export default ProductListView;
