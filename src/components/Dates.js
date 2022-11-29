import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function ResponsiveDatePickers({ date }) {
  const [departure, setDeparture] = React.useState(dayjs('2022-04-07'));
  const [ret, setReturn] = React.useState(dayjs('2022-04-07'));

  const changeDeparture = (newValue) => {
    setDeparture(newValue);
  }

  const changeReturn = (newValue) => {
      setReturn(newValue);
    }

  return (

    <LocalizationProvider dateAdapter={AdapterDayjs}>
        {date==="departure" && (
        <DesktopDatePicker
          label="Departure date"
          value={departure}
          minDate={dayjs('2017-01-01')}
          onChange={changeDeparture}
          renderInput={(params) => <TextField {...params} />}
        />
        )}
        {date==="return" && (
            <DesktopDatePicker
                      label="Return date"
                      value={ret}
                      minDate={dayjs('2017-01-01')}
                      onChange={changeReturn}
                      renderInput={(params) => <TextField {...params} />}
                    />
        )}
    </LocalizationProvider>
  );
}
