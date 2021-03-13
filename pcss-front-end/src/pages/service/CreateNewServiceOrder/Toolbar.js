import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    makeStyles,
} from '@material-ui/core';
import VNLABELS from 'resources/vnlabels';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import { spacing } from '@material-ui/system';

import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        padding: '24px 32px 0px 32px',
        height: '100%'
    },
    button: {
        width: '150px',
        height: '100%'
    },
    title: {
        marginBottom: 10,
        ...theme.typography.cardTitle,
        color: theme.color.veryDarkGrayishBlue
    },
}));

const Toolbar = ({ className, ...rest }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const filterOptions = createFilterOptions({
        ignoreCase: true,
        matchFrom: 'start',
        stringify: option => option.title,

    });

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 }
    ];

    return (
        <Card className={classes.container}>
            <Box>
                <div className={classes.title}>Tìm kiếm Khách hàng</div>
            </Box>
            <CardContent>
                <Box display='flex'>
                    <Autocomplete
                        pr={2}
                        id="filter-demo"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        filterOptions={filterOptions}
                        style={{ width: 400 }}
                        renderInput={(params) =>
                            <TextField
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                                {...params}
                                label="Tìm kiếm Khách Hàng"
                                variant="outlined" />}
                    />
                    <Box pl={2}>
                        <Button className={classes.button} variant="contained" color="primary">Tạo Mới</Button>
                    </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display='flex'>
                    <Autocomplete
                        id="filter-demo"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        filterOptions={filterOptions}
                        style={{ width: 400 }}
                        pr={10}
                        renderInput={(params) =>
                            <TextField
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment>
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                                {...params}
                                label="Tìm kiếm Thú Cưng"
                                variant="outlined" />}
                    />
                    <Box pl={2}>
                        <Button className={classes.button} variant="contained" color="primary">Tạo Mới</Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

Toolbar.propTypes = {
    className: PropTypes.string
};

export default Toolbar;
