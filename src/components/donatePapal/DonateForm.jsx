import { Stack, TextField } from "@mui/material";
//import AmountField from "./AmountField";
import DonateButton from "./DonateButton";
import { useState } from "react";
const min = 5.00;
export default function DonateForm() {
  // ** State for the donation amount selected in the `AmountPicker` component  The amount is set onChange in the `AmountPicker` fieldset **
  const [amount, setAmount] = useState("5.00");
  const handleChange=(e)=>{
    if (e.target.value === "") {
      setAmount(e.target.value);
      return;
    }
    const value = +e.target.value;
    if (value < min) {
      setAmount(min);
    } else {
      setAmount(e.target.value);
    }
   
  }
  return (
    <form onSubmit={(e) => {e.preventDefault();}}> 
      <Stack>
      <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="Donate Amount "
          variant="outlined"
          value={amount}
          onChange={handleChange}
        />
      
        {/* ** `currency` and `amount` get passed to the Donate button so that the selected amount is populated at checkout **  */}
        <DonateButton amount={amount} />
        </Stack>
    </form>
  );
}