import React from 'react';
import {
    makeStyles, Typography,
    Button,
    ListItem,
    Box,
    List,
    TextField,
    MenuItem,
} from '@material-ui/core';
import VNLABELS from 'resources/vnlabels';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        '& > *': {
            margin: theme.spacing(0.5),
        },

    },
    label: {
        width: '15ch',
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    input: {
        width: '45ch',
    },
    button: {
        width: 'auto',
        '& > *': {
            margin: theme.spacing(0.5),
        },

        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

}));
const information = {
    name: 'Phạm Quốc A',
    id: '354616213',
    email: 'Phamquoca@gmail.com',
    phone: '0932326565',
    status: 'Working',
}
const positions = [
    {
        value: 'doctor',
        label: 'Doctor',
    },
    {
        value: 'janitor',
        label: 'Janitor',
    },
    {
        value: 'spa',
        label: 'Spa',
    },
];
const EditEmployeeComponent = () => {
    const [position, setPosition] = React.useState('doctor');

    const handleChange = (event) => {
        setPosition(event.target.value);
    };

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
                            className={classes.input}
                            variant='outlined'
                            defaultValue={information.name}
                        />
                        {/* <TextField disabled id='test' className={classes.input} label={VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_FULLNAME} variant="outlined"/> */}
                    </ListItem>
                    <ListItem className={classes.root} noValidate autoComplete="off">
                        <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_ID}</Typography>
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            defaultValue={information.id}
                        />
                    </ListItem>
                    <ListItem className={classes.root} noValidate autoComplete="off">
                        <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_EMAIL}</Typography>
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            defaultValue={information.email}
                        />
                    </ListItem>
                    <ListItem className={classes.root} noValidate autoComplete="off">
                        <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_PHONE}</Typography>
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            defaultValue={information.phone}
                        />
                    </ListItem>
                    <ListItem className={classes.root} noValidate autoComplete="off">
                        <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_STATUS}</Typography>
                        <TextField
                            className={classes.input}
                            variant='outlined'
                            defaultValue={information.status}
                            InputProps={{
                                readOnly: true
                            }}
                        />
                    </ListItem>
                    <ListItem className={classes.root} noValidate autoComplete="off">
                        <Typography variant="h6" className={classes.label}>{VNLABELS.LABEL_HR_ADD_NEW_EMPLOYEE_POSITION}</Typography>
                        <TextField
                        id="filled-select-currency"
                            select
                            className={classes.input}
                            variant='outlined'
                            value={position}
                            onChange={handleChange}
                        >
                        {positions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}</TextField>
                    </ListItem>
                </List>
                <Box display='flex' className={classes.button} p={2}>
                    <Button variant="contained" color="primary">
                        {VNLABELS.LABEL_LINK_BUTTON_EDIT}
                    </Button>
                    <Button variant="contained" color="primary">
                        {VNLABELS.LABEL_LINK_BUTTON_DISABLE}
                    </Button>
                </Box>
            </div>
        </div>
    );
}

export default EditEmployeeComponent;