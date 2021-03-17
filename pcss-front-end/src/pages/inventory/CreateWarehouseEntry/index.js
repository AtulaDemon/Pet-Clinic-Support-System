import React from 'react';
import { CardContent, Container, makeStyles, Box, Card, Divider } from '@material-ui/core';
import SelectProduct from './SelectProduct';
import ProductAttribute from './ProductAttribute';
import InventoryEntryTable from './InventoryEntryTable';

const useStyles = makeStyles({
    root: {
        minHeight: '100%'
    },
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    }
});

const InventoryEntryForm = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <Box>
                <Card>
                    <CardContent>
                        <SelectProduct />
                        <ProductAttribute />
                    </CardContent>
                </Card>
            </Box>
            <Box marginTop='15px'>
                <Card>
                    <CardContent>
                        <InventoryEntryTable />
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default InventoryEntryForm;
