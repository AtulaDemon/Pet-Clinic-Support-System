import React, { useState } from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { IconCheckboxOn, IconCheckboxOff } from 'assets/icons';
import {
  Container, makeStyles, Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
  Box,
  Divider,
  Grid,
  TextField,
  TextareaAutosize,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CardComponent from 'components/cards/CardComponent';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { height } from '@material-ui/system';


const useStyles = createUseStyles((theme) => ({
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
  }
}));

function ServiceMenu(props) {

  const theme = useTheme();

  const classes = useStyles({ theme });

  const [items, setItems] = useState([
    { title: 'Finish ticket update', checked: false },
    {
      title: 'Create new ticket example',
      checked: false
    }
  ]);

  function onCheckboxClick(index) {
    setItems((prev) => {
      const newItems = [...prev];
      newItems[index].checked = newItems[index].checked ? false : true;
      return newItems;
    });
  }

  function onAddButtonClick() {
    setItems((prev) => {
      const newItems = [...prev];
      newItems.push({
        title: `Task ${newItems.length + 1}`,
        checked: false,
      });
      return newItems;
    });
  }

  function onDeleteButtonClick() {
    setItems((prev) => {
      const newItems = [...prev];
      newItems.push({
        title: `Task ${newItems.length + 1}`,
        checked: false,
      });
      return newItems;
    });
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
    <CardComponent
      containerStyles={props.containerStyles}
      title='Tasks'
      link='View all'
      subtitle='Today'
      items={[
        <Row horizontal='space-between' vertical='center'>
          <span className={[classes.itemTitle, classes.greyTitle].join(' ')}>
            Create new task
                    </span>
          {renderAddButton()}
        </Row>,
        ...items.map((item, index) => (
          <TaskComponent
            classes={classes}
            index={index}
            item={item}
            onCheckboxClick={onCheckboxClick}
          />
        ))
      ]}
    />
  );
}

const filterOptions = createFilterOptions({
  ignoreCase: true,
  matchFrom: 'start',
  stringify: option => option.title,

});

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }
];

function TaskComponent({ index, item = {}, onCheckboxClick }) {
  const { tag = {} } = item;
  return (
    <Row horizontal='space-between' vertical='center'>
      <Row>
        <div onClick={() => onCheckboxClick(index)}>
          {item.checked ? <IconCheckboxOn /> : <IconCheckboxOff />}
        </div>

        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              style={{ width: 400 }}
              label="Search input"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />

        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>

      </Row>

    </Row>
  );
}


export default ServiceMenu;