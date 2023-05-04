import { useState, useCallback } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { TextField, Typography, Box } from "@mui/material";

export default function PaypalDonate({ description, defaultAmount}) {
  const [amount, setAmount] = useState(defaultAmount);
  const [status, setStatus] = useState();

  const handleChange = useCallback(e => setAmount(e?.target?.value), [])
  const createOrder = useCallback((data, actions) => {
    return actions.order.create({
        purchase_units: [
            {
              amount: {
                value: amount,
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: amount,
                  },
                },
              },  
              application_context: {
                shipping_preference: "NO_SHIPPING"
              },
              items: [
                {
                  name: "Donation to build school",
                  description:
                    "All proceeds directly support building of the Baptist Academy CBSE school. Thank you.",
                  quantity: "1",
                  unit_amount: {
                    currency_code: "USD",
                    value: amount,
                  },
                  category: "DONATION",
                },
              ],
            },
          ],
    })
  }, [amount, description])

  const handleApprove = useCallback(async (data, actions) => {
    await actions.order.capture();
    setStatus('SUCCESS');
  }, [])

  const handleError = useCallback(err => console.warn(err), []);

  return (<>
 
  {
    status === 'SUCCESS' ?
      <Typography variant="h3">Thank you. Your donation has been received.</Typography>
      :
      <Box>
       <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="Donate Amount "
          variant="outlined"
          value={amount}
          onChange={handleChange}
        />
      
        <PayPalButtons forceReRender={[amount]} createOrder={createOrder} onApprove={handleApprove} onError={handleError} style={{
          shape: "pill",
          color: "blue",
          layout: "vertical",
          label: "donate"
        }} />
      </Box>
  }
</>
)};

