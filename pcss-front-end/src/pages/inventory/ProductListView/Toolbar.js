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
  IconButton,
  makeStyles
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
// import { Search as SearchIcon } from 'react-feather';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  button: {
    marginRight: '10px'
  }
}));



const Toolbar = ({ className, ...rest }) => {

  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        // display="flex"
        // justifyContent="flex-end"
      >
        <Button className={classes.button}>
          Import
        </Button>
        <Button className={classes.button}>
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
        >
          Add customer
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500} display="flex">
              <Button aria-label="filter list" className={classes.button} 
              // onClick={
       
              // }
              >
                  <FilterListIcon /> Filter
              </Button>
              <TextField
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/* {
        isFilterButtonClick ? (
          <Box mt={3}>
          <Card>
            <CardContent>
              Filter
            </CardContent>
          </Card>
        </Box>
        ) : (
          <div></div>
        )
      } */}
    
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;