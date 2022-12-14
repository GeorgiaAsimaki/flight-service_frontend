import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';




import Switch from './Switch';
import Dates from './Dates';


export default function Start() {

  const [origin, setOrigin] = React.useState('');
  const [destinations, setDestinations] = React.useState(["ATHENS(ATH)","MADRID(MAD)","BARCELONA(BCN)","AMSTERDAM(AMS)","HAMBURG(HAM)"]);
  const [destination, setDestination] = React.useState('');
  const [value, setValue] = React.useState(false);
  const [formdest,setFormDest] = React.useState(false);
  const [formor,setFormOr] = React.useState(false);

  const handleOrigin = (event) => {
    setOrigin(event.target.value);
    setFormOr(true);

    //here we change destination according to origin
    setDestinations(destinations);
  };

  const handleDestination = (event) => {
    setDestination(event.target.value);
    setFormDest(true);
  };

  return (
    <div>
        <Grid container>
          <Grid item xs={12}>
              <FormControl sx={{m: 2, top:100,  minWidth: 220 }} >
                <InputLabel id="demo-simple-select-helper-label">ORIGIN</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="origin"
                  value={origin}
                  label="ORIGIN"
                  onChange={handleOrigin}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem id="ath" value={1}>ATHENS(ATH)</MenuItem>
                        <MenuItem id="mad" value={2}>MADRID(MAD)</MenuItem>
                        <MenuItem id="bcn" value={3}>BARCELONA(BCN)</MenuItem>
                        <MenuItem id="ams" value={4}>AMSTERDAM(AMS)</MenuItem>
                        <MenuItem id="ham" value={5}>HAMBURG(HAM)</MenuItem>
                </Select>
                <FormHelperText>Choose Origin</FormHelperText>
              </FormControl>
          </Grid>
          <Grid item xs={12}>
              <FormControl sx={{ m: 2,top:100, minWidth: 220 }}>
                      <InputLabel id="demo-simple-select-helper-label">DESTINATION</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="destination"
                        value={destination}
                        label="DESTINATION"
                        onChange={handleDestination}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem id="ath2" value={1}>ATHENS(ATH)</MenuItem>
                        <MenuItem id="mad2" value={2}>MADRID(MAD)</MenuItem>
                        <MenuItem id="bcn2" value={3}>BARCELONA(BCN)</MenuItem>
                        <MenuItem id="ams2" value={4}>AMSTERDAM(AMS)</MenuItem>
                        <MenuItem id="ham2" value={5}>HAMBURG(HAM)</MenuItem>
                      </Select>
                      <FormHelperText>Choose Destination</FormHelperText>
              </FormControl>
          </Grid>
          {formor && formdest && (
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

              <Grid item xs={12}>
                <FormControl sx={{m: 2, top:100,  minWidth: 220 }}>
                    <Button id="search" variant="contained" href="results">
                        Search
                    </Button>

                </FormControl>
              </Grid>
              </>
          )}
        </Grid>

    </div>
  );
}
