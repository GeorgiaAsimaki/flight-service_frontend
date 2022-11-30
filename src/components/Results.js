import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Informations from './Informations';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Results = () => {
    const [comp,setComp]=React.useState('All');
    const [scales,setScales]=React.useState("0");
    const [lug,setLuggage]=React.useState(false);
    const [time,setTimeF]=React.useState("0");


    const handleAirlineF = (e) => {
        setComp(e.target.value);
    }

    const handleLuggageF = (e) => {
        setLuggage(e.target.value);
    }

    const handleScalesF = (e) => {
            setScales(e.target.value);
    }

    const handleTimeF = (e) => {
        setTimeF(e.target.value);
    }

    return(
        <Box sx={{ width: '100%' }}>
             <Box sx={{ borderTop:2, borderBottom: 2, borderColor: 'divider', bgcolor:'#f5f5f5' }}>
                <FormControl sx={{m: 2, top:5,  minWidth: 120 }} >
                     <InputLabel id="demo-simple-select-helper-label">Airline </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={comp}
                            label="Airline"
                            onChange={handleAirlineF}
                            >
                                <MenuItem value={'All'}> All </MenuItem>
                                <MenuItem value={'AEGEAN'}> AEGEAN </MenuItem>
                                <MenuItem value={'IBERIA'}> IBERIA </MenuItem>
                                <MenuItem value={'RYANAIR'}> RYANAIR </MenuItem>
                        </Select>
                </FormControl>
                <FormControl sx={{m: 2, top:5,  minWidth: 120 }} >
                    <InputLabel id="demo-simple-select-helper-label">Luggage</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={lug}
                            label="Luggage"
                            onChange={handleLuggageF}
                        >
                            <MenuItem value={true}>Allowed</MenuItem>
                            <MenuItem value={false}> - </MenuItem>
                        </Select>
                </FormControl>
                <FormControl sx={{m: 2, top:5,  minWidth: 165 }} >
                    <InputLabel id="demo-simple-select-helper-label">Scales</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={scales}
                            label="Scales"
                            onChange={handleScalesF}
                        >
                            <MenuItem value={"0"}>-</MenuItem>
                            <MenuItem value={"1"}>Ascending order</MenuItem>
                            <MenuItem value={"2"}>Descending order</MenuItem>
                        </Select>
                </FormControl>
                <FormControl sx={{m: 2, top:5,  minWidth: 165 }} >
                    <InputLabel id="demo-simple-select-helper-label">Schedule</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={time}
                            label="Schedule"
                            onChange={handleTimeF}
                        >
                            <MenuItem value={"0"}>-</MenuItem>
                            <MenuItem value={"1"}>Ascending order</MenuItem>
                            <MenuItem value={"2"}>Descending order</MenuItem>
                        </Select>
                </FormControl>
             </Box>
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