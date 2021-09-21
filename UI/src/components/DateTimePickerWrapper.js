import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import esLocale from 'date-fns/locale/es';
import { Typography } from '@mui/material';

export default function DateTimePickerWrapper({ label, errorMsg, valueCallBack }) {
  const [value, setValue] = React.useState(new Date());
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
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label={label}
        value={value}
        inputFormat="dd/MM/yyyy HH:mm"
        minDateTime={new Date()}
        onChange={(newValue) => {
          updateValueToParent(newValue);
        }}
      />
      {error && <Typography sx={{ marginTop:'0px !important', color:'red'}} variant="caption">{errorMsg}</Typography> }
    </LocalizationProvider>
  );
}