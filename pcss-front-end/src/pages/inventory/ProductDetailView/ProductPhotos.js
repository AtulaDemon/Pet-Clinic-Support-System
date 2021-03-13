import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Card, makeStyles, CardActionArea, CardMedia} from '@material-ui/core';

const user = {
    avatar: '/src/assets/icons/a.jpg'
};

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
        <div className={clsx(classes.root, className)} {...rest}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={user.avatar}
                        title=''
                    />
                </CardActionArea>
            </Card>
        </div>
        );
};

ProductPhoto.propTypes = {
    className: PropTypes.string
};

export default ProductPhoto;
