import React from 'react';
import { Container, makeStyles, } from '@material-ui/core';
import ProductForm from './ProductForm';
const useStyles = makeStyles({
    root: {
        minHeight: '100%'
    },
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    headTitle: {
      marginBottom: '50px',
    }
});

const ProductDetailsView = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <ProductForm />
        </Container>
    );
};

export default ProductDetailsView;
