import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardHeader,
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
} from '@material-ui/core';
import UploadImage from './UploadImage';

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

const ProfileForm = ({ className, ...rest }) => {
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
        <Card className={clsx(classes.root, className)} {...rest}>
            <CardContent>
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
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormLabel component='legend'>Trạng thái</FormLabel>
                        <RadioGroup
                            aria-label='Trạng thái'
                            name='status'
                            value={value}
                            onChange={handleChangeRadio}
                            display='flex'
                            align-items = 'center'
                        >
                            <Box>
                                <FormControlLabel value='true' control={<Radio color="default"/>} label='Hiển thị' />
                                <FormControlLabel value='false' control={<Radio color="default"/>} label='Ẩn' />
                            </Box>
                            
                        </RadioGroup>
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
                    <Grid item md={6} xs={12}></Grid>
                    <Grid item md={6} xs={12}></Grid>
                </Grid>
            </CardContent>
            <UploadImage />
            <Divider />
            <Box display='flex' justifyContent='flex-end' p={2}>
                <Button color='primary' variant='contained'>
                    Save details
                </Button>
            </Box>
        </Card>
    );
};

ProfileForm.propTypes = {
    className: PropTypes.string
};

export default ProfileForm;
