import React, { Component } from 'react';
import { Container, makeStyles, Typography,
    Card,
    CardContent,
    CardHeader,
    Button,
    ListItem,
    Box,
    List,
    TextField, } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import VNLABELS from 'resources/vnlabels';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
      '& > *': {
        margin: theme.spacing(1),
      },

    },
    label:{
        width: '15ch',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    input:{
        width: '35ch',
    },
    button:{
        width: 'auto',
        '& > *': {
            margin: theme.spacing(1),
          },
        // marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },

  }));

const InputComponent = () => {
    const classes = useStyles();
    return ( 
        <div>
            <Typography variant="h5" className={classes.title}>
                    Create new Employee
                    </Typography>
                    <div>
                        <List >
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_FULLNAME}</Typography>
                                <TextField id='test' className={classes.input} label={VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_FULLNAME} variant="outlined"/>
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_ID}</Typography>
                                <TextField id='test' className={classes.input} label={VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_ID} variant="outlined"/>
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_EMAIL}</Typography>
                                <TextField id='test' className={classes.input} label={VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_EMAIL} variant="outlined"/>
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_PHONE}</Typography>
                                <TextField id='test' className={classes.input} label={VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_PHONE} variant="outlined"/>
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_STATUS}</Typography>
                                <TextField id='test' className={classes.input} label={VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_STATUS} variant="outlined"/>
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_POSITION}</Typography>
                                <TextField id='test'className={classes.input} label={VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_POSITION} variant="outlined"/>
                            </ListItem>
                        </List>
                        <Box display='flex' className={classes.button} p={2}>
                            <Button  variant="contained" color="primary">
                                {VNLABELS.LABEL_LINK_BUTTON_ADD}
                            </Button>
                            <Button  variant="contained" color="primary">
                                {VNLABELS.LABEL_LINK_BUTTON_CANCEL}
                            </Button>
                        </Box>
                </div>
        </div> 
     );
}
 
export default InputComponent;