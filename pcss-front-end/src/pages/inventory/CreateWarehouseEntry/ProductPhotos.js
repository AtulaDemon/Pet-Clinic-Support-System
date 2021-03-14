import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Link} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const ProductPhoto = ({ className, ...rest }) => {
    const classes = useStyles();

    return (
        <Link><img src='' alt="" key=''/>Image</Link>
        );
};

ProductPhoto.propTypes = {
    className: PropTypes.string
};

export default ProductPhoto;
