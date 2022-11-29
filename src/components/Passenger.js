import { useState } from 'react';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { Outlet, Link } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';

import Switch from './Switch'


export default function Passenger() {

// States for registration
const [firstname, setFirstName] = useState('');
const [lastname, setLastName] = useState('');
const [nationality, setNation] = useState('');
const [age, setAge] = useState('');
const [id,setId] = useState('');
const [value, setValue] = React.useState(false);


// Handling the name change
const handleFirstName = (e) => {
	setFirstName(e.target.value);

};

const handleLastName = (e) => {
	setLastName(e.target.value);

};

const handleNation = (e) => {
	setNation(e.target.value);

};

const handleAge = (e) => {
	setAge(e.target.value);

};

const handleId = (e) => {
    setId(e.target.value);
}

return (
    <Grid container>
        <Grid item xs={12}>
            <FormControl sx={{m: 2, top:20,  minWidth: 220 }} >

                <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    onChange={handleFirstName}
                    value={firstname}
                />
            </FormControl>
        </Grid>
        <Grid item xs={12}>
         <FormControl sx={{m: 2, top:20,  minWidth: 220 }} >
            <TextField
                required
                id="outlined-required"
                label="Last Name"
                onChange={handleLastName}
                value={lastname}
            />
        </FormControl>
        </Grid>
        <Grid item xs={12}>
            <FormControl sx={{m: 2, top:20,  minWidth: 220 }} >
            <TextField
                required
                id="outlined-required"
                label="Nationality"
                onChange={handleNation}
                value={nationality}
            />
        </FormControl>
        </Grid>
        <Grid item xs={12}>
            <FormControl sx={{m: 2, top:20,  minWidth: 220 }} >
                <TextField
                    required
                    id="outlined-required"
                    label="Identification"
                    onChange={handleId}
                    value={id}
                />
            <FormHelperText>Identification (NIF or passport)</FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
             <FormControl sx={{m: 2, top:20,  minWidth: 220 }} >
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={3}
                        label="Age"
                        onChange={handleAge}
                    >
                        <MenuItem value={1}> less than 2 years </MenuItem>
                        <MenuItem value={2}> between 2 and 9 years</MenuItem>
                        <MenuItem value={3}> more than 9 years</MenuItem>

                    </Select>
                <FormHelperText>Choose your Age range</FormHelperText>
             </FormControl>
         </Grid>

             <Grid item xs={12}>
                            <FormControl sx={{m: 2, top:20,  minWidth: 220 }}>
                                <Button variant="contained" href="complete">
                                    SUBMIT
                                </Button>
                            </FormControl>
                          </Grid>

         <Grid item xs={12}>
            <FormControl sx={{m: 2, top:20,  minWidth: 220 }}>
                <Switch isOn={value} handleToggle={() => {setValue(!value);}}/>
                <FormHelperText>Will you be carrying bags?</FormHelperText>
                {value && (
                <h6 style={{ color: 'red' , font: 'Arial'}}>Warning! There might be extra charges.</h6>
                )}
            </FormControl>
         </Grid>

     </Grid>

     );

}
