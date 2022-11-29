import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import Switch from './Switch';
import Dates from './Dates';


export default function SelectLabels() {

  const [origin, setOrigin] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [value, setValue] = React.useState(false);
  const [form,setForm] = React.useState(false);

  const handleOrigin = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestination = (event) => {
    setDestination(event.target.value);
    setForm(true);
  };

  return (
    <div>
        <Grid container>
          <Grid item xs={12}>
              <FormControl sx={{m: 2, top:100,  minWidth: 220 }} >
                <InputLabel id="demo-simple-select-helper-label">ORIGIN</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={origin}
                  label="ORIGIN"
                  onChange={handleOrigin}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>ATHENS(ATH)</MenuItem>
                  <MenuItem value={2}>MADRID(MAD)</MenuItem>
                  <MenuItem value={3}>BARCELONA(BCN)</MenuItem>
                  <MenuItem value={4}>AMSTERDAM(AMS)</MenuItem>
                  <MenuItem value={5}>HAMBURG(HAM)</MenuItem>
                </Select>
                <FormHelperText>Choose Origin</FormHelperText>
              </FormControl>
          </Grid>
          <Grid item xs={12}>
              <FormControl sx={{ m: 2,top:100, minWidth: 220 }}>
                      <InputLabel id="demo-simple-select-helper-label">DESTINATION</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={destination}
                        label="DESTINATION"
                        onChange={handleDestination}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>ATHENS(ATH)</MenuItem>
                        <MenuItem value={2}>MADRID(MAD)</MenuItem>
                        <MenuItem value={3}>BARCELONA(BCN)</MenuItem>
                        <MenuItem value={4}>AMSTERDAM(AMS)</MenuItem>
                        <MenuItem value={5}>HAMBURG(HAM)</MenuItem>
                      </Select>
                      <FormHelperText>Choose Destination</FormHelperText>
              </FormControl>
          </Grid>
          {form && (
              <>
              <Grid item xs={12}>
                <FormControl sx={{m: 2, top:100,  minWidth: 220 }}>
                    <Switch isOn={value} handleToggle={() => {setValue(!value);}}/>
                    <FormHelperText>Round trip</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                 <FormControl sx={{m: 2, top:100, minWidth: 220 }}>
                        <Dates date="departure" />
                        <FormHelperText>Choose departure date</FormHelperText>
                 </FormControl>
              </Grid>

              {value && (
                <Grid item xs={12}>
                    <FormControl sx={{m: 2, top:100,  minWidth: 220 }}>
                        <Dates date="return" />
                        <FormHelperText>Choose return date</FormHelperText>
                    </FormControl>
                </Grid>
              )}
              </>
          )}
        </Grid>
    </div>
  );
}