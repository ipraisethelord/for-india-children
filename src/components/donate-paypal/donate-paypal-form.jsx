import { Typography, Paper, Box } from "@mui/material";
import { useState } from "react";
import DonatePaypalButton from "./donate-paypal-button";
import AmountPicker from "./amount-picker.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
const MIN_AMOUNT = 1.00;

export default function DonatePaypalForm() {
  const [amount, setAmount] = useState("100");
  const [donationSuccessful, setDonationSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [paypalError, setPaypalError] = useState(""); // State to store the PayPal error message

  const handleChange = (e) => {
    setErrorMessage("");
    setAmount(e.target.value);
    setPaypalError(""); // Clear the PayPal error message when the amount is changed
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (DEBUG) {
      console.log("submit amount " + amount);
    }
    if (!amount || !isValidNumber(amount)) {
      setErrorMessage("Please enter a valid number.");
      return;
    }

    if (parseFloat(amount) < MIN_AMOUNT) {
      setErrorMessage(`Minimum donation amount is $${MIN_AMOUNT}.`);
      return;
    }

    setErrorMessage("");
    setDonationSuccessful(true); // Set donationSuccessful to true upon successful form submission
    // submit form
  };

  const isValidNumber = (input) => {
    return !isNaN(parseFloat(input)) && isFinite(input);
  };

  ///media query
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  let font = "body1";
  let width = "300px";
  let marginTop = "4";
  let padding = "2";

  if (isMediumScreen) {
    font = "h6";
    width = "500px";
    marginTop = "10";
    padding = "4";
  }

  if (isLargeScreen) {
    font = "h5";
    width = "580px";
    marginTop = "10";
    padding = "5";
  }

  return (
    <Box>
      {donationSuccessful ? (
       <Box display="flex" justifyContent="flex-start" alignItems="start" minHeight="50vh">
       <Box margin={4} alignContent="center">
         <Typography variant={font} sx={{ marginTop: "1px" }}>
           Thank you for your generous donation towards building our school.
           Your kindness and sacrificial love are greatly appreciated!
         </Typography>
         &nbsp;
         <img
           src="/images/thankyou.jpg"
           alt="thank you"
           width={width}
           height="auto"
           style={{ maxWidth: "100%" }}
         />
       </Box>
     </Box>
     
      ) : (
        <form onSubmit={handleFormSubmit}>
          <Box>
            <AmountPicker onAmountChange={handleChange} amount={amount} />
            {errorMessage && (
              <Typography variant="body1" color="error" sx={{ color: "red" }}>
                {errorMessage}
              </Typography>
            )}
            {paypalError && (
              <Typography variant="body1" color="error" sx={{ color: "red" }}>
                {paypalError}
              </Typography>
            )}
            <DonatePaypalButton
              amount={amount}
              setDonationSuccessful={setDonationSuccessful}
              setPaypalError={setPaypalError}
            />
          </Box>
        </form>
      )}
    </Box>
  );
}
