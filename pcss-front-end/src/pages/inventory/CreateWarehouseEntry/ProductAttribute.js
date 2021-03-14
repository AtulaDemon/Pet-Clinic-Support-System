import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Box, Typography, CardContent, Card, Checkbox } from '@material-ui/core';

const user = {
    avatar: '/src/assets/icons/a.jpg'
};

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
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
                    <Checkbox
                        color='primary'
                    /> Color
                </CardContent>
            </Card>
        </Box>
    );
};

ProductAttribute.propTypes = {
    className: PropTypes.string
};

export default ProductAttribute;
