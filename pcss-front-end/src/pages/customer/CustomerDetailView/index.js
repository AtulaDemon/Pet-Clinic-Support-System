import React from 'react';
import {Container, Grid, makeStyles } from '@material-ui/core';
import CustomerDetailComponent from './CustomerDetailComponent';
import EnhancedTable from './EnhancedTable'
const useStyles = makeStyles((theme) =>({
    root: {
        minHeight: '100%'
    },
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    card:{
        padding:'1ch',
    },
}));
const CustomerDetailView = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg' >
            <Grid container className={classes.root} direction="column">
                <Grid className={classes.card}>
                    <CustomerDetailComponent />
                </Grid>
                <Grid className={classes.card} direction="column">
                    <EnhancedTable></EnhancedTable>
                   
                </Grid>
            </Grid>
        </Container>
    );
}

export default CustomerDetailView;