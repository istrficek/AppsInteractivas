import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import esLocale from 'date-fns/locale/es';
import { Typography } from '@mui/material';
import { DatePicker } from '@mui/lab';

export default function DatePickerWrapper({ label, errorMsg, valueCallBack, startValue }) {
  const [value, setValue] = React.useState(startValue);
  const [error, setError] = React.useState(false);

  const updateValueToParent = (value) => {
      setValue(value)
      if(new Date(value) < new Date()){
        setError(true);
      } else{
        setError(false);
      }
      valueCallBack(value);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
      <DatePicker
        renderInput={(props) => <TextField {...props} />}
        label={label}
        value={value}
        inputFormat="dd/MM/yyyy"
        minDateTime={'01/01/1990'}
        onChange={(newValue) => {
          updateValueToParent(newValue);
        }}
      />
      {error && <Typography sx={{ marginTop:'0px !important', color:'red'}} variant="caption">{errorMsg}</Typography> }
    </LocalizationProvider>
  );
}