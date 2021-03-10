import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
// import Profile from './Profile';
import ProductDetails from './ProductDetails';

const useStyles = makeStyles(({
  root: {
    minHeight: '100%',
  }
}));

const ProductDetailsView = () => {
  const classes = useStyles();

  return (
      <Container maxWidth="lg"  className={classes.root}>
       
            <ProductDetails />
    

      </Container>
  );
};

export default ProductDetailsView;
