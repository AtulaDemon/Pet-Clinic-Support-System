import React from 'react';
import clsx from 'clsx';
import 'date-fns';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import {
    Card,
    Box,
    TextField,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const useStyles = createUseStyles((theme) => ({
    root: {},
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        padding: '24px 32px 0px 32px',
        height: '100%'
    },
    containerMobile: {
        padding: '12px 16px 6px 16px !important'
    },
    itemContainer: {
        margin: 10,
        paddingLeft: 30,
        paddingBottom: 4,
        paddingTop: 4,
        borderBottom: `1px solid ${theme.color.lightGrayishBlue2}`,
        '&:last-child': {
            borderBottom: 'none'
        }
    },
    button: {
        width: '160px',
        height: '80px'
    },
    title: {
        marginBottom: 10,
        ...theme.typography.cardTitle,
        color: theme.color.veryDarkGrayishBlue
    },
    formControl: {
        minWidth: '180px',
    },
    selectEmpty: {
        marginTop: '20px'
    }
}));

const intervals = [
    { id: 1, value: '8h-9h' },
    { id: 2, value: '9h-10h' },
    { id: 3, value: '10h-11h' }
];

function ServiceSchedule({ className, ...rest }) {

    const theme = useTheme();
    const classes = useStyles({ theme });

    const [interval, setInterval] = React.useState({
        value: '8h-9h'
    });
    const handleChange = (event) => {
        setInterval({
            ...intervals,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Card className={clsx(classes.root, className)} {...rest}>
            <Column
                className={classes.container}
                breakpoints={{ 426: classes.containerMobile }}
            >
                <Box>
                    <div className={classes.title}>Đặt lịch khám</div>
                </Box>
            </Column>
            <Column>
                <Grid container spacing={1}>
                    <Grid item item md={3} xs={3}>
                        <Box p={3} pl={4}>
                            <TextField
                                fullWidth
                                id="date"
                                label="Chọn ngày"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item item md={3} xs={3}>
                        <Box pl={2}>
                            <TextField
                                fullWidth
                                margin='normal'
                                label='Chọn Time'
                                name='scheduleInterval'
                                onChange={handleChange}
                                required
                                select
                                SelectProps={{ native: true }}
                                value={intervals.id}
                                variant='outlined'
                            >
                                {intervals.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.value}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                </Grid>
            </Column>
        </Card >
    );
}

export default ServiceSchedule;