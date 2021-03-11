import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';

import ProductForm from './ProductForm';
const useStyles = makeStyles({
    root: {
        minHeight: '100%'
    },
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    }
});

const ProductDetailsView = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <ProductForm />  
{/*  
            <ProductInventoryTable /> */}

        </Container>
    );
};

export default ProductDetailsView;
