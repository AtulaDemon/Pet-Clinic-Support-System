import React, { useState } from 'react';
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
    Divider,
    IconButton 
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Autocomplete from '@material-ui/lab/Autocomplete';
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%'
    },
    marginDivider: {
        marginTop: '15px'
    }
}));

const states = [
    {
        value: 'alabama',
        label: 'Bán hàng'
    },
    {
        value: 'new-york',
        label: 'Sử dụng'
    }
];

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }
];

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
                                    defaultValue='1'
                                    type='number'
                                    style={{ width: 100 }}
                                    size='small'
                                    variant='outlined'
                                />
                            </TableCell>
                            <TableCell align='right'>{row.carbs}</TableCell>
                            <TableCell align='right'>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const CreateSalesInvoice = () => {
    const classes = useStyles();

    const [values, setValues] = useState({
        state: 'Bán hàng'
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
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
                                        label='Chọn loại hóa đơn'
                                        name='state'
                                        onChange={handleChange}
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        value={values.state}
                                        variant='outlined'
                                    >
                                        {states.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item md={6} xs={12}></Grid>
                                <Grid item md={3} xs={12}>
                                    <Autocomplete
                                        id='combo-box-demo'
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        style={{ width: 200 }}
                                        renderInput={(params) => (
                                            <TextField
                                                margin='normal'
                                                {...params}
                                                label='Khách hàng'
                                                variant='outlined'
                                            />
                                        )}
                                    />
                                    <Button color='primary'>Thêm khách hàng mới</Button>
                                </Grid>

                                <Grid item md={9} xs={12}>
                                    <Autocomplete
                                        id='combo-box-demo'
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label='Tìm kiếm sản phẩm'
                                                variant='outlined'
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item md={3} xs={12}></Grid>
                                <Grid item md={9} xs={12}>
                                    <InvoiceItemTable />
                                </Grid>
                                <Grid item md={3} xs={12}></Grid>
                                <Grid item md={4} xs={12}>
                                    <TextField
                                        fullWidth
                                        label='Ghi chú'
                                        name='state'
                                        variant='outlined'
                                    ></TextField>
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    Tổng tiền: 1000000
                                </Grid>
                                <Grid item md={4} xs={12}></Grid>
                            </Grid>
                        </CardContent>

                        <Divider className={classes.marginDivider} />

                        <Box display='flex' justifyContent='flex-end' p={2} m={2}>
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

export default CreateSalesInvoice;
