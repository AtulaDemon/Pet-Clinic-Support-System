import React from 'react';
import {Container, Grid, makeStyles } from '@material-ui/core';
import CreateCustomerComponent from './CreateCustomerComponent';
import CreatePetComponent from './CreatePetComponent';
const useStyles = makeStyles((theme) =>({
    layout:{
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },
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

const CreateCustomerAccount = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg' >
            <Grid container className={classes.layout} direction="column" >
                <Grid className={classes.card}>
                    <CreateCustomerComponent/>
                </Grid>
                <Grid className={classes.card}>
                    <CreatePetComponent/>
                </Grid>
            </Grid>
        </Container>
    
     );
}
 
export default CreateCustomerAccount;