import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Typography,
    Paper,
    Checkbox,
    Tooltip,
    Button
} from '@material-ui/core';

function createData(name) {
    return { name };
}

const rows = [createData('Cupcake'), createData('Donut'), createData('Eclair')];

function SelectAttributeTableHead(props) {
    const { classes, onSelectAllClick, numSelected, rowCount } = props;

    return (
        <TableHead>
            <TableRow>
                <TableCell padding='checkbox'>
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                        color='primary'
                    />
                </TableCell>
                <TableCell align='left' padding='default'>
                    Attribute
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

SelectAttributeTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles({
    root: {},
    title: {
        flex: '1 1 100%'
    }
});

const SelectAttributeTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0
            })}
        >
            {numSelected > 0 ? (
                <Typography
                    className={classes.title}
                    color='inherit'
                    variant='subtitle1'
                    component='div'
                >
                    {numSelected} selected
                </Typography>
            ) : (
               <div></div>
            )}

            {numSelected > 0 ? (
                <Tooltip title='Generate Attributes'>
                    <Button color='primary' variant='outlined'>
                        Select Attribute
                    </Button>
                </Tooltip>
            ) : (
                <div></div>
            )}
        </Toolbar>
    );
};

SelectAttributeTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    paper: {
        width: '100%'
    },
    table: {
        minWidth: 750
    },
    tableRow: {
      "&$selected, &$selected:hover": {
        backgroundColor: "#F7F8FC"
      }
    },
    selected: {}
});

export default function SelectAttributeTable() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const [selected, setSelected] = React.useState([]);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table className={classes.table}>
                        <SelectAttributeTableHead
                            classes={classes}
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {rows.map((row, index) => {
                                const isItemSelected = isSelected(row.name);
                                const labelId = `table-checkbox-${index}`;
                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.name)}
                                        role='checkbox'
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.name}
                                        selected={isItemSelected}
                                        classes={{ selected: classes.selected }}
                                        className={classes.tableRow}
                                    >
                                        <TableCell padding='checkbox'>
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                                color='primary'
                                            />
                                        </TableCell>
                                        <TableCell
                                            component='th'
                                            id={labelId}
                                            scope='row'
                                            padding='default'
                                            align='left'
                                        >
                                            {row.name}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <SelectAttributeTableToolbar numSelected={selected.length} />
            </Paper>
        </div>
    );
}
