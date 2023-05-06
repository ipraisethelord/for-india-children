import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import DonateButton from "./DonateButton";
import  NumberFormatTextField  from "../reusable/NumberFormatTextField";
import CurrencyInput from "../reusable/currentcy-input";
const min = 5.00;

export default function DonateForm() {
  const [amount, setAmount] = useState(min.toString());
  const [donationSuccessful, setDonationSuccessful] = useState(false);

  const handleChange = (value) => {
  
    if (value < min) {
      setAmount(min.toString());
    } else {
      setAmount(value.toFixed(2));
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      {donationSuccessful ? (
        <Typography variant="h6" >Thank you for your donation!</Typography>
      ) : (
        <Stack>
         
          <CurrencyInput suffix="$" label ="Donate Amount" onValuesChange={handleChange} />
       
         <DonateButton amount={amount} setDonationSuccessful={setDonationSuccessful} />

        </Stack>
      )}
    </form>
  );  

}