import React from 'react';
import {
    Grid, makeStyles,
    Card,
    Typography,
    CardMedia,
    CardContent, Hidden, TextField,
} from "@material-ui/core";
import VNLABELS from 'resources/vnlabels';
const customer =
{
    id: 1,
    name: 'Nguyễn Tiến Đạt 1',
    phone: '0123456789',
    email: 'dat1@gmail.com',
    address: 'Thạch Thất - Hà Nội',
    numberofpet: 2,
}
const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1
    },
    cardMedia: {
        padding: '1ch',
        background: '#FE6B8B',
        width: 360,
    },
    text: {
        width: 300,
        marginTop: '1ch'
    }

});

const CustomerDetailComponent = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={12} >

            <Card className={classes.card}>
                <CardContent className={classes.cardDetails} >
                    <Grid container direction="column">
                        <TextField className={classes.text}
                            variant='outlined'
                            label={VNLABELS.LABEL_COMMON_NAME}
                            defaultValue={customer.name}
                            InputProps={{
                                readOnly: true
                            }} />
                        <TextField className={classes.text}
                            variant='outlined'
                            label={VNLABELS.LABEL_COMMON_EMAIL}
                            defaultValue={customer.email}
                            InputProps={{
                                readOnly: true
                            }} />
                        <TextField className={classes.text}
                            variant='outlined'
                            label={VNLABELS.LABEL_COMMON_PHONE}
                            defaultValue={customer.phone}
                            InputProps={{
                                readOnly: true
                            }} />
                        <TextField className={classes.text}
                            variant='outlined'
                            label={VNLABELS.LABEL_COMMON_ADDRESS}
                            defaultValue={customer.address}
                            InputProps={{
                                readOnly: true
                            }} />
                    </Grid>
                </CardContent>
                <Grid container spacing={1} >
                    <CardMedia className={classes.cardMedia} image={'../../../shared/user_profile_sample.png'} title={'image title'} />
                </Grid>
            </Card>
        </Grid>
    );
}

export default CustomerDetailComponent;