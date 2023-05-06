import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import DonateButton from "./DonateButton";

const MIN_AMOUNT = 10.00;

export default function DonateForm() {
  const [amount, setAmount] = useState("10");
  const [donationSuccessful, setDonationSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!isValidNumber(amount)) {
      setErrorMessage("Please enter a valid number.");
      return;
    }

    if (parseFloat(amount) < MIN_AMOUNT) {
      setErrorMessage(`Minimum donation amount is $${MIN_AMOUNT}.`);
      return;
    }

    setErrorMessage("");
    // submit form
  };

  const isValidNumber = (input) => {
    return !isNaN(parseFloat(input)) && isFinite(input);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {donationSuccessful ? (
        <Typography variant="h6">Thank you for your donation!</Typography>
      ) : (
        <Stack>
          <TextField
            style={{ width: "400px", margin: "5px" }}
            label="Donate Amount (US$)"
            variant="outlined"
            value={amount}
            onChange={handleChange}
          />
          {errorMessage && (
            <Typography variant="body1" color="error">
              {errorMessage}
            </Typography>
          )}
          <DonateButton
            amount={amount}
            setDonationSuccessful={setDonationSuccessful}
          />
        </Stack>
      )}
    </form>
  );
}
