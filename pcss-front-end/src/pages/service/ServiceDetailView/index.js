import React from 'react';
import { Container, makeStyles, Box} from '@material-ui/core';

import ServiceDetail from './ServiceDetail';
import ServicePrice from './ServicePrice';

const useStyles = makeStyles({
    root: {
        minHeight: '100%'
    },
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    }
});

const ServiceDetailView = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={false}>
            <ServiceDetail className={classes.root}/>
            <Box  mt={1} >
            <ServicePrice/>
            </Box>
        </Container>
    );
};

export default ServiceDetailView;