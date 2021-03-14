import React from 'react';
import { Grid, makeStyles, TextField, Button } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetails';
// const useStyles = makeStyles({
//     root: {
//         minHeight: '100%'
//     },
//     margin: {
//         marginTop: '10px',
//         marginBottom: '10px'
//     }
// });

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }
];



const SelectProduct = () => {
    return (
        <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
                <Autocomplete
                    id='combo-box-demo'
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 500 }}
                    renderInput={(params) => (
                        <TextField
                            margin='normal'
                            {...params}
                            label='Tìm sản phẩm'
                            variant='outlined'
                        />
                    )}
                />
            </Grid>
            <Grid item md={12} xs={12}>
                <ProductDetail />    
            </Grid>   

        </Grid>
    );
};

export default SelectProduct;
