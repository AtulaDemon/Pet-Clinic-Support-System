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
    makeStyles,
    Avatar,
    IconButton,
} from '@material-ui/core';
import VNLABELS from 'resources/vnlabels';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import { spacing } from '@material-ui/system';

import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {},
    button: {
        marginLeft: '10px',
        width: '150px'
    }
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
        <div className={clsx(classes.root, className)} {...rest}>
            <Box>
                <Card>
                    <CardContent>
                    <Box display='flex'>
                        <Autocomplete
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
                        <Button className={classes.button} variant="contained" color="primary">Tạo Mới</Button>
                        </Box>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                    <Box display='flex'>
                        <Autocomplete
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
                                    label="Tìm kiếm Thú Cưng"
                                    variant="outlined" />}
                        />
                        <Button className={classes.button} variant="contained" color="primary">Tạo Mới</Button>
                        </Box>
                    </CardContent>
                </Card>

            </Box>
        </div>
    );
};

Toolbar.propTypes = {
    className: PropTypes.string
};

export default Toolbar;
