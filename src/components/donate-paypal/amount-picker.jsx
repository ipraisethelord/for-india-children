import React, { useState, useEffect } from "react";
import { Radio, RadioGroup, FormControlLabel, TextField, Typography, Box, InputAdornment  } from "@mui/material";

export default function AmountPicker({ onAmountChange, amount }) {
  const [isCustomSelected, setIsCustomSelected] = useState(true);
  const [isSelected25, setIsSelected25] = useState(false);
  const [isSelected50, setIsSelected50] = useState(false);
  const [isSelected75, setIsSelected75] = useState(false);
    // Set initial state after the component mounts
    useEffect(() => {
      setIsCustomSelected(true);
      setIsSelected25(false);
      setIsSelected50(false);
      setIsSelected75(false);
      onAmountChange({ target: { value: "100.00" } }); // Set default custom amount to $100
    }, []);
  
  const setIsSelected=(value) =>{
  //console.log(value);
    if(value==="25.00"){
      setIsSelected25(true);
      setIsSelected50(false);
      setIsSelected75(false);
      setIsCustomSelected(false);
     }else if(value==="50.00"){
      setIsSelected25(false);
      setIsSelected50(true);
      setIsSelected75(false);
      setIsCustomSelected(false);
     }else if(value==="75.00"){
      setIsSelected25(false);
      setIsSelected50(false);
      setIsSelected75(true);
      setIsCustomSelected(false);
      
     }else{
      setIsSelected25(false);
      setIsSelected50(false);
      setIsSelected75(false);     
      setIsCustomSelected(true);
     }

  };
  const handleChange = (e) => {
   
      onAmountChange(e);
    
    setIsSelected(e.target.value);
  };
 
  return (
    <Box padding="16px" margin="8px">
      <Typography component="legend">Donation Amount</Typography>
      <RadioGroup>
        <FormControlLabel
          value="25.00"
          control={<Radio color="primary" />}
          label="$25.00"
          labelPlacement="end"
          checked={isSelected25}
          onChange={handleChange}
        />
        <FormControlLabel
          value="50.00"
          control={<Radio color="primary" />}
          label="$50.00"
          labelPlacement="end"
          checked={isSelected50}
          onChange={handleChange}
        />
        <FormControlLabel
          value="75.00"
          control={<Radio color="primary" />}
          label="$75.00"
          labelPlacement="end"
          checked={isSelected75}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Radio color="primary" />}
          label={
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Custom donation amount: &nbsp;
            </Typography>
          }
          labelPlacement="end"
          checked={isCustomSelected}
          onChange={handleChange}
        /><Box>
        {isCustomSelected && (
          <TextField
            type="number"
            variant="standard"
            size="small"
            style={{ fontSize: "16px", fontWeight: "bold", paddingLeft:"7px" }}
            placeholder="Enter custom amount"
            value={amount}
            onChange={handleChange}
            disabled={false}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
        )}</Box>
      </RadioGroup>
    </Box>
  );
}
