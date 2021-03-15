import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    Button,
    Box,
    Divider,
    Grid,
    TextField,
    makeStyles,
    TextareaAutosize,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {},
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    },
}));

const serviceCategories = [
    {
        value: 'khambenh',
        label: 'Khám Bệnh'
    },
    {
        value: 'chuabenh',
        label: 'Chữa Bệnh'
    },
    {
        value: 'spa',
        label: 'Spa'
    }
];

const priceCategories = [
    {
        value: 'donggia',
        label: 'Đồng Giá'
    },
    {
        value: 'theocannang',
        label: 'Theo Cân Nặng'
    }
];

const ServiceDetail = ({ className, ...rest }) => {
    const classes = useStyles();

    const [values, setValues] = useState({
        firstName: 'Katarina',
        lastName: 'Smith',
        email: 'demo@devias.io',
        phone: '',
        state: 'Alabama',
        country: 'USA'
    });

    const [value, setValueRadio] = React.useState('true');

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleChangeRadio = (event) => {
        setValueRadio(event.target.value);
    };

    return (
        <div className={clsx(classes.root, className)} {...rest}>
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <TextField
                            fullWidth
                            label='Tên Dịch Vụ'
                            name='firstName'
                            onChange={handleChange}
                            required
                            value={values.firstName}
                            variant='outlined'
                        />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <FormLabel component='legend' margin='normal'>Trạng thái</FormLabel>
                        <RadioGroup
                            aria-label='Trạng thái'
                            name='status'
                            value={value}
                            onChange={handleChangeRadio}
                            display='flex'
                            align-items='center'
                        >
                            <Box>
                                <FormControlLabel value='true' control={<Radio color="default" />} label='Hiển thị' />
                                <FormControlLabel value='false' control={<Radio color="default" />} label='Ẩn' />
                            </Box>

                        </RadioGroup>
                    </Grid>
                    <Grid item md={3} xs={3}>
                    <Box display='flex' justifyContent='flex-end' p={2}>
                        <Button variant="contained" color="primary" fullWidth>
                            Lưu
                        </Button>
                    </Box>
                    </Grid>
                    <Grid item md={6} xs={6}>
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
                            margin='normal'
                            fullWidth
                            label='Loại Dịch Vụ'
                            name='state'
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={values.state}
                            variant='outlined'
                        >
                            {serviceCategories.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            margin='normal'
                            fullWidth
                            label='Loại giá'
                            name='state'
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            //value={values.state}
                            variant='outlined'
                        >
                            {priceCategories.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </div>
    );
}

export default ServiceDetail;
