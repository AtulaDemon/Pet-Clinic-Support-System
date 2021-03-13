import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import {
  Card,
  Button,
  Box,
} from '@material-ui/core';

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: '#FFFFFF',
    border: `1px solid ${theme.color.lightGrayishBlue2}`,
    borderRadius: 4,
    padding: '24px 32px 0px 32px',
    height: '100%'
  },
  containerMobile: {
    padding: '12px 16px 6px 16px !important'
  },
  itemContainer: {
    margin: 10,
    paddingLeft: 30,
    paddingBottom: 4,
    paddingTop: 4,
    borderBottom: `1px solid ${theme.color.lightGrayishBlue2}`,
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  button: {
    width: '140px',
    height: '60px'
  },
  title: {
    marginBottom: 10,
    ...theme.typography.cardTitle,
    color: theme.color.veryDarkGrayishBlue
  },
}));

function MedicalMenu(props) {

  const theme = useTheme();

  const classes = useStyles({ theme });

  return (
    <Card>
      <Column
        className={classes.container}
        breakpoints={{ 426: classes.containerMobile }}
      >
        <Box>
          <div className={classes.title}>Tạo hồ sơ khám chữa bệnh</div>
        </Box>
      </Column>
      <Box display='flex' className={classes.itemContainer}>
        <Box m={1}>
          <Button variant="contained" color="primary" className={classes.button}>
            Tạo Hồ Sơ
        </Button>
        </Box>
        <Box m={1}>
          <Button variant="contained" color="secondary" className={classes.button}>
            Xem Hồ Sơ
        </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default MedicalMenu;