import Typography from "@mui/material/Typography";
import  Box from "@mui/material/Box";
import {
    PayPalScriptProvider,
    PayPalButtons,
  } from "@paypal/react-paypal-js";
  
  const DonateButton = (amount) => {
    const paypalOptions = {
      "client-id": import.meta.env.VITE_APP_CLIENT_ID,
      currency: "USD",
    };
  
    const donationAmount = amount; // The amount of the donation
  console.dir(donationAmount);
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
        <Box display="flex" margin={4} justifiedContent="center">
            <Typography variant="subtitle1">Thank you for your enerous donation towards building our school. Your kindness and sacrificial love are greatly appreciated! </Typography>
        </Box>
      });
    };
  
    return (
      <PayPalScriptProvider options={paypalOptions}>
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
      </PayPalScriptProvider>
    );
  };
  export default DonateButton;
  