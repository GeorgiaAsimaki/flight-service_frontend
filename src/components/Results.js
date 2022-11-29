import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Informations from './Informations';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


const Results = () => {
    const [comp,setComp]=React.useState('All');
    const [scales,setScales]=React.useState(false);
    const [lug,setLuggage]=React.useState(false);
    const [num,setNum]=React.useState("0");

    return(
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Informations
                    company="AEGEAN"
                    companyF={comp}
                    flightNum = "AG10233"
                    timeDep = "16:10"
                    dateDep = "Monday"
                    timeTransit = "15:00"
                    layover = "2"
                    layoverF = {scales}
                    layoverNum = {num}
                    luggage = {true}
                    luggageF = {lug}
                    price = "1000" >
                </Informations>
                <Informations
                    company="IBERIA"
                    companyF={comp}
                     flightNum = "IB10233"
                     timeDep = "18:10"
                     dateDep = "Monday"
                     timeTransit = "14:00"
                     layover = "0"
                     layoverF = {scales}
                     layoverNum = {num}
                     luggage = {false}
                     luggageF = {lug}
                     price = "900"

                     >
                </Informations>

            </Stack>

            </Box>

    );

}

export default Results;