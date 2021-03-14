import React from 'react';
import { Container, makeStyles, } from '@material-ui/core';
import ModifyProductForm from './EditProductForm';
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
            <ModifyProductForm />
        </Container>
    );
};

export default ProductDetailsView;
