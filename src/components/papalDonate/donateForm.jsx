import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
// import {
//   PayPalScriptProvider,
//   PayPalButtons,
// } from "@paypal/react-paypal-js";

const DonateForm = () => {
  const [amount, setAmount] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDonateClick = () => {
    setShowConfirmation(true);
  };

  const handleClose = () => {
    setShowConfirmation(false);
  };

  const DonateButton = ({ amount }) => {
    const paypalOptions = {
      "client-id": import.meta.env.VITE_APP_CLIENT_ID,
      currency: "USD",
    };

    const donationAmount = amount; // The amount of the donation
    console.log(donationAmount);

    const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: donationAmount,
              currency_code: "USD",
            },
          },
        ],
      });
    };

    const onApprove = (data, actions) => {
      return actions.order.capture().then(function (details) {
        // Handle the successful donation here
        console.log("success:" + donationAmount);
      });
    };

    return (<></>
      // <PayPalScriptProvider options={paypalOptions}>
      //   <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
      // </PayPalScriptProvider>
    );
  };

  return (
    <div>
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="Donate Amount "
          variant="outlined"
          value={amount}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" onClick={handleDonateClick}>
          Donate By Paypal
        </Button>
      </form>
      <Dialog
        open={showConfirmation}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Confirm Donation"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Is this correct amount: ${amount}?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Box display="flex" justifyContent="space-between" width="100%">
    
    <Button onClick={() => setShowConfirmation(false)}>
      <DonateButton amount={amount} />
    </Button>
    <Button onClick={handleClose} style={{ alignSelf: "flex-start" }} variant="outlined">Cancel</Button>
  </Box>
        </DialogActions>
        </Dialog>

    </div>
  );
}
export default DonateForm;