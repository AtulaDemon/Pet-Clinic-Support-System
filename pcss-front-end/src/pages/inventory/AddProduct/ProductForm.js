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
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

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



const UploadImage = () => {
    const classes = useStyles();
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        // console.log(e.target.files[])
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

            // console.log("filesArray: ", filesArray);

            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    const renderPhotos = (source) => {
		return source.map((photo) => {
			return (
            <Grid item lg={3} md={3} xs={12}>
                <Link><img src={photo} alt="" key={photo}/></Link>
                <Button>
                    Xóa
                </Button>
            </Grid>
            );
		});
	};

    return (
        <div>
            <Typography variant='h6' gutterBottom component='div'>
                Thêm ảnh
            </Typography>
          
                <input type='file' id='file' multiple onChange={handleImageChange} />
            <Grid container spacing={3} className={classes.margin}>
                {renderPhotos(selectedFiles)}
            </Grid>
        </div>
    );
};


const useStyles = makeStyles(() => ({
    root: {},
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    },
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
                </Grid>
                <UploadImage />  
            </CardContent>
           
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
