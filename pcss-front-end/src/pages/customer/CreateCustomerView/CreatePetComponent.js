import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import VNLABELS from 'resources/vnlabels';
import { Box, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    margin: {
      marginRight: theme.spacing(1),
    }
  }));
  
const customer_info = 'Pet Information';
const CreatePetComponent = () => {
    const classes = useStyles();
    const petName = VNLABELS.LABEL_PET_PET_NAME;
    const petSpecies = VNLABELS.LABEL_PET_PET_SPECIES;
    const petColor = VNLABELS.LABEL_PET_PET_COLOR;
    const petAge = VNLABELS.LABEL_PET_PET_AGE;
    const petGender = VNLABELS.LABEL_PET_PET_GENDER;
    const [value, setValue] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Grid container direction="column">
            <Typography variant="h6" gutterBottom>
                {customer_info}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        label={petName}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        label={petSpecies}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        label={petAge}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={petColor}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <Box mt={1}>
                            <FormLabel >{VNLABELS.LABEL_PET_PET_MICROCHIP}</FormLabel>
                            <RadioGroup aria-label="microchip" name="microchip" value={value} onChange={handleChange} row>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Box>
                        <Box mt={1}>
                            <FormLabel >{VNLABELS.LABEL_PET_PET_VACCINE}</FormLabel>
                            <RadioGroup aria-label="microchip" name="microchip" value={value} onChange={handleChange} row>
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </Box>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={VNLABELS.LABEL_PET_PET_DESCRIPTION}
                        placeholder={VNLABELS.LABEL_PET_PET_DESCRIPTION}
                        fullWidth
                        multiline
                        rows={4}
                        rowsMax={4}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} direction='row' >
                    <Button variant="contained" color="primary" className={classes.margin} >
                       {VNLABELS.LABEL_LINK_BUTTON_RESET}
                    </Button>
                    <Button variant="contained" color="primary" className={classes.margin}>
                        {VNLABELS.LABEL_LINK_BUTTON_SAVE}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CreatePetComponent;