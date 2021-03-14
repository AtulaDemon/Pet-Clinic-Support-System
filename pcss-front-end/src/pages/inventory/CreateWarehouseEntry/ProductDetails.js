import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    TextField,
    makeStyles,
    TextareaAutosize,
    Link
} from '@material-ui/core';
import ProductPhoto from './ProductPhotos';

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

const useStyles = makeStyles(() => ({
    root: {}
}));

const ProductDetail = ({ className, ...rest }) => {
    const classes = useStyles();
    const [values, setValues] = useState({
        firstName: 'Katarina',
        lastName: 'Smith',
        email: 'demo@devias.io',
        phone: '',
        state: 'Alabama',
        country: 'USA'
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
                <TextField
                    fullWidth
                    helperText='Please specify the first name'
                    label='Tên sản phẩm'
                    name='firstName'
                    onChange={handleChange}
                    required
                    value={values.firstName}
                    variant='outlined'
                    InputProps={{
                        readOnly: true
                    }}
                />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField
                    fullWidth
                    label='Trạng thái'
                    name='lastName'
                    onChange={handleChange}
                    required
                    value='Hiển thị'
                    variant='outlined'
                    InputProps={{
                        readOnly: true
                    }}
                />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextareaAutosize
                    onChange={handleChange}
                    placeholder='Mô tả chi tiết'
                    variant='outlined'
                    rows={5}
                    cols={38}
                />
            </Grid>
            <Grid item md={6} xs={12}>
                <TextField
                    fullWidth
                    label='Category'
                    name='phone'
                    onChange={handleChange}
                    type='number'
                    value={values.phone}
                    variant='outlined'
                />
                <TextField
                    margin='normal'
                    fullWidth
                    label='Select State'
                    name='state'
                    onChange={handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={values.state}
                    variant='outlined'
                >
                    {states.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid item md={12} xs={12}>
                <ProductPhoto />
            </Grid>
        </Grid>
    );
};

ProductDetail.propTypes = {
    className: PropTypes.string
};

export default ProductDetail;
