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



    const [input,setInput]=React.useState([
        {"id":1,"flightNumber":"RY20233","origin":"ROMANIA","destination":"SPAIN","airline":"RYANAIR","dateTimeDeparture":"2022-11-22T09:00:00","timeTransit":"2:00","scalesNumber":"0", "allowLuggage":true,"price":"200","tripType":false},
        {"id":2,"flightNumber":"AE00233","origin":"ROMANIA","destination":"SPAIN","airline":"AEGEAN","dateTimeDeparture":"2022-11-22T10:00:00","timeTransit":"1:00","scalesNumber":"1", "allowLuggage":false, "price":"300","tripType":true},
        {"id":3,"flightNumber":"IB33456","origin":"ROMANIA","destination":"SPAIN","airline":"IBERIA","dateTimeDeparture":"2022-11-22T09:30:00","timeTransit":"3:00","scalesNumber":"2", "allowLuggage":true, "price":"500","tripType":true},
        {"id":4,"flightNumber":"IB70456","origin":"ROMANIA","destination":"SPAIN","airline":"IBERIA","dateTimeDeparture":"2022-11-23T09:00:00","timeTransit":"2:00","scalesNumber":"1", "allowLuggage":false, "price":"200","tripType":false}
    ])

    const [comp,setComp]=React.useState('All');
    const [scales,setScales]=React.useState("0");
    const [lug,setLuggage]=React.useState(false);
    const [time,setTimeF]=React.useState("0");
    const [info,setInfo]=React.useState(input);



    const handleAirlineF = (e) => {
        setComp(e.target.value);
    }

    const handleLuggageF = (e) => {
        setLuggage(e.target.value);
    }

    const handleScalesF = (e) => {
        setScales(e.target.value);
        if(e.target.value==="1"){
                 info.sort((a, b) => a["scalesNumber"] - b["scalesNumber"]);
        }
        else if(e.target.value==="2"){
            info.sort((a, b) => b["scalesNumber"] - a["scalesNumber"]);
        }
    }

    const handleInfo = () => {
        setInfo(input);
    }

    const handleTimeF = (e) => {
        setTimeF(e.target.value);
        if(e.target.value==="1"){
            info.sort((a, b) => a["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll("T","") - b["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll("T",""));
        }
        else if(e.target.value==="2"){
            info.sort((a, b) => b["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll("T","") - a["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll("T",""));
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
                {info.map((item,index) => (
                         <Informations
                            company={item["airline"]}
                            companyF={comp}
                            flightNum = {item["flightNumber"]}
                            dateDep = {item["dateTimeDeparture"]}
                            timeTransit = {item["timeTransit"]}
                            layover = {item["scalesNumber"]}
                            layoverF = {scales}
                            luggage = {item["allowLuggage"]}
                            luggageF = {lug}
                            price = {item["price"]}
                            >
                        </Informations>

                ))
                }
            </Stack>


        </Box>

    );

}

export default Results;