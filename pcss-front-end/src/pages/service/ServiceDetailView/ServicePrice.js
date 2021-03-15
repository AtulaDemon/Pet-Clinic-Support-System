import React, { useState } from 'react';
import clsx from 'clsx';
import { forwardRef } from 'react';
import {
    Card,
    CardContent,
    makeStyles,
    Checkbox,
    Box
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import MaterialTable, { MTableToolbar } from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(() => ({
    root: {},
    margin: {
        marginTop: '10px',
        marginBottom: '10px'
    },
}));

function ServicePrice({ className, ...rest }) {
    const classes = useStyles();
    var columns = [
        { title: "id", field: "id", hidden: true },
        { title: "Tên", field: "name", isEditable: false },
        { title: "Tất cả", field: "kg0" },
        { title: "0.1 - 5KG", field: "kg1" },
        { title: "5 - 10KG", field: "kg2" },
        { title: "10 - 15KG", field: "kg3" },
        { title: "15 - 20KG", field: "kg4" },
        { title: "20 - 25KG", field: "kg5" },
        { title: "25 - 30KG", field: "kg6" },
        { title: "30 - 35KG", field: "kg7" },
        { title: "35 - 40KG", field: "kg8" },
        { title: "> 40KG", field: "kg9" },
    ]

    const [data, setData] = useState([
        {
            id: 1,
            name: "Đực",
            kg1: 60000,
            kg2: 80000,
            kg3: 100000,
            kg4: 120000,
            kg5: 150000,
            kg6: 180000,
            kg7: 200000,
            kg8: 200000,
            kg9: 250000,
        },
        {
            id: 2,
            name: "Cái",
            kg1: 60000,
            kg2: 80000,
            kg3: 100000,
            kg4: 120000,
            kg5: 150000,
            kg6: 180000,
            kg7: 200000,
            kg8: 200000,
            kg9: 250000,
        },
        {
            id: 3,
            name: "Nội trú",
            kg1: 50000,
            kg2: 60000,
            kg3: 800000,
            kg4: 100000,
            kg5: 120000,
            kg6: 150000,
            kg7: 180000,
            kg8: 180000,
            kg9: 200000,
        }
    ]);

    const [iserror, setIserror] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])

    function validateNumber(kg) {
        const re = /\d+/;
        return re.test(kg);
    }

    // const handleColumnUpdate = (newData, oldData, resolve) => {
    //     const dataUpdate = [...columns];
    //     const index = oldData.tableData.field;
    //     dataUpdate[index] = newData;
    //     setData([...dataUpdate]);
    //     resolve()
    //     setIserror(false)
    //     setErrorMessages([])
    // }

    const handleRowUpdate = (newData, oldData, resolve) => {
        let errorList = []

        // if (validateNumber(newData.kg1) === false) {
        //     errorList.push("Please enter number")
        // }

        if (errorList.length < 1) {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);
            resolve()
            setIserror(false)
            setErrorMessages([])
        } else {
            setErrorMessages(errorList)
            setIserror(true)
            resolve()
        }

    }

    const handleRowAdd = (newData, resolve) => {
        let errorList = []

        if (errorList.length < 1) { //no error

            let dataToAdd = [...data];
            dataToAdd.push(newData);
            setData(dataToAdd);
            resolve()
            setErrorMessages([])
            setIserror(false)

        } else {
            setErrorMessages(errorList)
            setIserror(true)
            resolve()
        }


    }

    const handleRowDelete = (oldData, resolve) => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()

    }


    return (
        <Card className={clsx(classes.root, className)} {...rest}>

            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={12}>
                        <div>
                            {iserror &&
                                <Alert severity="error">
                                    {errorMessages.map((msg, i) => {
                                        return <div key={i}>{msg}</div>
                                    })}
                                </Alert>
                            }
                        </div>

                        <MaterialTable
                            title="Bảng giá dịch vụ"
                            columns={columns}
                            data={data}
                            icons={tableIcons}
                            options={{
                                search: true
                              }}
                            components={{
                                Toolbar: props => (
                                    <div>
                                        <MTableToolbar {...props} />
                                        <div style={{ padding: '0px 10px' }}>
                                            <Box>
                                            <Checkbox
                                                color="primary"
                                            />Đực
                                            <Checkbox
                                                color="primary"
                                            /> Cái
                                            <Checkbox
                                                color="primary"
                                            />Nội Trú
                                            </Box>
                                        </div>
                                    </div>
                                ),
                            }}
                            editable={{
                                onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve) => {
                                        handleRowUpdate(newData, oldData, resolve);

                                    }),
                                onRowAdd: (newData) =>
                                    new Promise((resolve) => {
                                        handleRowAdd(newData, resolve)
                                    }),
                                onRowDelete: (oldData) =>
                                    new Promise((resolve) => {
                                        handleRowDelete(oldData, resolve)
                                    }),
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ServicePrice;
