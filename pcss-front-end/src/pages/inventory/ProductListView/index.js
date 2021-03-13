import React from 'react';
import {
  Box,
  Container,
  makeStyles,
  Typography
} from '@material-ui/core';
import EnhancedTable from './EnhancedTable';
import VNLABELS from 'resources/vnlabels';
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
        <Typography variant="h5" component="div" className={classes.headTitle}>
          {VNLABELS.LABEL_INVENTORY_PRODUCT_LIST}
        </Typography>
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
