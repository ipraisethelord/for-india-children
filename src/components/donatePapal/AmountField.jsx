import { useState } from "react";
import TextField from "@mui/material/TextField";
import NumberFormat from "react-number-format";
import { CurrencyInput } from "../reusable/currentcy-input";
export default function AmountField({ onAmountChange }) {
  // ** state `isCustomSelected` and function `handleCustomNotSelected` for conditional rendering of the number input for custom donation amount **
  const [amount, setAmount] = useState(0.00);
const onAmountChange = (e)=>{
  setAmount(e.target.value);
}
  return (
<CurrencyInput suffix="$" label="Donate Amount" onValuesChange={onAmountChange} />
    // <TextField
    //     style={{ width: "300px", margin: "5px" }}
    //     type="number"
    //     label="Donate Amount "
    //     variant="outlined"
    //     id="customAmountNumberInput"
    //     value={amount}
    //     onChange={onAmountChange}
    // />
    
  )


}