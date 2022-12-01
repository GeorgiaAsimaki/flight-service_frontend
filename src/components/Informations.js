import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Passenger from './Passenger';

import {Routes, Route, useNavigate} from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Informations = ({company, companyF, flightNum, dateDep, timeTransit, layover, layoverF, layoverNum, luggage, luggageF, price}) => {

    const [pick,setPick]=React.useState('');
    const [picked,setPicked]=React.useState(false);
    const navigate = useNavigate();
    const [passengers,setPassengers] = React.useState([1]);
    const handlePick = () => {
        setPick(flightNum);
        setPicked(!picked);
        //navigate('/passenger2');
    }

    const addPassenger = () =>{
        setPassengers(passengers.concat(1));
    }

    const removePassenger = () => {
        if(passengers.length!=1){
            setPassengers(passengers. slice(0, -1));
        }
    }
  return (
    <>
        {(companyF=='All' || company==companyF) && (luggageF===false || (luggageF===true && luggage)) && (
                <>
                <Card sx={{ minWidth: 175 }} variant="outlined" onClick={handlePick}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {company}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {flightNum}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {dateDep.replaceAll("T","  ")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Transit time: {timeTransit}
                      <br />
                      Layover: {layover}
                      <br />
                      Luggage allowance in cabin:
                      {luggage && (" yes")}
                      {!luggage && (" no")}
                      <br />
                      Total price: {price} €
                    </Typography>
                  </CardContent>
                </Card>
                <>
                   { picked && (
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderTop:2, borderBottom: 2, borderColor: 'divider', bgcolor:'#f5f5f5' }}>
                                <FormControl sx={{m: 3, top:5,  minWidth: 120 }} >
                                    <Button variant="contained" onClick={addPassenger} >
                                        Add a passenger
                                    </Button>
                                </FormControl>
                                <FormControl sx={{m: 3, top:5,  minWidth: 120 }} >
                                    <Button variant="contained" onClick={removePassenger} >
                                        Remove a passenger
                                    </Button>
                                </FormControl>

                                <Stack spacing={2}>
                                    {passengers.map((item,index) => (
                                        <Passenger num={index}></Passenger>
                                    ))}
                                    </Stack>
                            </Box>
                        </Box>

                   )}
               </>
               </>
        )}

    </>
  );
}

export default Informations;