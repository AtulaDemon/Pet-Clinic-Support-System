import React from 'react';
import { makeStyles, Typography,
    Button,
    ListItem,
    Box,
    List,
    TextField, } from '@material-ui/core';
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
       
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },

  }));
const information ={
name: 'Phạm Quốc A',
id: '354616213',
email:'Phamquoca@gmail.com',
phone:'0932326565',
status:'Working',
position:'Doctor'
}
// const [values, setValues] = useState({
//     firstName: 'Katarina',
//     lastName: 'Smith',
//     email: 'demo@devias.io',
//     phone: '',
//     state: 'Alabama',
//     country: 'USA'
// });

const EmployeeDetailComponent = () => {
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
                                <TextField
                                variant='outlined'
                                defaultValue={information.name}
                                InputProps={{
                                readOnly: true
                            }}/>
                                {/* <TextField disabled id='test' className={classes.input} label={VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_FULLNAME} variant="outlined"/> */}
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_ID}</Typography>
                                <TextField
                                variant='outlined'
                                defaultValue={information.id}
                                InputProps={{
                                readOnly: true
                            }}/>
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_EMAIL}</Typography>
                                <TextField
                                variant='outlined'
                                defaultValue={information.email}
                                InputProps={{
                                readOnly: true
                            }}/>
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_PHONE}</Typography>
                                <TextField
                                variant='outlined'
                                defaultValue={information.phone}
                                InputProps={{
                                readOnly: true
                            }}/>
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_STATUS}</Typography>
                                <TextField
                                variant='outlined'
                                defaultValue={information.status}
                                InputProps={{
                                readOnly: true
                            }}/>
                            </ListItem>
                            <ListItem className={classes.root} noValidate autoComplete="off">
                                <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_POSITION}</Typography>
                                <TextField
                                variant='outlined'
                                defaultValue={information.position}
                                InputProps={{
                                readOnly: true
                            }}/>
                            </ListItem>
                        </List>
                        <Box display='flex' className={classes.button} p={2}>
                            <Button  variant="contained" color="primary">
                                {VNLABELS.LABEL_LINK_BUTTON_EDIT}
                            </Button>
                            <Button  variant="contained" color="primary">
                                {VNLABELS.LABEL_LINK_BUTTON_DISABLE}
                            </Button>
                        </Box>
                </div>
        </div> 
     );
}
 
export default EmployeeDetailComponent;