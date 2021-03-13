import React from 'react';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import ProductPhotos from './ProductPhotos';
import ProductDetails from './ProductDetails';
import VNLABELS from 'resources/vnlabels';
import ProductInventoryTable from './ProductInventoryTable';
const useStyles = makeStyles({
    root: {
        minHeight: '100%'
    },
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    headTitle: {
        marginBottom: '50px'
    }
});

const ProductDetailsView = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <Typography variant='h5' component='div' className={classes.headTitle}>
                {VNLABELS.LABEL_INVENTORY_PRODUCT_DETAIL}
            </Typography>
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
            <ProductInventoryTable />
        </Container>
    );
};

export default ProductDetailsView;
