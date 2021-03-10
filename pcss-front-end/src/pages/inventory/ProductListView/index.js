import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import EnhancedTable from './EnhancedTable';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    // minHeight: '100%',
    // paddingBottom: theme.spacing(3),
    // paddingTop: theme.spacing(3)
  }
}));

const ProductListView = () => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      title="Customers"
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

export default ProductListView;
