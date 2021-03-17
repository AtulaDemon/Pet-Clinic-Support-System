import React from 'react';
import {
    makeStyles,
    TextField,
    TableContainer,
    TableCell,
    TableHead,
    Table,
    TableRow,
    TableBody,
    Paper,
    Button,
    Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%'
    }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
];

function InventoryEntryTable() {
    const classes = useStyles();

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align='right'>Calories</TableCell>
                            <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                            <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                            <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component='th' scope='row'>
                                    {row.name}
                                </TableCell>
                                <TableCell align='right'>{row.calories}</TableCell>
                                <TableCell align='right'>
                                    <TextField
                                        defaultValue='1'
                                        type='number'
                                        style={{ width: 100 }}
                                        size='small'
                                        variant='outlined'
                                    />
                                </TableCell>
                                <TableCell align='right'>{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant='outlined' color='primary'>
                Lưu kho
            </Button>
        </Box>
    );
}

export default InventoryEntryTable;
