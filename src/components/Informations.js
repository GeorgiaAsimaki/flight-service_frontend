import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
    const navigate = useNavigate();
    const handlePick = () => {
        setPick(flightNum);
        navigate('/passenger');
    }
  return (
    <>
        {(companyF=='All' || company==companyF) && (luggageF===false || (luggageF===true && luggage)) && (
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
                      Total price: {price}
                    </Typography>
                  </CardContent>
                </Card>
        )}

    </>
  );
}

export default Informations;