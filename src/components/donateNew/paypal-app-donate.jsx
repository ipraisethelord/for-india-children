import { useEffect, useState, useCallback } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";


const ButtonWrapper = ({ currency }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [status, setStatus] = useState();
    
    
    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency]);
    const [donation, setDonation] = useState(7);
    console.log("passed " + donation);
    
    return (
        <>
            {
                status === 'SUCCESS' ?
                    <Typography variant="h3">Thank you. Your donation has been received.</Typography>
                :
                    <Box>
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="number"
                            label="Donate Donation"
                            variant="outlined"
                            value={donation}
                            onChange={(e) => setDonation(e.target.value)}
                        />
                    </Box>
            }
     
            <PayPalButtons
                fundingSource={undefined}
                style={{ "layout": "vertical", "label": "donate" }}
                disabled={false}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                              amount: {
                                value: donation,
                                breakdown: {
                                  item_total: {
                                    currency_code: "USD",
                                    value: donation,
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
                                    value: donation,
                                  },
                                  category: "DONATION",
                                },
                              ],
                            },
                          ],
                    }).then((orderId) => {
                        // Your code here after create the donation
                        setStatus(true);
                        return orderId;
                    });
                }}
            />
        </>
    );
}

export default function PayPalAppDonate() {
    return (
        <PayPalScriptProvider
            options={{
                "client-id": import.meta.env.VITE_APP_CLIENT_ID,
                components: "buttons",
                currency: "USD"
            }}
        >
            <ButtonWrapper currency={"USD"} />
        </PayPalScriptProvider>
    );
}
