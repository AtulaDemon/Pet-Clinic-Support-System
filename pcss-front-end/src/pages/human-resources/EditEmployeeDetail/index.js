import React from 'react';
import { Container, makeStyles, } from '@material-ui/core';
import EditEmployeeComponent from './EditEmployeeComponent'

const useStyles = makeStyles((theme) => ({
    
    root: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    }
  }));
const EditEmployeeDetail = () => {
    const classes = useStyles();
    return ( 
        <Container maxWidth='lg' className={classes.root}>
            <EditEmployeeComponent/>
        </Container>
     );
}
 
export default EditEmployeeDetail;