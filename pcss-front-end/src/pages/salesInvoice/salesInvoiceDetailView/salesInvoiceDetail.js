import React from 'react';
import {
    Box,
    Container,
    makeStyles,
    Card,
    TextField,
    Grid,
    CardContent,
    Button,
    TableContainer,
    TableCell,
    TableHead,
    Table,
    TableRow,
    TableBody,
    Paper,
    Divider
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%'
    },
    marginFix: {
        marginTop: '15px'
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

function InvoiceItemTable() {
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
                                    aria-readonly
                                    value='1'
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
    );
}

const SalesInvoiceDetail = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth={false}>
                <Box mt={3}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        fullWidth
                                        margin='normal'
                                        label='Loại hóa đơn'
                                        name='state'
                                        value='Hóa đơn bán hàng'
                                        variant='outlined'
                                        aria-readonly
                                    ></TextField>
                                </Grid>
                                <Grid item md={9} xs={12}></Grid>
                                <Grid item md={3} sx={12}>
                                    <TextField
                                        fullWidth
                                        label='Mã hóa đơn'
                                        name='state'
                                        value='0001'
                                        variant='outlined'
                                        aria-readonly
                                    ></TextField>
                                </Grid>
                                <Grid item md={3} sx={12}>
                                    <TextField
                                        fullWidth
                                        label='Người tạo'
                                        name='state'
                                        value='Mạnh'
                                        variant='outlined'
                                        aria-readonly
                                    ></TextField>
                                </Grid>
                                <Grid item md={3} sx={12}>
                                    <TextField
                                        fullWidth
                                        label='Ngày tạo'
                                        name='state'
                                        value='30/04/1975'
                                        variant='outlined'
                                        aria-readonly
                                    ></TextField>
                                </Grid>
                                <Grid item md={3} xs={12}></Grid>
                                <Grid item md={3} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Tên khách hàng'
                                        name='state'
                                        value='Binladen'
                                        variant='outlined'
                                        aria-readonly
                                    ></TextField>
                                </Grid>
                                <Grid item md={3} sx={12}>
                                    <TextField
                                        fullWidth
                                        label='Số điện thoại'
                                        name='state'
                                        value='999999999'
                                        variant='outlined'
                                        aria-readonly
                                    ></TextField>
                                </Grid>
                                <Grid item md={3} sx={12}>
                                    <TextField
                                        fullWidth
                                        label='Địa chỉ'
                                        name='state'
                                        value='Tung của'
                                        variant='outlined'
                                        aria-readonly
                                    ></TextField>
                                </Grid>
                                <Grid item md={3} sx={12}></Grid>

                                <Grid item md={12} xs={12}>
                                    <InvoiceItemTable />
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Ghi chú'
                                        name='state'
                                        variant='outlined'
                                    ></TextField>
                                </Grid>
                                <Grid item md={4} xs={12}></Grid>
                                <Grid item md={4} xs={12}>
                                    Tổng tiền: 1000000
                                </Grid>
                            </Grid>
                        </CardContent>

                        <Divider className={classes.marginFix} />

                        <Box display='flex' justifyContent='flex-end' p={2} m={2}>
                            <Button color='default' variant='contained'>
                               Xóa hóa đơn
                            </Button>
                            <Button color='primary' variant='contained'>
                                Save details
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </div>
    );
};

export default SalesInvoiceDetail;
