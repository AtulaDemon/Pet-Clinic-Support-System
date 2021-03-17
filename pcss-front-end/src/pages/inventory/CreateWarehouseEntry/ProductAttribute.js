import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    Box,
    Typography,
    CardContent,
    Card,
    Checkbox,
    FormGroup,
    FormControlLabel,
} from '@material-ui/core';
import SelectAttributeTable from './SelectAttributeTable';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    },
    margin: {
        marginTop: '15px'
    }
}));




const ProductAttribute = ({ className, ...rest }) => {
    const classes = useStyles();

    return (
        <Box>
            <Typography variant='h6' gutterBottom>
                Tạo phiên bản
            </Typography>
            <Card>
                <CardContent>
                    <Typography variant='subtitle1' gutterBottom>
                        Chọn thuộc tính
                    </Typography>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox name='checkedA' color='primary' />}
                            label='Color'
                        />
                        <FormControlLabel
                            control={<Checkbox name='checkedA' color='primary' />}
                            label='Màu sắc'
                        />
                    </FormGroup>
                </CardContent>
            </Card>
            <Typography variant='h6' gutterBottom>
                Chọn phiên bản
            </Typography>
            <SelectAttributeTable />
        </Box>
    );
};

ProductAttribute.propTypes = {
    className: PropTypes.string
};

export default ProductAttribute;
