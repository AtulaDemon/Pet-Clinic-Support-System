import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import VNLABELS from 'resources/vnlabels';
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
            <Typography variant='h5' component='div' className={classes.headTitle}>
                {VNLABELS.LABEL_INVENTORY_ADD_NEW_PRODUCT}
            </Typography>
            <ProductForm />
        </Container>
    );
};

export default ProductDetailsView;
