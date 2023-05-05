import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import DonateButton from "./DonateButton";

const min = 5.00;

export default function DonateForm() {
  const [amount, setAmount] = useState(min.toString());
  const [donationSuccessful, setDonationSuccessful] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setAmount(e.target.value);
      return;
    }

    const value = parseFloat(e.target.value);
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
          $<TextField
            style={{ width: "200px", margin: "5px" }}
            type="number"
            label="Donate Amount"
            variant="outlined"
            value={amount}
            onChange={handleChange}
            inputProps={{
              step: "1.00",
              min: min,
            }}
          />
         

         <DonateButton amount={amount} setDonationSuccessful={setDonationSuccessful} />

        </Stack>
      )}
    </form>
  );  

}