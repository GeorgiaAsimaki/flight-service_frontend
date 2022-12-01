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
        {"id":1,"flightNumber":"RY20233","origin":"ROMANIA","destination":"SPAIN","airline":"RYANAIR","dateTimeDeparture":"2022-11-22 09:00:00","transitTime":"2:00", "allowLuggage":true,"layoverNumber":"0","price":"200"},
        {"id":2,"flightNumber":"AE00233","origin":"ROMANIA","destination":"SPAIN","airline":"AEGEAN","dateTimeDeparture":"2022-11-22 10:00:00","transitTime":"1:00","allowLuggage":false, "layoverNumber":"1", "price":"300"},
        {"id":3,"flightNumber":"IB33456","origin":"ROMANIA","destination":"SPAIN","airline":"IBERIA","dateTimeDeparture":"2022-11-22 09:30:00","transitTime":"3:00", "allowLuggage":true,"layoverNumber":"2", "price":"500"},
    ]);

    const [ret,setReturn]=React.useState([
        {"id":5,"flightNumber":"RY19999","origin":"ROMANIA","destination":"SPAIN","airline":"RYANAIR","dateTimeDeparture":"2022-11-26 09:00:00","transitTime":"2:00", "allowLuggage":true,"layoverNumber":"0","price":"200"},
        {"id":6,"flightNumber":"AE20599","origin":"ROMANIA","destination":"SPAIN","airline":"AEGEAN","dateTimeDeparture":"2022-11-28 10:00:00","transitTime":"1:00", "allowLuggage":false, "layoverNumber":"1", "price":"300"},
        {"id":8,"flightNumber":"IB70456","origin":"ROMANIA","destination":"SPAIN","airline":"IBERIA","dateTimeDeparture":"2022-11-27 09:00:00","transitTime":"2:00","allowLuggage":false, "layoverNumber":"2","price":"200","tripType":false}

    ]);

    const [comp,setComp]=React.useState('All');
    const [scales,setScales]=React.useState("0");
    const [lug,setLuggage]=React.useState(false);
    const [time,setTimeF]=React.useState("0");
    const [info,setInfo]=React.useState(input);
    const [infoRet,setInfoReturn]=React.useState(ret);



    const handleAirlineF = (e) => {
        setComp(e.target.value);
    }

    const handleLuggageF = (e) => {
        setLuggage(e.target.value);
    }

    const handleScalesF = (e) => {
        setScales(e.target.value);
        if(e.target.value==="1"){
            info.sort((a, b) => a["layoverNumber"] - b["layoverNumber"]);
            infoRet.sort((a, b) => a["layoverNumber"] - b["layoverNumber"]);

        }
        else if(e.target.value==="2"){
            info.sort((a, b) => b["layoverNumber"] - a["layoverNumber"]);
            infoRet.sort((a, b) => b["layoverNumber"] - a["layoverNumber"]);

        }
    }


    const handleTimeF = (e) => {
        setTimeF(e.target.value);
        if(e.target.value==="1"){
            info.sort((a, b) => a["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll(" ","") - b["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll(" ",""));
            infoRet.sort((a, b) => a["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll(" ","") - b["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll(" ",""));

        }
        else if(e.target.value==="2"){
            info.sort((a, b) => b["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll(" ","") - a["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll(" ",""));
            infoRet.sort((a, b) => b["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll(" ","") - a["dateTimeDeparture"].replaceAll("-","").replaceAll(":","").replaceAll(" ",""));
        }
    }

    return(
        <Box sx={{ width: '100%' }}>
             <Box sx={{ borderTop:2, borderBottom: 2, borderColor: 'divider', bgcolor:'#f5f5f5' }}>
                <FormControl sx={{m: 3, top:5,  minWidth: 120 }} >
                     <InputLabel id="demo-simple-select-helper-label">Airline </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="airlineFilter"
                            value={comp}
                            label="Airline"
                            onChange={handleAirlineF}
                            >
                                <MenuItem id="allAir" value={'All'}> All </MenuItem>
                                <MenuItem id="aegean" value={'AEGEAN'}> AEGEAN </MenuItem>
                                <MenuItem id="iberia" value={'IBERIA'}> IBERIA </MenuItem>
                                <MenuItem id="ryanair" value={'RYANAIR'}> RYANAIR </MenuItem>
                        </Select>
                </FormControl>
                <FormControl sx={{m: 3, top:5,  minWidth: 120 }} >
                    <InputLabel id="demo-simple-select-helper-label">Luggage</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="luggageFilter"
                            value={lug}
                            label="Luggage"
                            onChange={handleLuggageF}
                        >
                            <MenuItem id="allowL" value={true}>Allowed</MenuItem>
                            <MenuItem id='notAllowedL' value={false}> - </MenuItem>
                        </Select>
                </FormControl>
                <FormControl sx={{m: 3, top:5,  minWidth: 175 }} >
                    <InputLabel id="demo-simple-select-helper-label">Scales</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="scalesFilter"
                            value={scales}
                            label="Scales"
                            onChange={handleScalesF}
                        >
                            <MenuItem id="noScales" value={"0"}>-</MenuItem>
                            <MenuItem id="ascendScales" value={"1"}>Ascending order</MenuItem>
                            <MenuItem id="descendScales"value={"2"}>Descending order</MenuItem>
                        </Select>
                </FormControl>
                <FormControl sx={{m: 3, top:5,  minWidth: 175 }} >
                    <InputLabel id="demo-simple-select-helper-label">Schedule</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="scheduleFilter"
                            value={time}
                            label="Schedule"
                            onChange={handleTimeF}
                        >
                            <MenuItem id="noSchedule" value={"0"}>-</MenuItem>
                            <MenuItem id="ascendSchedule" value={"1"}>Ascending order</MenuItem>
                            <MenuItem id="descendSchedule" value={"2"}>Descending order</MenuItem>
                        </Select>
                </FormControl>
             </Box>
             <Box sx={{ borderTop:2, borderBottom: 2, borderColor: 'divider', bgcolor:'#dcdcdc' }}>
                <p>Departure</p>
             </Box>
            <Stack spacing={2}>
                {info.map((item,index) => (
                         <Informations
                            company={item["airline"]}
                            companyF={comp}
                            flightNum = {item["flightNumber"]}
                            dateDep = {item["dateTimeDeparture"]}
                            timeTransit = {item["transitTime"]}
                            layover = {item["layoverNumber"]}
                            layoverF = {scales}
                            luggage = {item["allowLuggage"]}
                            luggageF = {lug}
                            price = {item["price"]}
                            >
                        </Informations>

                ))
                }
            </Stack>
            <Box sx={{ borderTop:2, borderBottom: 2, borderColor: 'divider', bgcolor:'#dcdcdc' }}>
                <p>Return</p>
            </Box>
            <Stack spacing={2}>
                {infoRet.map((item,index) => (
                         <Informations
                            company={item["airline"]}
                            companyF={comp}
                            flightNum = {item["flightNumber"]}
                            dateDep = {item["dateTimeDeparture"]}
                            timeTransit = {item["transitTime"]}
                            layover = {item["layoverNumber"]}
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