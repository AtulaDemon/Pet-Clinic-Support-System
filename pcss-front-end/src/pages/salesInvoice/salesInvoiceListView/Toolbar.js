import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
    makeStyles} from '@material-ui/core';
import VNLABELS from 'resources/vnlabels';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
    root: {},
    button: {
        marginRight: '10px'
    }
}));

const states = [
    {
        value: 'alabama',
        label: 'Alabama'
    },
    {
        value: 'new-york',
        label: 'New York'
    },
    {
        value: 'san-francisco',
        label: 'San Francisco'
    }
];

const Filter = () => {
    // const classes = useStyles();


    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value
    //     });
    // };

    return (
        <Box mt={3}>
            <Card>
                <CardContent>
                <TextField
                            fullWidth
                            label='Select State'
                            name='state'
                            // onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            // value={values.state}
                            variant='outlined'
                        >
                            {states.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                </CardContent>
            </Card>
        </Box>
    );
};
const Toolbar = ({ className, ...rest }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Box
            // display="flex"
            // justifyContent="flex-end"
            >
                <Button className={classes.button}>Import</Button>
                <Button className={classes.button}>Export</Button>
                <Button color='primary' variant='contained'>
                    {VNLABELS.LABEL_SI_CREATE_SALES_INVOICE}
                </Button>
            </Box>
            <Box mt={3}>
                <Card>
                    <CardContent>
                        <Box maxWidth={500} display='flex'>
                            <Button
                                aria-label='filter list'
                                className={classes.button}
                                onClick={() => {
                                    setOpen(!open);
                                }}
                            >
                                <FilterListIcon /> {VNLABELS.LABEL_FILTER}
                            </Button>
                            <TextField
                                fullWidth
                                size='small'
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <SvgIcon fontSize='small' color='action'>
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder={
                                    VNLABELS.LABEL_SEARCH + ' ' + VNLABELS.LABEL_COMMON_SALES_INVOICE
                                }
                                variant='outlined'
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            {open ? <Filter /> : <div></div>}
        </div>
    );
};

Toolbar.propTypes = {
    className: PropTypes.string
};

export default Toolbar;
