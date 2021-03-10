import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import ProductPhotos from './ProductPhotos';
import ProductDetails from './ProductDetails';

const useStyles = makeStyles({
    root: {
        minHeight: '100%'
    },
    margin: {
        marginTop: '10px'
    }
});

const ProductDetailsView = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <ProductDetails />
        {/* map to loop photos */}
            <Grid container spacing={3} className={classes.margin}>
                <Grid item lg={3} md={3} xs={12}>
                    <ProductPhotos />
                </Grid>
                <Grid item lg={3} md={3} xs={12}>
                    <ProductPhotos />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductDetailsView;
