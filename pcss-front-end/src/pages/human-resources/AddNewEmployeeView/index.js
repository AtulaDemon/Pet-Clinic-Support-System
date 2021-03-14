import React, { Component } from 'react';
import { Container, makeStyles, Typography,
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
    FormControlLabel } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import VNLABELS from 'resources/vnlabels';
import { Title } from '@material-ui/icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputComponent from './InputComponent';



const AddNewEmployee = () => {
    
    return (  
        <div >
            <Card>
                <CardContent>
                    <InputComponent/>
                </CardContent>
            </Card>
             
        </div>
    );
}
 
export default AddNewEmployee;