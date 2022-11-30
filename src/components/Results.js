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

    //DAY: DDMMYYYY
    //TIME:HHMM
    const [info,SetInfo]=React.useState([["RYANAIR","RY20233", "1810", "22102022", "16:00","2",false,"1000"],
                                          ["AEGEAN","AE00233", "1800", "21102022", "16:00","1",true,"1100"],
                                          ["IBERIA","IB33456", "1300", "22102022", "11:00","0",true,"1300"],
                                          ["IBERIA","IB33456", "1300", "23102022", "11:00","1",true,"1300"]]  )

    const [list,SetList]=React.useState(info);

    const handleAirlineF = (e) => {
        setComp(e.target.value);
    }

    const handleLuggageF = (e) => {
        setLuggage(e.target.value);
    }

    const handleScalesF = (e) => {
        setScales(e.target.value);
        if(e.target.value==="1"){
                 info.sort((a, b) => a[5] - b[5]);
        }
        else if(e.target.value==="2"){
            info.sort((a, b) => b[5] - a[5]);
        }
    }

    const handleTimeF = (e) => {
        setTimeF(e.target.value);
        if(e.target.value==="1"){
            info.sort((a, b) => (a[3]===b[3])?(a[2]-b[2]):(a[3]-b[3]));
        }
        else if(e.target.value==="2"){
            info.sort((a, b) => (a[3]===b[3])?(b[2]-a[2]):(b[3]-a[3]));
        }
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
                <FormControl sx={{m: 2, top:5,  minWidth: 175 }} >
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
                <FormControl sx={{m: 2, top:5,  minWidth: 175 }} >
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
                        company={info[0][0]}
                        companyF={comp}
                        flightNum = {info[0][1]}
                        timeDep = {info[0][2]}
                        dateDep = {info[0][3]}
                        timeTransit = {info[0][4]}
                        layover = {info[0][5]}
                        layoverF = {scales}
                        luggage = {info[0][6]}
                        luggageF = {lug}
                        price = {info[0][7]}
                        >
                    </Informations>
                    <Informations
                        company={info[1][0]}
                        companyF={comp}
                        flightNum = {info[1][1]}
                        timeDep = {info[1][2]}
                        dateDep = {info[1][3]}
                        timeTransit = {info[1][4]}
                        layover = {info[1][5]}
                        layoverF = {scales}
                        luggage = {info[1][6]}
                        luggageF = {lug}
                        price = {info[1][7]}>
                    </Informations>
                    <Informations
                        company={info[2][0]}
                        companyF={comp}
                        flightNum = {info[2][1]}
                        timeDep = {info[2][2]}
                        dateDep = {info[2][3]}
                        timeTransit = {info[2][4]}
                        layover = {info[2][5]}
                        layoverF = {scales}
                        luggage = {info[2][6]}
                        luggageF = {lug}
                        price = {info[2][7]}
                         >
                    </Informations>
                    <Informations
                        company={info[3][0]}
                        companyF={comp}
                        flightNum = {info[3][1]}
                        timeDep = {info[3][2]}
                        dateDep = {info[3][3]}
                        timeTransit = {info[3][4]}
                        layover = {info[3][5]}
                        layoverF = {scales}
                        luggage = {info[3][6]}
                        luggageF = {lug}
                        price = {info[3][7]}
                         >
                    </Informations>

                </Stack>


        </Box>

    );

}

export default Results;