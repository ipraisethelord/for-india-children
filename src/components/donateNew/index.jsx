import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {Box} from "@mui/material";
import PaypalDonate from "./paypalDonate";


export default function DonateApp () {


    return (<Box>
        
        <PayPalScriptProvider
            options={{
              "client-id":
               import.meta.env.VITE_APP_CLIENT_ID,
              "enable-funding": "venmo",
              currency: "USD"
            }}
          >
           <PaypalDonate description={"Donate to build school"} defaultAmount={"5.00"} />
          </PayPalScriptProvider>
        
        </Box>)
}