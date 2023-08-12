import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonatePaypalForm from "./donate-paypal-form";


export default function DonatePaypalApp() {
  const env= import.meta.env.VITE_APP_ENV;
  let id=import.meta.env.VITE_APP_CLIENT_ID;
  if(env==="dev"){
    id=import.meta.env.VITE_APP_CLIENT_ID_OTHER;
  }
  return (
    <PayPalScriptProvider
      options={{
        "client-id": id,
       
        currency: "USD",
      }}
    >
     
      <DonatePaypalForm />
     
     
    </PayPalScriptProvider>
   );
}