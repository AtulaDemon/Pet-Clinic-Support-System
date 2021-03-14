import React from 'react';
import clsx from 'clsx';
import {
    Card,
    CardContent,
    Button,
    Box,
    Divider,
    Grid,
    TextField,
    makeStyles,
    TextareaAutosize,
    FormLabel,
    Radio,
    RadioGroup,
    FormControlLabel,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    
}));


const PetInformation = () => {
    const classes = useStyles();

    const [petInfos, setPetInfos] = useState({
        name: 'Jack',
        breed: 'Chó',
        color: 'Đen',
        age: 2,
        gender: 'Đực',

    });

    const [value, setValueRadio] = React.useState('true');
        
    return(
        <div></div>
    );
}

export default PetInformation;