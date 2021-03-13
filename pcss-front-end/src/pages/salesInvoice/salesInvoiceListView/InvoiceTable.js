import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import VNLABELS from 'resources/vnlabels';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    linkPadding: {
        paddingRight: '10px'
    }
});

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

export default function InvoiceTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align='right'>Calories</TableCell>
                        <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                        <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                        <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                        <TableCell align="right">{VNLABELS.LABEL_TABLE_HEAD_EDIT_INFO}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component='th' scope='row'>
                                {row.name}
                            </TableCell>
                            <TableCell align='right'>{row.calories}</TableCell>
                            <TableCell align='right'>{row.fat}</TableCell>
                            <TableCell align='right'>{row.carbs}</TableCell>
                            <TableCell align='right'>{row.protein}</TableCell>
                            <TableCell align='right'>
                                <Link variant='body2' className={classes.linkPadding}>
                                    {VNLABELS.LABEL_LINK_BUTTON_EDIT}
                                </Link>
                                <Link variant='body2' to='/product/productDetail'>
                                    {VNLABELS.LABEL_LINK_BUTTON_VIEW_DETAIL}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
