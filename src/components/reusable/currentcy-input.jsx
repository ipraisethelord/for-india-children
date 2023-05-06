import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';


export const CustomTextFieldNumeric = (props) => {
  return (
    <TextField
      {...props}
      size={'small'}
      variant='outlined'
      sx={{ width: '100%' }}
    />
  );
};



export default function CurrencyInput({ suffix, label, onValuesChange }) {
  return (
    <NumericFormat
      defaultValue={0}
      label={label}
      thousandSeparator
      InputProps={{
        endAdornment: <InputAdornment position='start'>{suffix}</InputAdornment>,
      }}
      onFocus={(e) => e.target.select()}
      onValueChange={(values) => {
        if (values.floatValue) onValuesChange(values.floatValue);
      }}
      customInput={CustomTextFieldNumeric}
    />
  );
}
