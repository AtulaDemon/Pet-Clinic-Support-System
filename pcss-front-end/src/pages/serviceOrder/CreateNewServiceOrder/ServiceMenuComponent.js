import React, { useState } from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import {
  Box,
  TextField,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CardComponent from 'components/cards/CardComponent';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = createUseStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  itemContainer: {
    margin: 'auto',
    borderBottom: `1px solid ${theme.color.lightGrayishBlue2}`,
    '&:last-child': {
        borderBottom: 'none'
    }
  },
  addButton: {
    backgroundColor: theme.color.lightGrayishBlue,
    color: theme.color.grayishBlue2,
    fontSize: '20px !important',
    padding: '7px !important'
  },
  itemTitle: {
    ...theme.typography.itemTitle,
    color: theme.color.veryDarkGrayishBlue
  },
  itemValue: {
    color: theme.color.grayishBlue2
  },
  greyTitle: {
    color: theme.color.grayishBlue3
  },
  tagStyles: {
    borderRadius: 5,
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: 11,
    letterSpacing: '0.5px',
    lineHeight: '14px',
    padding: '5px 12px 5px 12px'
  },
  checkboxWrapper: {
    cursor: 'pointer',
    marginRight: 16
  },
  cardTitle: {
    ...theme.typography.cardTitle,
  color: theme.color.grayishBlue2
  }
}));

function ServiceMenu(props) {

  const theme = useTheme();

  const classes = useStyles({ theme });

  const [items, setItems] = useState([
    { title: 'Service Index 0', checked: false },
    { title: 'Service Index 1', checked: false }
  ]);

  function onAddButtonClick() {
    setItems((prev) => {
      const newItems = [...prev];
      newItems.push({
        title: `Service Index ${newItems.length + 1}`,
        checked: false,
      });
      return newItems;
    });
  }

  function onDeleteButtonClick(index) {
    const dataDelete = [...items];
    dataDelete.splice(index, 1);
    setItems([...dataDelete]);
  }

  function renderAddButton() {
    return (
      <Row
        horizontal='center'
        vertical='center'
        className={[classes.tagStyles, classes.addButton].join(' ')}
        onClick={onAddButtonClick}
      >
        +
      </Row>
    );
  }

  return (
    <div>
        <CardComponent
          containerStyles={props.containerStyles}
          title='Danh sách dịch vụ đã chọn'
          items={[
            <Row horizontal='space-between' vertical='center'>
              <span className={[classes.itemTitle, classes.greyTitle].join(' ')}>
                Thêm dịch vụ
              
            </span>
            {renderAddButton()}
            </Row>,
            ...items.map((item, index) => (
              <ServiceItemComponent
                classes={classes}
                index={index}
                item={item}
                onDeleteButtonClick={onDeleteButtonClick}
              />
            ))
          ]}
        >
        </CardComponent>
    </div>
  );
}

const top100Films = [
  { id: 1, title: 'The Shawshank Redemption', price: 1994 },
  { id: 2, title: 'The Godfather', price: 1972 },
  { id: 3, title: 'The Godfather: Part II', price: 1974 },
  { id: 4, title: 'The Dark Knight', price: 2008 },
  { id: 5, title: '12 Angry Men', price: 1957 },
  { id: 6, title: "Schindler's List", price: 1993 },
  { id: 7, title: 'Pulp Fiction', price: 1994 }
];

function ServiceItemComponent({ classes, index, item = {}, onDeleteButtonClick }) {
  const { tag = {} } = item;
  return (
    <div>
    <Row horizontal='space-between'>
      <Row id={index}>
        <Autocomplete 
          freeSolo
          id={index}
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              style={{ width: 500 }}
              label="Dịch vụ"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
        <Box color="text.primary" m="auto" ml={3} p={2}>Price</Box>
        <TextField margin="normal" style={{ width: 200 }} id="outlined-basic" variant="outlined" />
      </Row>
      <IconButton aria-label="delete" onClick={() => onDeleteButtonClick(index)}>
          <DeleteIcon />
      </IconButton>
    </Row>
    </div>
  );
}


export default ServiceMenu;